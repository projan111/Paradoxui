"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";
import { RotateCw } from "lucide-react";
import { supabase } from "@/utils/supabase/clientRepository";
import OptionalLabel from "@/components/dashboard/OptionalLabel";

type Props = {
  setRefreshNow: React.Dispatch<React.SetStateAction<boolean>>;
};

const formSchema = z.object({
  name: z.string().min(4, {
    message: "Component name must be at least 4 characters.",
  }),

  category: z.string().min(1, {
    message: "Category is required.",
  }),

  subcategory: z.string().min(1, {
    message: "Sub category is required.",
  }),

  code: z.string().min(20, {
    message: "Code name must be at least 20 characters.",
  }),

  description: z.string().optional(),

  previewUrl: z.string().min(12, {
    message: "Preview url name must be at least 12 characters.",
  }),

  filePathname: z.string().min(6, {
    message: "File pathname is required.",
  }),
});

export default function CreateComponentDialog({ setRefreshNow }: Props) {
  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      code: "",
      description: "",
      previewUrl: "",
      category: "",
      subcategory: "",
      filePathname: "",
    },
  });

  const [categories, setCategories] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error, status } = await supabase.from("Category").select("*");

      if (error) {
        console.error("Failed to fetch categories:", error.message);
        return;
      }

      if (status === 200 && data) {
        setCategories(data);
      }
    };
    fetch();
  }, []);
  console.log(categories);

  const [subCategories, setSubCategories] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error, status } = await supabase.from("Sub Category").select("*");

      if (error) {
        console.error("Failed to fetch sub-categories:", error.message);
        return;
      }

      if (status === 200 && data) {
        setSubCategories(data);
      }
    };
    fetch();
  }, []);
  console.log(subCategories);

  // Define a submit handler
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsCreating(true);
    const { data, error, status } = await supabase.from("Component").insert([values]).select().single();

    if (error) {
      toast.error(error.details || "An error occurred during create. Please try again.");
      console.error("Failed to create component:", error.message);
      setIsCreating(false);
      return;
    }

    if (status === 201 && data) {
      setRefreshNow(true);
      form.reset();
      setIsCreating(false);
      toast.success("Component created successfully");
      return;
    }
  };

  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create component</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Create component</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when youre done.</DialogDescription>
        </DialogHeader>

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
                  theme={themes.oneDark}>
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
                {isCreating && (
                  <RotateCw
                    size={18}
                    className="mr-2 h-4 w-4 animate-spin"
                  />
                )}
                {isCreating ? " Please wait" : " Create Component"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
