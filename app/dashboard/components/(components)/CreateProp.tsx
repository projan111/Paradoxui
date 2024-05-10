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
  name: z.string().min(1, {
    message: "name is required.",
  }),
  type: z.string().min(1, {
    message: "type is required.",
  }),
  default: z.string().min(1, {
    message: "default is required.",
  }),
  description: z.string().optional(),
});

export default function CreateProp({ currentComponentId, setRefreshNow }: any) {
  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "",
      default: "",
      description: "",
    },
  });

  const [isCreating, setIsCreating] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsCreating(true);
    const { data, error, status } = await supabase
      .from("Prop")
      .insert([{ ...values, component: currentComponentId }])
      .select()
      .single();
    console.log(data, "this is my data");

    if (error) {
      toast.error(error.details || "An error occurred during create. Please try again.");
      console.error("Failed to create prop:", error.message);
      setIsCreating(false);
      return;
    }

    if (status === 201 && data) {
      setRefreshNow(true);
      form.reset();
      setIsCreating(false);
      toast.success("Prop created successfully");
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prop name </FormLabel>
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
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type </FormLabel>
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
              name="default"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Default</FormLabel>
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
                  <FormLabel>Description</FormLabel>
                  <Input
                    {...field}
                    placeholder=""
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
                {isCreating ? " Please wait" : " Create Prop"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
