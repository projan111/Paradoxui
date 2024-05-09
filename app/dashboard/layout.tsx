"use client";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import LoginSection from "@/components/dashboard/LoginSection";
import { supabase } from "@/utils/supabase/clientRepository";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { session } = useContext(SessionContext);

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
      <section className=" flex  gap-2  ">
        <div className=" hidden lg:block w-2/12 pt-[6rem]  ">
          {navItems.map((item: any, index: number) => (
            <Link
              href={item.href}
              key={index}
              className={`link ${pathname === item.href ? "bg-accent-600/80 text-white   " : "hover:bg-primary-400/10"} rounded-sm mb-2 transition-all ease-out duration-200   tracking-wider  flex items-center gap-2  py-1.5 px-3  opacity-85 `}>
              {item.icon} {item.name}
            </Link>
          ))}

          <div className="cursor-pointer  absolute bottom-0  p-2 ">
            <Button
              onClick={handleLogout}
              variant={"outline"}
              className=" flex  items-center gap-1 ">
              <LogOut size={18} />
              Logout
            </Button>
          </div>
        </div>

        <div className=" w-12 lg:hidden  ">
          <TooltipProvider>
            <aside className="fixed inset-y-0 left-0 z-10    flex-col border-r bg-background sm:flex pt-[6rem]">
              <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Tooltip>
                  {navItems.map((item, index) => (
                    <TooltipTrigger
                      key={index}
                      asChild>
                      <Link
                        href={item.href}
                        className={`${pathname == item.href ? "bg-accent-600 text-white/90" : " text-white  "} flex h-9 w-9 items-center justify-center rounded-lg    md:h-8 md:w-8`}>
                        {item.icon}
                        <span className="sr-only">{item.name}</span>
                      </Link>
                    </TooltipTrigger>
                  ))}
                </Tooltip>
                <Button

                  variant={"outline"}
                  className=" text-white  absolute bottom-0 mb-2 h-8 w-8">
                  <LogOut />
                </Button>{" "}
              </nav>
            </aside>
          </TooltipProvider>
        </div>

        <div className=" w-full bg-primary-400/5 px-2 py-3 h-[88.5vh] overflow-y-scroll  mt-[6rem] rounded-sm ">{children}</div>
      </section>
    );
  }
}

const navItems = [
  {
    name: "Categories",
    icon: <IconCategory className=" h-5 w-5" />,
    href: "/dashboard/categories",
  },

  {
    name: "Sub Categories",
    icon: <IconSubCategory className=" h-4 w-4" />,
    href: "/dashboard/sub-categories",
  },

  {
    name: "Components",
    icon: <IconComponents className=" h-5 w-5" />,
    href: "/dashboard/components",
  },

  {
    name: "Teams",
    icon: <IconTeams className=" h-5 w-5" />,
    href: "/dashboard/teams",
  },

  {
    name: "Profile",
    icon: <IconProfile className=" h-5 w-5" />,
    href: "/dashboard/profile",
  },
];

function IconCategory(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}>
      <path
        stroke="none"
        d="M0 0h24v24H0z"
      />
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
      <path d="M20 17 A3 3 0 0 1 17 20 A3 3 0 0 1 14 17 A3 3 0 0 1 20 17 z" />
    </svg>
  );
}

function IconSubCategory(props: React.SVGProps<SVGSVGElement>) {
  {
    return (
      <svg
        fill="none"
        viewBox="0 0 15 15"
        height="1em"
        width="1em"
        {...props}>
        <path
          stroke="currentColor"
          d="M2.5 4.5a2 2 0 110-4 2 2 0 010 4zm0 0v6m2 2a2 2 0 11-2-2m2 2a2 2 0 00-2-2m2 2h5a3 3 0 003-3v-2m0 0a2 2 0 110-4 2 2 0 010 4z"
        />
      </svg>
    );
  }
}

function IconComponents(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.757 6.343L12 2.1l4.242 4.243L12 10.586 7.757 6.343zm2.829 0L12 4.93l1.414 1.414L12 7.757l-1.414-1.414zM2.1 12l4.243-4.243L10.586 12l-4.243 4.242L2.1 12zm2.829 0l1.414-1.414L7.757 12l-1.414 1.414L4.93 12zM13.414 12l4.243 4.242L21.899 12l-4.242-4.243L13.414 12zm4.243-1.414L16.243 12l1.414 1.414L19.07 12l-1.414-1.414zM7.757 17.657L12 13.414l4.242 4.243L12 21.899l-4.243-4.242zm2.829 0L12 16.243l1.414 1.414L12 19.07l-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconTeams(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}>
      <path d="M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zM64 245.7c-10 11.2-16 26.1-16 42.3s6 31.1 16 42.3v-84.6zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416v-21.5c20-24.7 32-56.2 32-90.5 0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112 0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm-80 144c0 16.2 6 31 16 42.3v-84.6c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zm64 42.3c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-42.8c-37.8-18-64-56.5-64-101.2 0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
    </svg>
  );
}

function IconProfile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
        clipRule="evenodd"
      />
    </svg>
  );
}
