"use client";
import { DocsSidebar } from "@/components/website/DocsSidebar";
import { supabase } from "@/utils/supabase/clientRepository";
import { useEffect, useState } from "react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [components, setComponents] = useState<any[]>([]);

  useEffect(() => {
    const fetch = async () => {
      // let { data: Component, error } = await supabase.from("Component").select("*").select(`
      // *,
      // category (id, name),
      // subcategory (id, name)
      // `);

      // just get the name of the component
      let { data, error } = await supabase.from("Component").select("id ,name");

      setComponents(data || []);
    };
    fetch();
  }, []);

  console.log(components);

  return (
    <section className=" flex gap-4 w-10/12 mx-auto">
      <div className=" w-2/12">
        <DocsSidebar />
      </div>

      <div className=" w-10/12">{children}</div>
    </section>
  );
}
