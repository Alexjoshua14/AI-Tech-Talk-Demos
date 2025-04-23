import { Commissioner } from "next/font/google";
import Image from "next/image";

const commisioner = Commissioner({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className={`text-5xl font-medium ${commisioner.variable}`}>
          {`AI Applications with Vercel’s AI SDK`}
        </h1>
        <p className="text-lg">
          {`Tech Talk Demo AI Projects `}
        </p>
        <div className="flex cursor-default">
          <p className="hidden">
            Alex Joshua
          </p>
          {"Alex Joshua".split("").map((letter, index) => {
            if (letter == " ")
              return (
                <div className="w-1"></div>
              )
            else
              return (
                <div key={index} className="hover:scale-110 transitiion-all duration-300 ease-in-out subpixel-antialiased">
                  <p>
                    {letter}
                  </p>
                </div>
              )
          })}
        </div>
      </main>
    </div>
  );
}
