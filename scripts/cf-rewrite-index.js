// CloudFront Function (viewer-request) for a Next.js static export
// with `trailingSlash: true` served from S3.
//
// Rewrites:
//   /privacy-policy-customers          -> /privacy-policy-customers/index.html
//   /privacy-policy-customers/         -> /privacy-policy-customers/index.html
//   /                                  -> /index.html
// Leaves real files (anything with a "." in the last segment) untouched,
// so /_next/static/... , images, .txt, .js, .css keep working.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith("/")) {
    request.uri = uri + "index.html";
    return request;
  }

  var lastSegment = uri.substring(uri.lastIndexOf("/") + 1);
  if (lastSegment.indexOf(".") === -1) {
    request.uri = uri + "/index.html";
  }

  return request;
}
