"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";
import { supabase } from "@/utils/supabase/clientRepository";
import OptionalLabel from "@/components/dashboard/OptionalLabel";

const formSchema = z.object({
  name: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),
  description: z.string().optional(),
  href: z.string().optional(),
});

export default function Page1() {
  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      href: "",
    },
  });

  // Define a submit handler
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsCreating(true);
      const { data, error, status } = await supabase.from("Category").insert([values]).select();

      if (error || status !== 201) {
        throw new Error("Failed to create category");
      }

      toast.success("Category created successfully");
      form.reset();
    } catch (error) {
      toast.error("Failed to create category");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Form {...form}>
      {/* <DynamicBreadcrumb
        items={[
          { name: "Dashboard", link: "/dashboard" },
          { name: "Categories", link: "/categories" },
          { name: "Create", link: "/categories/create", isCurrentPage: true},
        ]}
      /> */}

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category Name *</FormLabel>
              <Input
                placeholder="Category Name"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="href"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Href <OptionalLabel />{" "}
              </FormLabel>
              <Input
                placeholder="href"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Description <OptionalLabel />{" "}
              </FormLabel>
              <Input
                placeholder="Description"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=" mt-8  space-x-2">
          <Button
            type="submit"
            disabled={isCreating}>
            {isCreating && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            {isCreating ? " Please wait" : " Create Category"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
