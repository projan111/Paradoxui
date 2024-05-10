"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RotateCw } from "lucide-react";
import { supabase } from "@/utils/supabase/clientRepository";
import { SessionContext } from "@/app/context/SessionContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

  previewUrl: z.string().min(12, {
    message: "Preview url name must be at least 12 characters.",
  }),

  profile: z.string().min(1, {
    message: "Profile is required.",
  }),
});

export default function EditComponent({ categories, subCategories, currentComponentId }: any) {
  const { session } = React.useContext(SessionContext);
  const id: any = session?.user?.id;

  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      previewUrl: "",
      category: "",
      subcategory: "",
      profile: id,
    },
  });

  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [component, setComponent] = useState<any | undefined>(undefined);
  
  useEffect(() => {
    const fetch = async () => {
      setIsFetching(true);
      const { data, error, status } = await supabase.from("Component").select().eq("id", currentComponentId).single();

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
  }, [currentComponentId]);

  useEffect(() => {
    if (component) {
      form.reset({
        name: component.name || "",
        previewUrl: component.previewUrl || "",
        category: component.category || "",
        subcategory: component.subcategory || "",
        profile: component.profile || "",
      });
    }
  }, [form, component]);

  // Define a submit handler
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsUpdating(true);
    const { data, error, status } = id && await supabase.from("Copmpoent").update(values).eq("id", currentComponentId);
    console.log(data || error || status)

    if (error) {
      setIsUpdating(false);
      toast.error(error.details || "An error occurred during update. Please try again.");
      return;
    }

    if (status == 204) {
      form.reset();
      setIsUpdating(false);
      toast.success("Component updated successfully.");
      return;
    }
  };


  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className=" text-xl">Edit components</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>

        <CardContent>
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

                <div className=" flex justify-end ">
                  <Button
                    type="submit"
                    disabled={isUpdating}>
                    {isUpdating && (
                      <RotateCw
                        size={18}
                        className="mr-2 h-4 w-4 animate-spin"
                      />
                    )}
                    {isUpdating ? " Please wait" : " Save Changes"}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
