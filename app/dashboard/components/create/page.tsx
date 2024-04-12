"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/utils/supabase/clientRepository";
import { Textarea } from "@/components/ui/textarea";
import { CodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";
import OptionalLabel from "@/components/dashboard/OptionalLabel";
import { RotateCw } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(5, {
    message: "Sub category must be at least 5 characters.",
  }),

  code: z.string({
    required_error: "Code is required.",
  }),

  description: z.string().optional(),

  previewUrl: z.string({
    required_error: "Preview Url is required.",
  }),

  category: z.string({
    required_error: "Select the category.",
  }),

  language: z.string({
    required_error: "Select the language.",
  }),

  filePathname: z.string({
    required_error: "File pathname is required.",
  }),

  subcategory: z.string({
    required_error: "Select the sub-category.",
  }),
});

export default function Page() {
  const [categories, SetCategories] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("Category").select("*");
      if (error || !data) {
        throw new Error("Failed to fetch categories");
      }

      SetCategories(data || []);
    };
    fetch();
  }, []);
  console.log(categories);

  const [subCategories, setSubCategories] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("Sub Category").select("*");
      if (error || !data) {
        throw new Error("Failed to fetch sub-categories");
      }

      setSubCategories(data || []);
    };
    fetch();
  }, []);
  console.log(subCategories);

  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      subcategory: "",
      code: "",
      previewUrl: "",
      language: "",
      filePathname: "",
      description: "",
    },
  });

  console.log(form.getValues().code);

  // Define a submit handler
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsCreating(true);
      const { data, error, status } = await supabase.from("Component").insert([values]).select();

      if (error || status !== 201) {
        throw new Error("Failed to create component");
      }

      toast.success("Component created successfully");
      form.reset();
    } catch (error) {
      toast.error("Failed to create component");
    } finally {
      setIsCreating(false);
    }
  };

  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" ">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Component Name </FormLabel>
                <Input
                  {...field}
                  placeholder="Web animated hero section"
                />
                <FormMessage {...field} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>

                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.name}
                  value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories?.map((item: any) => (
                      <SelectItem
                        key={item.id}
                        value={item.id.toString()}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subcategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub Category</FormLabel>

                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.name}
                  value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sub-category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {subCategories?.map((item: any) => (
                      <SelectItem
                        key={item.id}
                        value={item.id.toString()}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Language</FormLabel>

                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.name}
                  value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {languages?.map((item: any) => (
                      <SelectItem
                        key={item.id}
                        value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="previewUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preview Url </FormLabel>
                <Input
                  {...field}
                  placeholder="https://ui.paradoxui.vercel.app/components/hero-section "
                />
                <FormMessage {...field} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="filePathname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>File path Name </FormLabel>
                <Input
                  {...field}
                  placeholder="components/Herosection.tsx"
                />
                <FormMessage {...field} />
              </FormItem>
            )}
          />
        </div>

        <FormField
        
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className=" mt-4">
              <FormLabel>
                Description <OptionalLabel />{" "}
              </FormLabel>
              <Textarea
                {...field}
                placeholder="Write something here ..."
              />
              <FormMessage {...field} />
            </FormItem>
          )}
        />

        <>
          <div className=" flex justify-end mt-8 mb-4">
            <Button
              type="button"
              onClick={() => setIsPreviewMode(!isPreviewMode)}>
              {isPreviewMode ? "Code" : "Preview"}
            </Button>
          </div>
          {isPreviewMode ? (
            <CodeBlock
            
              code={form.getValues()?.code}
              language={"jsx"}
              theme={themes.oneDark}
            
              
              >
              <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg pt-12 h-64">
                <div className="table-row">
                  <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
                  <CodeBlock.LineContent className="table-cell">
                    <CodeBlock.Token />
                  </CodeBlock.LineContent>
                </div>
              </CodeBlock.Code>
            </CodeBlock>
          ) : (
            <div className=" mt-4">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Code </FormLabel>
                    <Textarea
                      className=" h-64"
                      {...field}
                      placeholder="Code"
                    />
                    <FormMessage {...field} />
                  </FormItem>
                )}
              />
            </div>
          )}
        </>
        <div className=" mt-4 space-x-2">
          <Button
            type="submit"
            disabled={isCreating}>
            {isCreating && <RotateCw size={18} className="mr-2 h-4 w-4 animate-spin" />}
            {isCreating ? " Please wait" : " Create Component"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

const languages = [
  {
    id: "0",
    name: "HTML",
  },

  {
    id: "1",
    name: "CSS",
  },

  {
    id: "2",
    name: "Javascript",
  },

  {
    id: "3",
    name: "Typescript",
  },
];
