"use client";
import { CodeBlock } from "react-code-block";
import { useCopyToClipboard } from "react-use";
import { themes } from "prism-react-renderer";
import { Resizable } from "re-resizable";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, CodeXml, Clipboard, ClipboardList } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/clientRepository";
type Props = {};

export default function Page({}: Props) {
  const websiteUrl = "https://webxnep.com/";

  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    copyToClipboard(code);

    setTimeout(() => {
      copyToClipboard(""); // Reset the copied state after 2 seconds
    }, 2000);
  };

  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetch = async () => {
      let { data: Component, error } = await supabase.from("Component").select("*");
      setCategories(Component || []);
    };
    fetch();
  }, []);

  console.log(categories);

  const code = `
    import { Separator } from "@/components/ui/separator"

    export function SeparatorDemo() {
      return (
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      )
    }
    `;
  const language = "javascript";
  const filename = "components/website/DocsSidebar.tsx";
  return (
    <>
      {categories.map((component) => (
        <div key={component.id}>
          <div className=" flex items-center justify-end">
            <Button
              onClick={() => setIsPreviewMode(!isPreviewMode)}
              className=" flex items-center gap-1 text-sm">
              {isPreviewMode ? "Code" : "Preview"}
              {isPreviewMode ? <CodeXml size={18} /> : <MonitorSmartphone size={18} />}
            </Button>
          </div>

          <div className=" w-11/12 mx-auto">
            {isPreviewMode ? (
              <div className=" rounded-md max-w-11/12">
                <Resizable
                  defaultSize={{
                    width: " 100%",
                    height: 200,
                  }}>
                  <iframe
                    title="Website Preview"
                    src={component.previewUrl}
                    width="100%"
                    height="500px"
                    className=" rounded-2xl shadow-lg border-r-4 border-r-neutral-500 border "></iframe>
                </Resizable>
              </div>
            ) : (
              <CodeBlock
                code={component.code}
                language={language}
                theme={themes.oneDark}>
                <div className="text-sm text-gray-400  absolute px-8 py-4  font-semibold flex ">{filename}</div>
                <button
                  className="text-sm text-gray-400  absolute px-4 py-4 right-20  font-semibold flex"
                  onClick={copyCode}>
                  {state.value ? <ClipboardList size={20} /> : <Clipboard size={20} />}
                </button>

                <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg pt-12">
                  <div className="table-row">
                    <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
                    <CodeBlock.LineContent className="table-cell">
                      <CodeBlock.Token />
                    </CodeBlock.LineContent>
                  </div>
                </CodeBlock.Code>
              </CodeBlock>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
