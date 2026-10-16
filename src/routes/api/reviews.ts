import { createFileRoute } from "@tanstack/react-router";

type GooglePlaceReview = {
  name?: string;
  rating?: number;
  text?: { text?: string; languageCode?: string };
  originalText?: { text?: string; languageCode?: string };
  publishTime?: string;
  relativePublishTimeDescription?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

export const Route = createFileRoute("/api/reviews")({
  server: {
    handlers: {
      GET: async () => {
        const apiKey = process.env.GOOGLE_PLACES_API_KEY;
        const placeId = process.env.GOOGLE_PLACE_ID;

        if (!apiKey || !placeId) {
          return Response.json(
            { error: "Google reviews are not configured yet." },
            { status: 503, headers: { "Cache-Control": "no-store" } },
          );
        }

        try {
          const googleResponse = await fetch(
            `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
            {
              headers: {
                "X-Goog-Api-Key": apiKey,
                "X-Goog-FieldMask":
                  "id,displayName,rating,userRatingCount,googleMapsUri,reviews",
              },
              signal: AbortSignal.timeout(8000),
            },
          );

          if (!googleResponse.ok) {
            console.error("Google Places reviews request failed:", googleResponse.status);
            return Response.json(
              { error: "Reviews are temporarily unavailable." },
              { status: 502, headers: { "Cache-Control": "no-store" } },
            );
          }

          const place = (await googleResponse.json()) as {
            id?: string;
            displayName?: { text?: string };
            rating?: number;
            userRatingCount?: number;
            googleMapsUri?: string;
            reviews?: GooglePlaceReview[];
          };

          const reviews = (place.reviews ?? []).map((review) => ({
            rating: review.rating ?? 0,
            text: review.originalText?.text || review.text?.text || "",
            publishTime: review.publishTime ?? "",
            relativePublishTimeDescription:
              review.relativePublishTimeDescription ?? "",
            author: review.authorAttribution?.displayName || "Google user",
            authorUri: review.authorAttribution?.uri || "",
            authorPhotoUri: review.authorAttribution?.photoUri || "",
          }));

          return Response.json(
            {
              placeName: place.displayName?.text || "Jabalpur Car Rental Taxi Service",
              rating: place.rating ?? null,
              userRatingCount: place.userRatingCount ?? 0,
              googleMapsUri: place.googleMapsUri || "",
              reviews,
            },
            {
              headers: {
                "Cache-Control": "public, max-age=900, s-maxage=3600, stale-while-revalidate=86400",
              },
            },
          );
        } catch (error) {
          console.error("Unable to load Google Places reviews:", error);
          return Response.json(
            { error: "Reviews are temporarily unavailable." },
            { status: 502, headers: { "Cache-Control": "no-store" } },
          );
        }
      },
    },
  },
});
