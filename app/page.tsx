// import Image from "next/image";

import Hero from '@/components/Hero';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div>
          <ThemeToggle/>
          <Hero />
        </div>
      </div>
    </main>
  );
}
//ctr+k =>next.js
//npm install -g npm@10.9.1
//npm i framer-motion clsx tailwind-merge --force
//npm config set legacy-peer-deps true     ** works**
