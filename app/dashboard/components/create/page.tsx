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
import { CheckCheck, Clipboard, MoveLeft, RotateCw } from "lucide-react";
import { supabase } from "@/utils/supabase/clientRepository";
import { SessionContext } from "@/app/context/SessionContext";
import { useRouter, useSearchParams } from "next/navigation";
import CreateBlock from "../(components)/CreateBlock";
import { Separator } from "@/components/ui/separator";
import { CodeBlock, oneDark } from "@react-email/code-block";
import { useCopyToClipboard } from "react-use";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import CreateProp from "../(components)/CreateProp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EditComponent from "../(components)/EditComponent";

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

  previewUrl: z.string().min(12, {
    message: "Preview url name must be at least 12 characters.",
  }),

  profile: z.string().min(1, {
    message: "Profile is required.",
  }),
});

export default function Page() {
  const { session } = React.useContext(SessionContext);
  const id: any = session?.user?.id;

  const [state, copyToClipboard] = useCopyToClipboard();
  const copyCode = (code: string) => {
    copyToClipboard(code);
    setTimeout(() => {
      copyToClipboard("");
    }, 2000);
  };

  const [currentComponentId, setcurrentComponentId] = useState<any>();
  console.log(currentComponentId, "this is my current component id");
  const urlParams = useSearchParams();
  useEffect(() => {
    const myParam = urlParams.get("id");
    setcurrentComponentId(myParam);
  }, [urlParams]);

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

  const router = useRouter();

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

  const [refreshNow, setRefreshNow] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsCreating(true);
    const { data, error, status } = id && (await supabase.from("Component").insert([values]).select().single());
    console.log(data, "this is my data");

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
      router.push(`?id=${data.id}`);
      setcurrentComponentId(data.id);
      return;
    }
  };

  const [currentComponent, setCurrentComponent] = React.useState<any>();
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error, status } = await supabase.from("Component").select("*").eq("id", currentComponentId).single();

      if (error) {
        console.error("Failed to fetch component:", error.message);
        return;
      }

      if (status === 200 && data) {
        setCurrentComponent(data);
      }
    };
    fetch();
  }, [currentComponentId]);

  const [blocks, setBlocks] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error, status } = await supabase.from("Block").select("*").eq("component", currentComponentId);

      if (error) {
        console.error("Failed to fetch blocks:", error.message);
        return;
      }

      if (status === 200 && data) {
        setBlocks(data);
        setRefreshNow(false);
      }
    };
    fetch();
  }, [currentComponentId, refreshNow]);

  const [props, setProps] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error, status } = await supabase.from("Prop").select("*").eq("component", currentComponentId);

      if (error) {
        console.error("Failed to fetch props:", error.message);
        return;
      }

      if (status === 200 && data) {
        setProps(data);
        setRefreshNow(false);
      }
    };
    fetch();
  }, [currentComponentId, refreshNow]);
  
  // console.log(formSchema);
  // Track the category filed , console it 
  console.log(form.watch("category"));


  return (
    <>
      <Button
        onClick={() => router.back()}
        variant={"outline"}>
        <MoveLeft size={16} />
      </Button>

      <div className=" grid grid-cols-2 gap-4">
        <div>
          <Tabs
            defaultValue="component"
            className=" mt-5">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="component">component</TabsTrigger>
              <TabsTrigger value="block">Block</TabsTrigger>
              <TabsTrigger value="prop">Prop</TabsTrigger>
            </TabsList>

            <TabsContent value="component">
              {currentComponentId && (
                <EditComponent
                  categories={categories}
                  subCategories={subCategories}
                  currentComponentId={currentComponentId}
                />
              )}

              {currentComponentId === null && (
                <Card>
                  <CardHeader>
                    <CardTitle className=" text-xl">Create components</CardTitle>
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
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="block">
              {currentComponentId !== null && (
                <Card>
                  <CardHeader>
                    <CardTitle>Create component</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CreateBlock
                      currentComponentId={currentComponentId}
                      setRefreshNow={setRefreshNow}
                    />
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="prop">
              {currentComponentId && (
                <Card>
                  <CardHeader>
                    <CardTitle>Create prop</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CreateProp
                      currentComponentId={currentComponentId}
                      setRefreshNow={setRefreshNow}
                    />
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <div className=" h-[85vh] overflow-y-scroll">
          {currentComponent && (
            <div className=" bg-primary-800/20 border rounded-3xl p-4">
              <div className=" rounded-md w-full">
                <iframe
                  loading="lazy"
                  title="Website Preview"
                  src={currentComponent?.previewUrl}
                  width="100%"
                  height="400px"
                  scrolling="no"
                  className="no-scroll-bar"></iframe>
              </div>
            </div>
          )}

          {blocks.map((block: any, index) => (
            <div key={index}>
              <div>
                <p className="  text-xl text-secondary-400">{block.title}</p>
                <Separator className=" mt-2 mb-4" />
              </div>

              <div className="pb-8">
                <p>{block.description}</p>
                <div className=" flex items-center justify-between mt-4">
                  <p className=" text-accent-600">{block.filePathname}</p>
                  <Button
                    className=" h-8 w-8 p-0 m-0 "
                    variant={"outline"}
                    onClick={() => copyCode(block?.code)}>
                    {state.value ? <CheckCheck size={14} /> : <Clipboard size={14} />}
                  </Button>
                </div>

                <CodeBlock
                  code={block.code}
                  theme={oneDark}
                  lineNumbers={true}
                  // language={block.language}
                  language={"javascript"}
                />
              </div>
            </div>
          ))}

          <div>
            <p className=" text-xl font-medium tracking-wide">Available Props</p>
            <Separator className=" mt-2 mb-4" />

            <table className="border-collapse  w-full ">
              <thead>
                <tr className=" grid grid-cols-4 ">
                  <th className="border  p-2  ">Prop</th>
                  <th className="border border-l-0 p-2  ">Type</th>
                  <th className="border border-l-0 p-2  ">Default</th>
                  <th className="border p-2  border-l-0">Description</th>
                </tr>
              </thead>

              <tbody>
                {props?.map((prop: any, index: number) => (
                  <tr
                    key={index}
                    className=" grid grid-cols-4 text-white/80 ">
                    <td className=" border-l border-r border-b p-2 ">{prop.name}</td>
                    <td className="  border-r border-b p-2  ">{prop.type}</td>
                    <td className="  border-r border-b p-2 ">{prop.default}</td>
                    <td className=" p-2  border-r border-b ">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
