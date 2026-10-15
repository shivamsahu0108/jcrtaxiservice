export function pageHead(title: string, description: string) { return { meta: [{title}, {name:'description',content:description}, {property:'og:title',content:title}, {property:'og:description',content:description}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] }; }


/**
 * Use Netlify's image CDN in production to serve right-sized WebP images.
 * Keep the original Vite asset URL during local development, where Netlify's
 * image transformation endpoint is not available.
 */
export function optimizedImage(src: string, width: number, quality = 75) {
  if (import.meta.env.DEV) return src;

  const params = new URLSearchParams({
    url: src,
    w: String(width),
    q: String(quality),
    fm: "webp",
  });

  return `/.netlify/images?${params.toString()}`;
}

export function responsiveImageSet(src: string, widths: number[], quality = 75) {
  return widths
    .map((width) => `${optimizedImage(src, width, quality)} ${width}w`)
    .join(", ");
}
