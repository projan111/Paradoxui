"use client";
import React from "react";
import { useCopyToClipboard } from "react-use";
import { Resizable } from "re-resizable";
import { Button } from "@/components/ui/button";
import { Clipboard, CheckCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/clientRepository";
import { useParams } from "next/navigation";
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import "rsuite/Timeline/styles/index.css";
import { CodeBlock, oneDark } from "@react-email/code-block";
import { Separator } from "@/components/ui/separator";

type Props = {};

export default function Page({}: Props) {
  const params = useParams();
  const id = params.id;

  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = (code: string) => {
    copyToClipboard(code);
    setTimeout(() => {
      copyToClipboard("");
    }, 2000);
  };

  const [currentSubcategory, setCurrentSubcategory] = useState<any>();
  useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("Sub Category").select("*").eq("id", id).single();
      if (error) {
        throw new Error("Failed to fetch a components.");
      }

      setCurrentSubcategory(data);
    };
    id && fetch();
  }, [id]);

  const [components, setComponents] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchComponent = async () => {
      setIsLoading(true);
      let { data, error } = await supabase.from("Component").select("*").eq("subcategory", id);
      if (error) {
        setIsLoading(false);
        throw new Error("Failed to fetch a components.");
      }

      setComponents(data);
      setIsLoading(false);
    };
    id && fetchComponent();
  }, [id]);

  const [currentComponentId, setcurrentComponentId] = useState<any>();
  const [currentComponent, setcurrentComponent] = useState<any>();
  const [currentComponentBlocks, setcurrentComponentBlocks] = useState<any>();
  
  useEffect(() => {
    const fetchComponent = async () => {
      let { data, error } = await supabase.from("Component").select().eq("id", currentComponentId).single();
      let { data: blocks } = await supabase.from("Block").select("*").eq("component", data?.id);
      if (error) {
        throw new Error("Failed to fetch a component.");
      }

      setcurrentComponent(data);
      setcurrentComponentBlocks(blocks);
    };
    currentComponentId && fetchComponent();
  }, [currentComponentId]);

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
      }
    };
    fetch();
  }, [currentComponentId]);

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
                      onClick={() => setcurrentComponentId(component.id)}
                      variant="ghost"
                      className="border bg-primary-800 hover:bg-primary-800/50  text-secondary-400">
                      View code
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[1024px]  ">
                    <div className="h-[70vh] overflow-y-scroll">
                      {currentComponentBlocks?.map((block: any, index: number) => (
                        <div key={index}>
                          <div>
                            <DialogTitle className="  text-xl text-secondary-400">{block.title}</DialogTitle>
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
                            {props?.map((prop: any, index) => (
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

const dummyData = [
  {
    Prop: "Indiana",
    Type: "Indiana",
    Default: "String",
    Description: "Indianapolis",
  },

  {
    Prop: "Indiana",
    Type: "Indiana",
    Default: "String",
    Description: "Indianapolis",
  },

  {
    Prop: "Indiana",
    Type: "Indiana",
    Default: "String",
    Description: "Indianapolis",
  },

  {
    Prop: "Indiana",
    Type: "Indiana",
    Default: "String",
    Description: "Indianapolis",
  },

  {
    Prop: "Indiana",
    Type: "Indiana",
    Default: "String",
    Description: "Indianapolis",
  },

  {
    Prop: "Indiana",
    Type: "Indiana",
    Default: "String",
    Description: "Indianapolis",
  },

  {
    Prop: "Indiana",
    Type: "Indiana",
    Default: "String",
    Description: "Indianapolis",
  },
];

const blocks = [
  {
    name: "Block 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque, possimus natus vitae quasi fugiat expedita quis quos, maxime voluptatem eum hic illum sunt qui. Ipsum perferendis officiis reiciendis similique optio illum quaerat molestias beatae quam deserunt ducimus, facere saepe!",
    code: `export default async (req, res) => {
      try {
        const html = await renderAsync(
          EmailTemplate({ firstName: 'John' })
        );
        return NextResponse.json({ html });
      } catch (error) {
        return NextResponse.json({ error });
      }
    }`,
    filePathname: "app/docs/components/Testcomponents.tsx",
    language: "javascript",
  },

  {
    name: "Prerequisites",
    description: "",
    code: `
npm install @radix-ui/react-icons
npx shadcn-ui@latest add button calendar command`,
    filePathname: "Install marquee and globe from Magic UI",
    language: "bash",
  },

  {
    name: "Installation",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque, possimus natus vitae quasi fugiat expedita quis quos, maxime voluptatem eum hic illum sunt qui. Ipsum perferendis officiis reiciendis similique optio illum quaerat molestias beatae quam deserunt ducimus, facere saepe!",
    code: `module.exports = {
      theme: {
        extend: {
          animation: {
            orbit: "orbit calc(var(--duration)*1s) linear infinite",
          },
          keyframes: {
            orbit: {
                "0%": {
                    transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
                },
                "100%": {
                    transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
                },
            },
          },
        },
      },
    };
    `,
    filePathname: "tailwindconfig.ts",
    language: "javascript",
  },

  {
    name: "Orbiting Circles",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque, possimus natus vitae quasi fugiat expedita quis quos, maxime voluptatem eum hic illum sunt qui. Ipsum perferendis officiis reiciendis similique optio illum quaerat molestias beatae quam deserunt ducimus, facere saepe!",
    code: `import { cn } from "@/lib/utils";

    export default function OrbitingCircles({
      className,
      children,
      reverse,
      duration = 20,
      delay = 10,
      radius = 50,
      path = true,
    }: {
      className?: string;
      children?: React.ReactNode;
      reverse?: boolean;
      duration?: number;
      delay?: number;
      radius?: number;
      path?: boolean;
    }) {
      return (
        <>
          {path && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <circle
                className="stroke-black/10 stroke-1 dark:stroke-white/10"
                cx="50%"
                cy="50%"
                r={radius}
                fill="none"
                strokeDasharray={"4 4"}
              />
            </svg>
          )}
    
          <div
            style={
              {
                "--duration": duration,
                "--radius": radius,
                "--delay": -delay,
              } as React.CSSProperties
            }
            className={cn(
              "absolute flex h-full w-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
              { "[animation-direction:reverse]": reverse },
              className,
            )}
          >
            {children}
          </div>
        </>
      );
    }
    }`,
    filePathname: "components/magicui/orbiting-circles.tsx",
    language: "javascript",
  },

  {
    name: "",
    description: "",
    code: `import clsx, { ClassValue } from "clsx";
    import { twMerge } from "tailwind-merge";
     
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }`,
    filePathname: "utils.ts",
    language: "javascript",
  },
];

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

{
  /* <Timeline  className=" h-[70vh] overflow-y-scroll ">
                      <Timeline.Item     className="pb-8">
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

                      <Timeline.Item>
                        <p className=" text-xl font-medium tracking-wide">Available Props</p>
                        <Separator className=" mt-2 mb-8" />

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
                            {dummyData.map((dummy, index) => (
                              <tr
                                key={index}
                                className=" grid grid-cols-4 text-white/80 ">
                                <td className=" border-l border-r border-b p-2 ">{dummy.Prop}</td>
                                <td className="  border-r border-b p-2  ">{dummy.Type}</td>
                                <td className="  border-r border-b p-2 ">{dummy.Default}</td>
                                <td className=" p-2  border-r border-b ">{dummy.Description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </Timeline.Item>

                      <Timeline.Item> </Timeline.Item>
                    </Timeline> */
}
