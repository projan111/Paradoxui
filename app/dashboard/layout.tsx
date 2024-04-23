"use client";
import { Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className=" flex gap-4 ">
      <div className=" flex flex-col  w-2/12  pt-8 gap-3  bg-primary-400/5 h-[90vh] " >
        {navItems.map((item: any, index: number) => (
          <Link
            href={item.href}
            key={index}
            className={`link ${pathname === item.href ? "bg-primary-400/25   " : "hover:bg-primary-400/10"}  bg-primary-400/5 tracking-wider  flex items-center gap-1  py-1.5 px-3  opacity-85 `}>
            {item.name}
          </Link>
        ))}
      </div>

      <div className=" w-10/12 bg-primary-400/5 p-8">{children}</div>
    </div>
  );
}

const navItems = [
  {
    name: "Categories",
    icon: <Settings size={15} />,
    href: "/dashboard/categories",
  },

  {
    name: "Sub Categories",
    icon: <Settings size={15} />,
    href: "/dashboard/sub-categories",
  },

  {
    name: "Components",
    icon: <Settings size={15} />,
    href: "/dashboard/components",
  },
];
