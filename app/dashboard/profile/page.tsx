"use client";
import React, { useContext } from "react";
import { MailIcon, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";
import { Resizable } from "re-resizable";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/clientRepository";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SessionContext } from "@/app/context/SessionContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Timeline } from "rsuite";

export default function Page() {
  const { session, currentUserRole } = useContext(SessionContext);
  const id: any = session?.user?.id;
  const [profile, setProfile] = useState<any>();

  const [isLoading1, setIsLoading1] = useState<boolean>(false);
  useEffect(() => {
    const fetchComponent = async () => {
      setIsLoading1(true);

      let { data, error } = await supabase.from("profiles").select("*").eq("id", id).single();
      console.log(data, "data1");

      if (error) {
        setIsLoading1(false);
        throw new Error("Failed to fetch a profile.");
      }

      setProfile(data);
      setIsLoading1(false);
    };
    id !== undefined && fetchComponent();
  }, [id]);

  const [categories, setCategories] = useState<any>();
  const [isLoading2, setIsLoading2] = useState<boolean>(false);
  useEffect(() => {
    const fetch = async () => {
      setIsLoading2(true);

      let { data, error } = await supabase.from("Category").select(` id , name`);

      if (error) {
        setIsLoading2(false);
        throw new Error("Failed to fetch a categories.");
      }

      setCategories(data);
      setIsLoading2(false);
    };
    fetch();
  }, [id]);

  const [tab, setTab] = useState<any>(44);

  const [components, setComponents] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchComponent = async () => {
      setIsLoading(true);

      let { data, error } = await supabase.from("Component").select("*").eq("profile", id).eq("category", tab);

      if (error) {
        setIsLoading(false);
        throw new Error("Failed to fetch a components.");
      }

      setComponents(data);
      setIsLoading(false);
    };
    fetchComponent();
  }, [id, tab]);

  return (
    <div>
   

      {profile && (
        <div className=" flex flex-col w-full min-w-0 mb-6 break-words border border-dashed bg-clip-border rounded-2xl  ">
          <div className="px-9 pt-9 flex-auto  bg-transparent">
            <div className="flex flex-wrap mb-6 xl:flex-nowrap">
              <div className="mb-5 mr-5">
                <div className=" inline-block shrink-0 rounded-2xl">
                  <Avatar className="inline-block shrink-0  w-[80px] h-[80px] lg:w-[160px] lg:h-[160px] border border-accent-600 rounded-full ">
                    <AvatarImage
                      src={profile}
                      alt="profile_image"
                    />
                    <AvatarFallback className=" text-4xl">{profile.full_name.split("")[0]}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="grow">
                <div className="flex flex-wrap items-start justify-between mb-2">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <a
                        className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1"
                        href="javascript:void(0)">
                        {" "}
                        {profile.full_name}
                      </a>
                    </div>
                    <div className="flex flex-col pr-2 mb-4  text-white/80">
                      <a
                        className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary tracking-wide"
                        href="javascript:void(0)">
                        <span className="mr-1">
                          <User size={18} />
                        </span>{" "}
                        {profile.username}
                      </a>

                      <a
                        className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary tracking-wide"
                        href="javascript:void(0)">
                        <span className="mr-1">
                          <MailIcon size={18} />
                        </span>{" "}
                        {profile.email}
                      </a>

                      <div className=" flex">
                        <Button
                          className=" rounded-full h-5 text-xs border-accent-600/60    text-accent-600/80 hover:text-accent-600/90"
                          variant={"outline"}>
                          {profile.role}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex  gap-2">
                    <Button>Follow</Button>
                    {/* <Button variant={"outline"}>Send Mail</Button> */}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    className=" rounded-full h-8 hover:border-accent-600"
                    variant={"outline"}>
                    320 Following{" "}
                  </Button>
                  <Button
                    className=" rounded-full h-8 hover:border-accent-600"
                    variant={"outline"}>
                    2.5k Followers{" "}
                  </Button>
                  <Button
                    className=" rounded-full h-8 hover:border-accent-600"
                    variant={"outline"}>
                    48 Deals{" "}
                  </Button>
                </div>
              </div>
            </div>
            <Separator />
          </div>
        </div>
      )}

      {currentUserRole !== "superadmin" && (
        <>
          <Tabs
            value={tab}
            onValueChange={(value) => setTab(value)}
            defaultValue="components"
            className=" ">
            <TabsList className="grid w-full grid-cols-3">
              {categories?.map((category: any) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}>
                  {category.name}
                  {tab == category.id && <span> ({components?.length})</span>}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={tab}>
              <div className=" grid grid-cols-2 gap-8 mt-8">
                {components?.map((component: any, index: any) => (
                  <div
                    key={index}
                    className=" bg-primary-800/20 border rounded-3xl p-4 hover:border-accent-600/30 duration-500 transition-all ease-in-out">
                    <div className=" rounded-md w-full">
                      <iframe
                        loading="lazy"
                        title="Website Preview"
                        src={component?.previewUrl}
                        width="100%"
                        height="300px"
                        scrolling="no"
                        className="no-scroll-bar"></iframe>

                      <div className=" mt-4 flex justify-between">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              className="border bg-primary-800 hover:bg-primary-800/50  text-secondary-400">
                              Preview
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[1024px] bg-transparent p-0 gap-0 ">
                            <div className=" = w-full ">
                              <Resizable>
                                <iframe
                                  title="Website Preview"
                                  src={component?.previewUrl}
                                  height="600px"
                                  className=" rounded-2xl w-full   "></iframe>
                              </Resizable>
                            </div>
                            <DialogFooter></DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              className="border bg-primary-800 hover:bg-primary-800/50  text-secondary-400">
                              View code
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[1024px]">
                            <DialogHeader>
                              <DialogTitle className="  text-secondary-400">Something Instruction Here</DialogTitle>
                              <DialogDescription className="post-blog-style text-primary-300">
                                {/* {parse(component?.description)} */}
                                {component?.description}
                              </DialogDescription>
                            </DialogHeader>

                            <CodeBlock
                              code={component?.code}
                              language={"jsx"}
                              theme={themes.oneDark}>
                              <div className=" flex items-center justify-between">
                                <div className="text-sm text-accent-500 font-semibold ">{component?.filePathname}</div>

                                {/* <button
                              className=" text-primary-300  font-semibold "
                              onClick={() => copyCode(component?.code)}>
                              {state.value ? <CheckCheck size={18} /> : <Clipboard size={20} />}
                            </button> */}
                              </div>

                              <CodeBlock.Code className=" border p-6 rounded-xl shadow-lg pt-12 h-96 overflow-y-scroll">
                                <div className="table-row">
                                  <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-primary-500 text-right select-none" />
                                  <CodeBlock.LineContent className="table-cell">
                                    <CodeBlock.Token />
                                  </CodeBlock.LineContent>
                                </div>
                              </CodeBlock.Code>
                            </CodeBlock>
                            <DialogFooter></DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {components?.length == 0 && (
            <div className=" flex items-center justify-center   rounded-lg border border-dashed shadow-sm h-80  ">
              <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">You have no items on this category</h3>
                <p className="text-sm text-muted-foreground">You can start uploading from here.</p>
                <Link href={"/dashboard/components"}>
                  <Button className="mt-4">Add Components</Button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
