import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="app-section bg-white py-14 sm:py-20">
      <div className="app-container">
        <section className="relative overflow-hidden rounded-[1.75rem] bg-[#0B1224] px-6 py-14 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)] sm:px-10 sm:py-16 lg:px-14">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/8 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_32%)]" />
          </div>

          <div className="relative max-w-3xl">
            <p className="hero-reveal text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Error 404
            </p>
            <h1
              className="hero-reveal mt-4 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.06em] sm:text-[4rem]"
              style={{ animationDelay: "0.08s" }}
            >
              The page you are looking for could not be found.
            </h1>
            <p
              className="hero-reveal mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg"
              style={{ animationDelay: "0.14s" }}
            >
              The link may be out of date, the page may have moved, or the
              address may have been entered incorrectly.
            </p>

            <div
              className="hero-stat mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "0.2s" }}
            >
              <Link
                className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                to="/"
              >
                Back to Home
              </Link>
              <a
                className="inline-flex items-center rounded-full border border-white/18 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/35 hover:bg-white/6"
                href="tel:01159641600"
              >
                Call 0115 9641 600
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NotFound;
