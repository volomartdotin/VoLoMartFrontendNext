import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold text-brand">404</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Page not found</h1>
      <p className="mt-2 text-sm text-muted">That link may be old or mistyped.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Back to home
      </Link>
    </div>
  );
}
