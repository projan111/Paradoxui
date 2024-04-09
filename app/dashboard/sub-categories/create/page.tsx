"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/utils/supabase/clientRepository";

const formSchema = z.object({
  name: z.string().min(4, {
    message: "Sub category must be at least 4 characters.",
  }),

  category: z.string({
    required_error: "Select the category.",
  }),

  description: z.string().optional(),
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

  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      description: "",
    },
  });

  console.log(form.getValues());

  // Define a submit handler
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsCreating(true);
      const { data, error, status } = await supabase.from("Sub Category").insert([values]).select();

      if (error || status !== 201) {
        throw new Error("Failed to create sub-category");
      }

      toast.success("Sub-category created successfully");
      form.reset();
    } catch (error) {
      toast.error("Failed to create sub-category");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sub Category Name </FormLabel>
              <Input
                {...field}
                placeholder="Sub Category Name"
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
                  {categories.map((item: any) => (
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description </FormLabel>
              <Input
                {...field}
                placeholder="Description"
              />
              <FormMessage {...field} />
            </FormItem>
          )}
        />

        <div className=" mt-8 space-x-2">
          <Button
            type="submit"
            disabled={isCreating}>
            {isCreating && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            {isCreating ? " Please wait" : " Create Sub Category"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
