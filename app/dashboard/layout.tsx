"use client";
import { LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import LoginSection from "@/components/dashboard/LoginSection";
import { supabase } from "@/utils/supabase/clientRepository";
import { toast } from "sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);

  const { loki, session } = useContext(SessionContext);
  console.log(session);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Login failed:", error.message);
      toast.error(error.message || "Something went wrong. Please logout again.");
      return;
    }

    if (!error) {
      toast.success("Logout successful.");
      return;
    }
  };

  if (!session) {
    return <LoginSection />;
  }

  if (session) {
    return (
      <section className="my-[4.3rem] flex gap-4">
        <div className=" flex flex-col  w-2/12  pt-8 gap-3  bg-primary-400/5 h-[90vh] ">
          {navItems.map((item: any, index: number) => (
            <Link
              href={item.href}
              key={index}
              className={`link ${pathname === item.href ? "bg-primary-400/15   " : "hover:bg-primary-400/10"}  bg-primary-400/5 tracking-wider  flex items-center gap-1  py-1.5 px-3  opacity-85 `}>
              {item.name}
            </Link>
          ))}
          <div onClick={handleLogout} className="cursor-pointer  absolute bottom-0 mb-4  tracking-wider  flex gap-2 items-center   py-3 px-3  opacity-85">
            <LogOut size={18} />
            Logout
          </div>
        </div>

        <div className=" w-10/12 bg-primary-400/5 p-8 ">{children}</div>
      </section>
    );
  }
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
