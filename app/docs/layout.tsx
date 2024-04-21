"use client";
import { DocsSidebar } from "@/components/website/DocsSidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className=" flex gap-4 w-10/12 mx-auto">
      <div className=" w-2/12">
        <DocsSidebar />
      </div>

      <div className=" w-10/12 h-screen overflow-y-scroll">{children}</div>
    </section>
  );
}
