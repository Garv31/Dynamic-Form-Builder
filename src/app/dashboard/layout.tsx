import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "@/components/auth/LogoutButton";
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  MessageSquare,
  Settings,
} from "lucide-react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-950 text-white flex flex-col shadow-xl">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-3xl font-bold">
            FormBuilder
          </h1>

          <p className="text-slate-400 text-sm mt-2">
            Dynamic Form Platform
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            href="/dashboard/forms"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            <FileText size={20} />
            My Forms
          </Link>

          <Link
            href="/dashboard/responses"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            <MessageSquare size={20} />
            Responses
          </Link>

          <Link
            href="/dashboard/analytics"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            <BarChart3 size={20} />
            Analytics
          </Link>

          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            <Settings size={20} />
            Settings
          </Link>
        </nav>

        <div className="p-6 border-t border-slate-800">
  <div className="bg-slate-800 rounded-xl p-4">
    <p className="text-xs text-slate-400 mb-2">
      Logged in as
    </p>

    <p
      className="text-sm text-white break-words mb-4"
      title={session.user?.email ?? ""}
    >
      {session.user?.email}
    </p>

    <LogoutButton />
  </div>
</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}