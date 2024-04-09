"use client";
import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { title } from "process";
import { supabase } from "@/utils/supabase/clientRepository";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
type Props = {};

export function DocsSidebar({}: Props) {
  const [categories, setCategories] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("Category").select("*");
      setCategories(data || []);
    };
    fetch();
  }, []);

  console.log(categories)

  return (
    <ScrollArea className=" h-screen  rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {/* {tags.map((tag) => (
          <>
            <div
              key={tag}
              className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))} */}
        {elements.map((element, index) => (
          <>
            <div key={index}>
              <p className="font-medium mb-4">{element.title}</p>

              {element.items.map((item, index) => (
                <>
                  <div key={index}>
                    <p className="text-sm mb-2">{item.title}</p>
                  </div>
                </>
              ))}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}

const elements = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/introduction",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "Changelog",
        href: "/docs/changelog",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Button",
        href: "/docs/button",
      },
      {
        title: "Input",
        href: "/docs/input",
      },
      {
        title: "Textarea",
        href: "/docs/textarea",
      },
      {
        title: "Select",
        href: "/docs/select",
      },
      {
        title: "Checkbox",
        href: "/docs/checkbox",
      },
      {
        title: "Radio",
        href: "/docs/radio",
      },
      {
        title: "Switch",
        href: "/docs/switch",
      },
      {
        title: "Slider",
        href: "/docs/slider",
      },
      {
        title: "Tag",
        href: "/docs/tag",
      },
      {
        title: "Avatar",
        href: "/docs/avatar",
      },
      {
        title: "Badge",
        href: "/docs/badge",
      },
      {
        title: "Alert",
        href: "/docs/alert",
      },
      {
        title: "Modal",
        href: "/docs/modal",
      },
      {
        title: "Drawer",
        href: "/docs/drawer",
      },
      {
        title: "Popover",
        href: "/docs/popover",
      },
      {
        title: "Tooltip",
        href: "/docs/tooltip",
      },
      {
        title: "Menu",
        href: "/docs/menu",
      },
      {
        title: "Tabs",
        href: "/docs/tabs",
      },
      {
        title: "Pagination",
        href: "/docs/pagination",
      },
      {
        title: "Progress",
        href: "/docs/progress",
      },
      {
        title: "Spinner",
        href: "/docs/spinner",
      },
      {
        title: "Divider",
        href: "/docs/divider",
      },
      {
        title: "Skeleton",
        href: "/docs/skeleton",
      },
      {
        title: "Scroll Area",
        href: "/docs/scroll-area",
      },
      {
        title: "Transition",
        href: "/docs/transition",
      },
      {
        title: "Portal",
        href: "/docs/portal",
      },
      {
        title: "Toast",
        href: "/docs/toast",
      },
      {
        title: "Dialog",
        href: "/docs/dialog",
      },
      {
        title: "Confirm",
        href: "/docs/confirm",
      },
      {},
    ],
  },
  {
    title: "Hooks",
    items: [
      {
        title: "useModal",
        href: "/docs/use-modal",
      },
      {
        title: "useDrawer",
        href: "/docs/use-drawer",
      },
      {
        title: "usePopover",
        href: "/docs/use-popover",
      },
      {
        title: "useTooltip",
        href: "/docs/use-tooltip",
      },
      {
        title: "useMenu",
        href: "/docs/use-menu",
      },
      {
        title: "useTabs",
        href: "/docs/use-tabs",
      },
      {
        title: "usePagination",
        href: "/docs/use-pagination",
      },
      {
        title: "useProgress",
        href: "/docs/use-progress",
      },
      {
        title: "useScroll",
        href: "/docs/use-scroll",
      },
      {
        title: "useTransition",
        href: "/docs/use-transition",
      },
      {
        title: "usePortal",
        href: "/docs/use-portal",
      },
      {
        title: "useToast",
        href: "/docs/use-toast",
      },
      {
        title: "useDialog",
        href: "/docs/use-dialog",
      },
      {
        title: "useConfirm",
        href: "/docs/use-confirm",
      },
    ],
  },
];
