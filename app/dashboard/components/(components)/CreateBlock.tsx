"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RotateCw } from "lucide-react";
import { supabase } from "@/utils/supabase/clientRepository";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),

  code: z.string().min(5, {
    message: "Code name must be at least 5 characters.",
  }),

  filePathname: z.string().optional(),

  order: z.string().min(1, {
    message: "Order is required.",
  }),
});

export default function CreateBlock({ currentComponentId, setRefreshNow }: any) {
  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      code: "",
      filePathname: "",
      order: "",
    },
  });

  const [isCreating, setIsCreating] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsCreating(true);
    const { data, error, status } = await supabase
      .from("Block")
      .insert([{ ...values, component: currentComponentId }])
      .select()
      .single();
    console.log(data, "this is my data");

    if (error) {
      toast.error(error.details || "An error occurred during create. Please try again.");
      console.error("Failed to create block:", error.message);
      setIsCreating(false);
      return;
    }

    if (status === 201 && data) {
      setRefreshNow(true);
      form.reset();
      setIsCreating(false);
      toast.success("Code block created successfully");
      return;
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" ">
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Block Title </FormLabel>
                  <Input
                    {...field}
                    placeholder=""
                  />
                  <FormMessage {...field} />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Block Description </FormLabel>
                  <Input
                    {...field}
                    placeholder=""
                  />
                  <FormMessage {...field} />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="order"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Order</FormLabel>
                  <Input
                    type="number"
                    {...field}
                    placeholder="0"
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

            <div className=" flex justify-end ">
              <Button
                type="submit"
                disabled={isCreating}>
                {isCreating && (
                  <RotateCw
                    size={18}
                    className="mr-2 h-4 w-4 animate-spin"
                  />
                )}
                {isCreating ? " Please wait" : " Create Code Block"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
