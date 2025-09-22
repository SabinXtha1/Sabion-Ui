'use client'
 
import JelloEffect from "@/registry/default/BouncyText/BounceText";
import { Copy, Check } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function Home() {
  const [srcLink, setSrcLink] = useState('');
  const [copied, setCopied] = useState(false);
    const pathname = usePathname()
  
  // Get full URL
  const fullUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${pathname}` 
    : '';
    console.log(fullUrl)

  useEffect(() => {
    // Fallback to a default value if environment variable is not set
    setSrcLink(`${fullUrl}r/bouncy-text.json` || 'my-components');
  }, []);

  const handleCopy = async () => {
    const textToCopy = `npx shadcn add ${srcLink}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
   <div className="bg-black text-white max-w-5xl mx-auto border-x min-h-screen border-dotted px-10 py-10  ">
    <div className="w-full h-screen flex flex-col gap-10 items-center justify-center">
   <JelloEffect words="SABION" className="text-9xl   font-sans rotate-2" />
   <code className="bg-gray-600 rounded-2xl text-green-500 border  px-3 py-2 flex gap-5 items-center">
         npx shadcn add {srcLink || "loading...."}  <Copy onClick={handleCopy} />
         {copied && <Check className="text-green-500" />}
   </code>
         
    </div>
   </div>
  );
}