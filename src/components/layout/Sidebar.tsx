"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Settings,
  ClipboardList,
} from "lucide-react";

const menuItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Forms",
      href: "/dashboard/forms/create",
      icon: FileText,
    },
    {
      name: "Responses",
      href: "/dashboard/responses",
      icon: ClipboardList,
    },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-950 text-white min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          ReadyNest
        </h1>
      </div>

      <nav className="px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800 transition mb-2"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}