"use client";
import { Menu, Settings, User2 } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const changeFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className=" flex">
      {!isFullScreen && (
        <div className={`${isFullScreen ? "" : "w-2/12"}  h-screen overflow-y-scroll  p-4 `}>
          <p className=" text-3xl font-semibold  mb-8   ">Paradox UI</p>
          <div className=" space-y-4 tracking-wider    ">
            {navItems.map((item: any, index: number) => (
              <CollapsibleTab
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
      )}

      <div className={`${isFullScreen ? " w-full " : " w-10/12"} h-screen overflow-y-scroll`}>
        <div className="  flex items-center justify-between  h-12 px-4 shadow-md z-50">
          <Button
            onClick={changeFullScreen}
            variant="outline">
            <Menu className=" cursor-pointer " />
          </Button>
          <div className=" flex items-center space-x-4">
            {/* <ThemeToggleButton /> */}
            <AdminCircleUser />
          </div>
        </div>
        <div className=" px-4 mt-8  ">{children}</div>
      </div>
    </div>
  );
}

const navItems = [
  {
    header: "Overview",
    name: "Dashboard",
    icon: <Settings size={15} />,
    href: "/dashboard",
    isTriggerDisable: true,
  },

  {
    header: "Categores & Types",
    name: "Categories",
    icon: <User2 size={15} />,
    href: "",

    subLinks: [
      {
        title: "Categories",
        href: "/dashboard/categories",
      },

      {
        title: "Sub Categories",
        href: "/dashboard/sub-categories",
      },
    ],
  },

  {
    header: "Blocks & Components",
    name: "Components ",
    icon: <User2 size={15} />,
    href: "",

    subLinks: [
      {
        title: "Components",
        href: "/dashboard/components",
      },
    ],
  },

  {
    name: "Settings",
    icon: <Settings size={15} />,
    href: "/",
  },
];

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Collapsible from "react-collapsible";
import { Button } from "@/components/ui/button";
import ThemeToggleButton from "@/components/dashboard/ThemeToggleButton";
import AdminCircleUser from "@/components/dashboard/AdminCircleUser";

function CollapsibleTab({ item }: any) {
  const pathname = usePathname();

  return (
    <div className=" ">
      <p className=" text-xs tracking-wider uppercase mb-2  mt-6 opacity-50  ">{item.header}</p>
      <Collapsible
        transitionTime={100}
        triggerDisabled={item.isTriggerDisable}
        trigger={
          <Link
            href={item.href}
            className={`link ${pathname === item.href ? "bg-primary-400/20  " : ""}  flex items-center gap-1  py-1.5 px-3 rounded-md opacity-85 `}>
            <span className=" "> {item.icon} </span> {item.name} {item.subLinks?.length && <ChevronDown size={18} />}
          </Link>
        }>
        <div className=" space-y-2 pt-4">
          {item.subLinks?.map((sublink: any, index: number) => (
            <div
              key={index}
              className="flex flex-col rounded-md">
              <Link
                href={sublink.href}
                className={`link ${pathname === sublink.href ? "bg-primary-400/20" : ""} py-1.5 px-6 rounded-md  opacity-95  `}>
                {sublink.title}
              </Link>
            </div>
          ))}
        </div>
      </Collapsible>
    </div>
  );
}
