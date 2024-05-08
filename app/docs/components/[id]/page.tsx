"use client";
// import { CodeBlock } from "react-code-block";
import { useCopyToClipboard } from "react-use";
import { themes } from "prism-react-renderer";
import { Resizable } from "re-resizable";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, CodeXml, Clipboard, ClipboardList, CheckCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/clientRepository";
import { useParams } from "next/navigation";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import parse from "html-react-parser";
import Timeline from "rsuite/Timeline";
import "rsuite/Timeline/styles/index.css";
import { CodeBlock, dracula, oneDark } from "@react-email/code-block";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchComponent = async () => {
      setIsLoading(true);
      // let { data, error } = await supabase.from("Component").select().eq("id", id).single();

      let { data, error } = await supabase.from("Component").select("*").eq("subcategory", id);
      // let { data, error } = await supabase
      //   .from("Component")
      //   .select(
      //     `
      // id,
      // name,
      // previewUrl,
      // subcategory
      // `
      //   )
      //   .eq("subcategory", id);

      if (error) {
        setIsLoading(false);
        throw new Error("Failed to fetch a components.");
      }

      setComponents(data);
      setIsLoading(false);
    };
    id && fetchComponent();
  }, [id]);

  console.log(components);

  const code = `export default async (req, res) => {
    try {
      const html = await renderAsync(
        EmailTemplate({ firstName: 'John' })
      );
      return NextResponse.json({ html });
    } catch (error) {
      return NextResponse.json({ error });
    }

    
  }`;

  return (
    <div className=" ">
      {currentSubcategory && (
        <div className=" my-8">
          <p className=" text-2xl font-medium text-secondary-400">{currentSubcategory.name}</p>
          <p className=" font-medium  text-secondary-400">{currentSubcategory.description}</p>
        </div>
      )}

      <div className=" grid grid-cols-2 gap-8">
        {components?.map((component: any, index: any) => (
          <div
            key={index}
            className=" bg-primary-800/20 border rounded-3xl p-4">
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
                      <DialogTitle className="  text-xl text-secondary-400">{component.name}</DialogTitle>
                    </DialogHeader>

                    <Timeline className=" h-[70vh] overflow-y-scroll">
                      <Timeline.Item className="pb-8">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque atque, possimus natus vitae quasi fugiat expedita quis quos, maxime voluptatem eum hic illum sunt qui. Ipsum perferendis officiis reiciendis similique optio illum quaerat molestias beatae quam deserunt ducimus, facere saepe!</p>
                        <div className=" flex items-center justify-between mt-4">
                          <p className=" text-accent-600">{component.filePathname}</p>
                          <Button
                            className=" bg-primary-800/80"
                            variant={"outline"}
                            onClick={() => copyCode(component?.code)}>
                            {state.value ? <CheckCheck size={18} /> : <Clipboard size={18} />}
                          </Button>
                        </div>

                        <CodeBlock
                          code={code}
                          theme={oneDark}
                          lineNumbers={true}
                          language="javascript"
                        />
                      </Timeline.Item>
                      <Timeline.Item className="pb-8">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque atque, possimus natus vitae quasi fugiat expedita quis quos, maxime voluptatem eum hic illum sunt qui. Ipsum perferendis officiis reiciendis similique optio illum quaerat molestias beatae quam deserunt ducimus, facere saepe!</p>
                        <div className=" flex items-center justify-between mt-4">
                          <p className=" text-accent-600">{component.filePathname}</p>
                          <Button
                            className=" bg-primary-800/80"
                            variant={"outline"}
                            onClick={() => copyCode(component?.code)}>
                            {state.value ? <CheckCheck size={18} /> : <Clipboard size={18} />}
                          </Button>
                        </div>

                        <CodeBlock
                          code={code}
                          theme={oneDark}
                          lineNumbers={true}
                          language="javascript"
                        />
                      </Timeline.Item>
                      <Timeline.Item className="pb-8">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque atque, possimus natus vitae quasi fugiat expedita quis quos, maxime voluptatem eum hic illum sunt qui. Ipsum perferendis officiis reiciendis similique optio illum quaerat molestias beatae quam deserunt ducimus, facere saepe!</p>
                        <div className=" flex items-center justify-between mt-4">
                          <p className=" text-accent-600">{component.filePathname}</p>
                          <Button
                            className=" bg-primary-800/80"
                            variant={"outline"}
                            onClick={() => copyCode(component?.code)}>
                            {state.value ? <CheckCheck size={18} /> : <Clipboard size={18} />}
                          </Button>
                        </div>

                        <CodeBlock
                          code={code}
                          theme={oneDark}
                          lineNumbers={true}
                          language="javascript"
                        />
                      </Timeline.Item>
                      <Timeline.Item>15:05:29 Sending you a piece</Timeline.Item>
                    </Timeline>

                    <DialogFooter></DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <CodeBlock
                      code={component?.code}
                      language={"jsx"}
                      theme={themes.oneDark}>
                      <div className=" flex items-center justify-between">
                        <div className="text-sm text-accent-500 font-semibold ">{component?.filePathname}</div>

                        <button
                          className=" text-primary-300  font-semibold "
                          onClick={() => copyCode(component?.code)}>
                          {state.value ? <CheckCheck size={18} /> : <Clipboard size={20} />}
                        </button>
                      </div>

                      <CodeBlock.Code className=" border p-6 rounded-xl shadow-lg pt-12 h-96 overflow-y-scroll">
                        <div className="table-row">
                          <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-primary-500 text-right select-none" />
                          <CodeBlock.LineContent className="table-cell">
                            <CodeBlock.Token />
                          </CodeBlock.LineContent>
                        </div>
                      </CodeBlock.Code>
                    </CodeBlock> */
}
