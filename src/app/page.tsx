'use client'
import DarkButton from "@/components/sabion-ui/dark-hero-button";
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
    setSrcLink(`${fullUrl}sabin/dark-button.json` || 'my-components');
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
    <div className="font-sans min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col items-center text-center gap-8 mb-16">
          <Image
            className="dark:invert mb-8"
            src="/next.svg"
            alt="Next.js logo"
            width={220}
            height={48}
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Build Better. Build Faster.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Get started with our modern UI components library for Next.js applications
          </p>

          <div className="flex gap-6 items-center flex-col sm:flex-row mt-8">
            <DarkButton>
              Install My Components
            </DarkButton>
            
            <button
              onClick={handleCopy}
              disabled={!srcLink}
              className="flex gap-3 items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-green-400 rounded-xl transition-all duration-200 font-mono text-sm shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              aria-label="Copy installation command"
            >
              <span className="select-all">
                npx shadcn add {srcLink || 'loading...'}
              </span>
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-white" />
              )}
            </button>
            
            {copied && (
              <div className="absolute mt-16 px-3 py-1 bg-green-600 text-white text-sm rounded-lg shadow-lg animate-fade-in">
                Copied to clipboard!
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Start
            </h3>
            <ol className="font-mono list-decimal list-inside space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="tracking-tight">
                Edit{' '}
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                  src/app/page.tsx
                </code>
              </li>
              <li className="tracking-tight">
                Save and see your changes instantly
              </li>
              <li className="tracking-tight">
                Deploy with Vercel for production
              </li>
            </ol>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Features
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>🎨 Modern UI components</li>
              <li>🌙 Dark mode support</li>
              <li>📱 Responsive design</li>
              <li>⚡ TypeScript ready</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Documentation
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive guides and API references to help you build amazing applications.
            </p>
            <a
              href="/docs"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
            >
              View Documentation →
            </a>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 flex gap-6 flex-wrap items-center justify-center border-t border-gray-200 dark:border-gray-800">
        <a
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}