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
import { ReloadIcon } from "@radix-ui/react-icons";
import OptionalLabel from "@/components/dashboard/OptionalLabel";
import { supabase } from "@/utils/supabase/clientRepository";
import DialogTriggerAction from "@/components/dashboard/DialogTriggerAction";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface ISubcategoryOut {
  id: number;
  name: string;
  category: number;
  description: string;
  created_at: string;
}

type Props = {
  id: number;
  setRefreshNow: any;
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Sub category name must be at least 2 characters.",
  }),

  category: z.string().min(1, {
    message: "Category is required.",
  }),

  description: z.string().optional(),
});

export default function EditSubcategoryDialog({ id, setRefreshNow }: Props) {
  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      description: "",
    },
  });

  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [subCategory, setSubCategory] = useState<ISubcategoryOut | undefined>(undefined);
  useEffect(() => {
    const fetch = async () => {
      setIsFetching(true);
      const { data, error, status } = await supabase.from("Sub Category").select().eq("id", id).single();

      if (error) {
        console.error("Failed to fetch sub-category:", error.message);
        setIsFetching(false);
        return;
      }

      if (status === 200 && data) {
        setSubCategory(data);
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
      setRefreshNow(false);
    };
    fetch();
  }, [setRefreshNow]);

  useEffect(() => {
    if (subCategory) {
      form.reset({
        name: subCategory.name || "",
        category: subCategory.category.toString() || "",
        description: subCategory.description || "",
      });
    }
  }, [form, subCategory]);

  // Define a submit handler
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsUpdating(true);
    const { data, error, status } = await supabase.from("Sub Category").update(values).eq("id", id);

    if (error) {
      setIsUpdating(false);
      toast.error(error.details || "An error occurred during update. Please try again.");
      return;
    }

    if (status == 204) {
      setRefreshNow(true);
      form.reset();
      setIsUpdating(false);
      toast.success("Sub-category updated successfully.");
      return;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p>
          <DialogTriggerAction title="Edit Sub-category" />
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Update sub category</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when youre done.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
           <div className=" grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sub Category Name *</FormLabel>
                    <Input
                      placeholder="Animated Hero Section"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category </FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={field.onChange}
                        defaultValue={field.name}
                        value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Categories</SelectLabel>
                            {categories.map((item) => (
                              <SelectItem
                                key={item.id}
                                value={item.id.toString()}>
                                {item.name}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
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

                    <FormControl>
                      <Input
                        placeholder="Description of the sub category."
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className=" flex justify-end mt-8">
                <Button
                  type="submit"
                  disabled={isUpdating}>
                  {isUpdating && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                  {isUpdating ? " Please wait" : " Create Sub category"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
