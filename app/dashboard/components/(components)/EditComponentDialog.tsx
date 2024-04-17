"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import OptionalLabel from "@/components/dashboard/OptionalLabel";
import { supabase } from "@/utils/supabase/clientRepository";
import DialogTriggerAction from "@/components/dashboard/DialogTriggerAction";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RotateCw } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { CodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";

export interface IComponentOut {
  id: number;
  name: string;
  category: number;
  subcategory: number;
  code: string;
  description: string;
  previewUrl: string;
  filePathname: string;
  created_at: string;
}

type Props = {
  id: number;
  setRefreshNow: any;
};

const formSchema = z.object({
  name: z.string().min(4, {
    message: "Component name must be at least 4 characters.",
  }),

  category: z.string().min(1, {
    message: "Category is required.",
  }),

  subcategory: z.string().min(1, {
    message: "Component is required.",
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

export default function EditComponentDialog({ id, setRefreshNow }: Props) {
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

  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [component, setComponent] = useState<IComponentOut | undefined>(undefined);
  useEffect(() => {
    const fetch = async () => {
      setIsFetching(true);
      const { data, error, status } = await supabase.from("Component").select().eq("id", id).single();

      if (error) {
        console.error("Failed to fetch component:", error.message);
        setIsFetching(false);
        return;
      }

      if (status === 200 && data) {
        setComponent(data);
        setIsFetching(false);
      }
    };

    fetch();
  }, [id]);

  const [categories, setCategories] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("Category").select("*");
      if (error) {
        throw new Error("Failed to fetch categories");
      }

      setCategories(data || []);
    };
    fetch();
  }, []);

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

  useEffect(() => {
    if (component) {
      form.reset({
        name: component.name || "",
        code: component.code || "",
        description: component.description || "",
        previewUrl: component.previewUrl || "",
        category: component.category.toString() || "",
        subcategory: component.subcategory.toString() || "",
        filePathname: component.filePathname || "",
      });
    }
  }, [form, component]);

  // Define a submit handler
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsUpdating(true);
    const { data, error, status } = await supabase.from("Component").update(values).eq("id", id);

    if (error) {
      setIsUpdating(false);
      toast.error(error.details || "An error occurred during update. Please try again.");
      return;
    }

    if (status == 204) {
      setRefreshNow(true);
      form.reset();
      setIsUpdating(false);
      toast.success("component updated successfully.");
      return;
    }
  };

  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p>
          <DialogTriggerAction title="Edit component" />
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Update Component</DialogTitle>
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
                disabled={isUpdating}>
                {isUpdating && (
                  <RotateCw
                    size={18}
                    className="mr-2 h-4 w-4 animate-spin"
                  />
                )}
                {isUpdating ? " Please wait" : " Update Component"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
