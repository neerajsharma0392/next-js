import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Tailwind Demo</h1>

      {/* <button>ClickMe!</button> */}

      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img class="h-12 w-12" src="/logo.webp" alt="" />
        </div>

        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">you have a new message</p>
        </div>
      </div>
    </div>
  );
}
