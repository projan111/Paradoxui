"use client";
import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/utils/supabase/clientRepository";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Dot } from "lucide-react";

type Props = {};

export function DocsSidebar({}: Props) {
  const [categories, setCategories] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("Category").select("id , name").order('order', { ascending: true });
      setCategories(data || []);
    };
    fetch();
  }, []);

  console.log(categories);

  const [subCategories, setSubCategories] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("Sub Category").select("id ,name , category");
      setSubCategories(data || []);
    };
    fetch();
  }, []);

  const [components, setComponents] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let { data: Component, error } = await supabase.from("Component").select(`
      id,
      name,
      category (id, name),
      subcategory (id, name)
      `);
      setComponents(Component || []);
    };
    fetch();
  }, []);

  const params = useParams();
  const currentSubCategoryId = params.id;
  const nestedData = categories.map((category) => {
    const categoryData = {
      ...category,
      subcategories: subCategories
        .filter((subCategory) => subCategory.category === category.id)
        .map((subCategory) => {
          return {
            ...subCategory,
          };
        }),
    };
    return categoryData;
  });

  return (
    <ScrollArea className="h-screen rounded-md border">
      <div className="px-4">
        {/* <h4 className="font-medium  mt-6 mb-2 text-lg">Getting Started</h4>
        <Link
          href={"/introduction"}
          className="text-sm mb-2 ml-2 font-medium opacity-85 cursor-pointer">
          Introduction
        </Link>
        <p className="text-sm mb-2 ml-2 font-medium opacity-85 cursor-pointer">Installation</p> */}

        {nestedData.map((category, index) => (
          <>
            <div key={index}>
              <p className="font-medium  mt-4 mb-2 text-lg text-secondary-400">{category.name}</p>
            </div>
            <Separator className="mb-2" />

            <div className="flex flex-col gap-4">
              {category.subcategories.map((subcategory: any, index: number) => (
                <>
                  <div
                    key={index}
                    className="flex">
                    <Link
                      href={`/docs/components/${subcategory.id}`}
                      className={`${currentSubCategoryId == subcategory.id ? " text-accent-600 font-semibold transform  translate-x-2  duration-500 ease-in-out  " : "font-medium text-secondary-400/80 transition-transform duration-500 ease-in-out"} text-sm  opacity-85 cursor-pointer  flex items-center  `}>
                      {currentSubCategoryId == subcategory.id && <Dot size={22} />} {subcategory.name}
                      {index % 7 === 0 && <span className="ml-2 text-[10px] border px-2 py-0 rounded-md border-accent-500/25 bg-accent-500 bg-opacity-5 text-accent-500/80">New</span>}
                      {/* <span className=" ml-2 text-[10px] border px-2 py-0 rounded-md border-accent-500/25 bg-accent-500 bg-opacity-5 text-accent-500/80 "> New</span> */}
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
