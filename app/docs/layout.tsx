import { DocsSidebar } from "@/components/website/DocsSidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className=" flex gap-4">
      <div className=" w-2/12">
        <DocsSidebar />
      </div>

      <div className=" w-10/12">{children}</div>
    </section>
  );
}
