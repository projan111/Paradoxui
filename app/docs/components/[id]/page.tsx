"use client";
import { CodeBlock } from "react-code-block";
import { useCopyToClipboard } from "react-use";
import { themes } from "prism-react-renderer";
import { Resizable } from "re-resizable";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, CodeXml, Clipboard, ClipboardList, CheckCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/clientRepository";
import { useParams } from "next/navigation";

import { Timeline } from "rsuite";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {};

export default function Page({}: Props) {
  const params = useParams();
  const id = params.id;
  console.log(id);

  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = (code: string) => {
    copyToClipboard(code);
    setTimeout(() => {
      copyToClipboard("");
    }, 2000);
  };

  // const [component, setComponent] = useState<any>();
  // useEffect(() => {
  //   const fetchComponent = async () => {
  //     let { data, error } = await supabase.from("Component").select().eq("id", id).single();
  //     if (error) {
  //       throw new Error("Failed to fetch a component.");
  //     }

  //     setComponent(data);
  //   };
  //   id && fetchComponent();
  // }, [id]);
  // console.log(component);

  const [currentSubcategory, setCurrentSubcategory] = useState<any>();
  useEffect(() => {
    const fetch = async () => {
      // let { data, error } = await supabase.from("Component").select().eq("id", id).single();

      let { data, error } = await supabase.from("Sub Category").select("*").eq("id", id).single();

      if (error) {
        throw new Error("Failed to fetch a components.");
      }

      setCurrentSubcategory(data);
    };
    id && fetch();
  }, [id]);

  console.log(currentSubcategory);

  const [components, setComponents] = useState<any>();
  useEffect(() => {
    const fetchComponent = async () => {
      // let { data, error } = await supabase.from("Component").select().eq("id", id).single();

      let { data, error } = await supabase
        .from("Component")
        .select("*")

        .eq("subcategory", id);

      if (error) {
        throw new Error("Failed to fetch a components.");
      }

      setComponents(data);
    };
    id && fetchComponent();
  }, [id]);

  console.log(components);

  return (
    <div className=" ">
      {/* <Timeline>
        <Timeline.Item> */}

      {currentSubcategory && (
        <div className=" my-8">
          <p className=" text-2xl font-medium text-zinc-700">{currentSubcategory.name}</p>
          <p className=" font-medium text-zinc-600">{currentSubcategory.description}</p>
        </div>
      )}

      <div className=" grid grid-cols-2 gap-8">
        {components?.map((component: any, index: any) => (
          <div
            key={index}
            className=" bg-gray-200 rounded-3xl p-4">
            <div className=" rounded-md w-full">
              <iframe
                loading="lazy"
                title="Website Preview"
                src={component?.previewUrl}
                width="100%"
                height="400px"
                scrolling="no"
                className="no-scroll-bar"></iframe>

              <div className=" mt-4 flex justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost">Preview</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[1024px]">
                    <DialogHeader>
                      <DialogTitle>Something Instruction Here</DialogTitle>
                      {/* <DialogDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores est repellendus illo et voluptas eligendi inventore accusantium deserunt nihil quam exercitationem itaque laborum tempore harum delectus perspiciatis, enim, facere quis minima! Provident reprehenderit voluptatibus doloribus quam, eaque eveniet exercitationem repellat.</DialogDescription> */}
                    </DialogHeader>

                    <div className=" rounded-md w-full">
                      <Resizable
                      // defaultSize={{
                      //   width: " 100%",
                      //   height: 200,
                      // }}
                      >
                        <iframe
                          title="Website Preview"
                          src={component?.previewUrl}
                          height="600px"
                          className=" rounded-2xl w-full shadow-lg border-r-4 border-r-neutral-500 border "></iframe>
                      </Resizable>
                    </div>
                    <DialogFooter></DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button>View code</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[1024px]">
                    <DialogHeader>
                      <DialogTitle>Something Instruction Here</DialogTitle>
                      <DialogDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores est repellendus illo et voluptas eligendi inventore accusantium deserunt nihil quam exercitationem itaque laborum tempore harum delectus perspiciatis, enim, facere quis minima! Provident reprehenderit voluptatibus doloribus quam, eaque eveniet exercitationem repellat.</DialogDescription>
                    </DialogHeader>

                    <CodeBlock
                      code={component?.code}
                      language={component?.language}
                      theme={themes.oneDark}>
                      <div className="text-sm text-gray-700   absolute bottom-0 px-8 py-4  font-semibold flex ">{component?.filePathname}</div>
                      <button
                        className="text-sm text-gray-400  absolute px-4 py-4 right-12 top-32  font-semibold flex"
                        onClick={() => copyCode(component?.code)}>
                        {state.value ? <CheckCheck size={18} /> : <Clipboard size={20} />}
                      </button>

                      <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg pt-12 h-96 overflow-y-scroll">
                        <div className="table-row">
                          <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
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

            {/* <div className=" flex items-center justify-end">
                  <Button
                    onClick={() => setIsPreviewMode(!isPreviewMode)}
                    className=" flex items-center gap-1 text-sm">
                    {isPreviewMode ? "Code" : "Preview"}
                    {isPreviewMode ? <CodeXml size={18} /> : <MonitorSmartphone size={18} />}
                  </Button>
                </div>

                <div className=" w-full">
                  {isPreviewMode ? (
                    <div className=" rounded-md w-full">
                      <Resizable
                        defaultSize={{
                          width: " 100%",
                          height: 200,
                        }}>
                        <iframe
                          title="Website Preview"
                          src={component?.previewUrl}
                          width="100%"
                          height="500px"
                          className=" rounded-2xl shadow-lg border-r-4 border-r-neutral-500 border "></iframe>
                      </Resizable>
                    </div>
                  ) : (
                    <CodeBlock
                      code={component?.code}
                      language={component?.language}
                      theme={themes.oneDark}>
                      <div className="text-sm text-gray-400   absolute px-8 py-4  font-semibold flex ">{component?.filePathname}</div>
                      <button
                        className="text-sm text-gray-400  absolute px-4 py-4 right-20  font-semibold flex"
                        onClick={() => copyCode(component?.code)}>
                        {state.value ? <ClipboardList size={20} /> : <Clipboard size={20} />}
                      </button>

                      <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg pt-12 h-96 overflow-y-scroll">
                        <div className="table-row">
                          <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
                          <CodeBlock.LineContent className="table-cell">
                            <CodeBlock.Token />
                          </CodeBlock.LineContent>
                        </div>
                      </CodeBlock.Code>
                    </CodeBlock>
                  )}
                </div> */}
          </div>
        ))}
      </div>
      {/* </Timeline.Item>
        <Timeline.Item>16:28:43 Your order to be ready for delivery</Timeline.Item>
        <Timeline.Item>16:28:45 Your parcel has been out of the library</Timeline.Item>
        <Timeline.Item>02:34:41 Send to Shanghai Hongkou Company</Timeline.Item>
        <Timeline.Item>15:05:29 Sending you a piece</Timeline.Item> */}
      {/* </Timeline> */}
    </div>
  );
}
