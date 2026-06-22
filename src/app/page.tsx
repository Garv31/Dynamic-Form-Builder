import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-blue-500">
          Dynamic Form Builder
        </h1>

        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="text-slate-300 hover:text-white transition"
          >
            Features
          </a>

          <Link
            href="/login"
            className="text-slate-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 text-center">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Create Forms
          <span className="text-blue-500"> in Minutes</span>
        </h1>

        <p className="mt-8 text-xl text-slate-400 max-w-3xl mx-auto">
          Build, share, and collect responses with a modern
          form builder platform. Manage everything from a
          powerful dashboard.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            Get Started
          </Link>

          <Link
            href="/register"
            className="border border-slate-700 hover:bg-slate-900 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            Create Account
          </Link>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-6xl mx-auto px-8 pb-24"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <div className="text-4xl mb-4">📝</div>

            <h3 className="text-2xl font-semibold mb-3">
              Dynamic Forms
            </h3>

            <p className="text-slate-400">
              Create custom forms with different field
              types and validation options.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <div className="text-4xl mb-4">📊</div>

            <h3 className="text-2xl font-semibold mb-3">
              Analytics
            </h3>

            <p className="text-slate-400">
              Monitor submissions and gain insights from
              collected responses.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <div className="text-4xl mb-4">🚀</div>

            <h3 className="text-2xl font-semibold mb-3">
              Easy Sharing
            </h3>

            <p className="text-slate-400">
              Share public form links and start collecting
              responses instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 Dynamic Form Builder. Built with Next.js &
        Prisma.
      </footer>
    </main>
  );
}