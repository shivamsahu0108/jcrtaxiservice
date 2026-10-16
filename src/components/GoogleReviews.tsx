import { useEffect, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { businessConfig as business } from "../config/business";

type Review = {
  rating: number;
  text: string;
  publishTime: string;
  relativePublishTimeDescription: string;
  author: string;
  authorUri: string;
  authorPhotoUri: string;
};

type ReviewsResponse = {
  placeName: string;
  rating: number | null;
  userRatingCount: number;
  googleMapsUri: string;
  reviews: Review[];
  error?: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="reviewStars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          fill={index < Math.round(rating) ? "currentColor" : "none"}
        />
      ))}
    </span>
  );
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/reviews", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Google reviews could not be loaded");
        return response.json() as Promise<ReviewsResponse>;
      })
      .then((result) => {
        setData(result);
        setFailed(false);
      })
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === "AbortError") return;
        setFailed(true);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const mapsUrl = data?.googleMapsUri || business.googleMapsUrl;

  return (
    <div className="googleReviews">
      <div className="reviewsSummary">
        <div>
          <span className="googleReviewsLabel">Google customer reviews</span>
          <h3>{data?.rating != null ? data.rating.toFixed(1) : "Real"} <span aria-hidden="true">★</span></h3>
          {data?.rating != null && (
            <Stars rating={data.rating} />
          )}
          <p>
            {data?.userRatingCount
              ? `Based on ${data.userRatingCount.toLocaleString()} Google ratings`
              : "Reviews shared by customers on Google"}
          </p>
        </div>
        <a
          className="btn gold"
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View all on Google <ArrowRight aria-hidden="true" />
        </a>
      </div>

      {loading && (
        <div className="reviewGrid" aria-label="Loading Google reviews">
          {[1, 2, 3].map((item) => (
            <div className="reviewCard reviewSkeleton" key={item}>
              <span /><span /><span />
            </div>
          ))}
        </div>
      )}

      {!loading && !failed && data?.reviews?.length ? (
        <div className="reviewGrid">
          {data.reviews.map((review, index) => (
            <article className="reviewCard" key={`${review.author}-${review.publishTime}-${index}`}>
              <div className="reviewCardTop">
                {review.authorPhotoUri ? (
                  <img
                    className="reviewAvatar"
                    src={review.authorPhotoUri}
                    alt=""
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="reviewAvatar reviewAvatarFallback" aria-hidden="true">
                    {review.author.charAt(0).toUpperCase()}
                  </span>
                )}
                <div className="reviewAuthor">
                  {review.authorUri ? (
                    <a href={review.authorUri} target="_blank" rel="noopener noreferrer">
                      {review.author}
                    </a>
                  ) : (
                    <strong>{review.author}</strong>
                  )}
                  <span>{review.relativePublishTimeDescription || (review.publishTime ? new Date(review.publishTime).toLocaleDateString() : "Google review")}</span>
                </div>
                <span className="googleG" aria-label="Google review">G</span>
              </div>
              <Stars rating={review.rating} />
              <p className="reviewText">
                {review.text || "This customer left a star rating without written feedback."}
              </p>
            </article>
          ))}
        </div>
      ) : null}

      {!loading && (failed || !data?.reviews?.length) && (
        <div className="reviewsEmpty">
          <p>
            {failed
              ? "We couldn't load Google reviews right now. Please view them directly on Google."
              : "Google has not returned review text for this listing right now. You can still view the latest feedback on Google."}
          </p>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
            Open Google reviews <ArrowRight aria-hidden="true" />
          </a>
        </div>
      )}

      <p className="googleAttribution">Reviews provided by Google. Review content and author attribution are displayed from Google Places.</p>
    </div>
  );
}
