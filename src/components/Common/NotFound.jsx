import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
    <div
      aria-hidden="true"
      className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]"
    />
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl"
    />

    <p className="font-mono text-7xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400 sm:text-9xl">
      404
    </p>
    <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Page not found</h1>
    <p className="mt-3 max-w-md text-slate-600 dark:text-slate-400">
      The page you're looking for doesn't exist or has been moved. Let's get you back to the
      portfolio.
    </p>

    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <a href="/" className="btn-primary">
        <Home className="h-4 w-4" />
        Back to home
      </a>
      <button type="button" onClick={() => window.history.back()} className="btn-secondary">
        <ArrowLeft className="h-4 w-4" />
        Go back
      </button>
    </div>
  </main>
);

export default NotFound;