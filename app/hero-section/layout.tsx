"use client";
import { DocsSidebar } from "@/components/website/DocsSidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="my-[4.3rem] flex gap-4">
      <div className=" w-2.5/12">
        <DocsSidebar />
      </div>

      <div className=" w-10/12  ">{children}</div>
    </section>
  );
}
