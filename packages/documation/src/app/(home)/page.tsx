import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-16">
      <div className="space-y-4">
        <p className="text-sm font-medium text-fd-muted-foreground">Developer documentation template</p>
        <h1 className="text-3xl font-semibold tracking-normal text-fd-foreground">
          Minimal docs for integration guides and API references.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-fd-muted-foreground">
          A Fumadocs starter with installed documentation components, practical examples, and a shared
          design protocol for consistent future pages.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/docs"
          className="rounded-lg border bg-fd-primary px-4 py-2 font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
        >
          Open docs
        </Link>
        <Link
          href="/docs/test"
          className="rounded-lg border bg-fd-card px-4 py-2 font-medium text-fd-card-foreground transition-colors hover:bg-fd-accent/80"
        >
          View quick start
        </Link>
      </div>
    </main>
  );
}
