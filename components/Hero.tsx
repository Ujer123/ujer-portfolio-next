import Link from "next/link"
import { Spotlight } from "./ui/spotlight"
import { FaLocationArrow } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { MagicButton } from "./ui/magic-button";
import IconsArrray from "./IconsArrray";


const Hero = () => {
  return (
    <div className="h-screen ">
         <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
        <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-black-100 bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:90px_90px] select-none flex items-center justify-center bg-black-100",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
          )}
          />
          </div>

            <div className="relative z-10 my-20 flex justify-center h-full">
              <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
                <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            MERN Stack Developer
          </h2>

            <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Code That Speaks,
Designs That Convert"            
            />

            <p className="my-4 text-center text-sm md:text-lg md:tracking-wider text-white">
            Hi, I&apos;m Ujer, a full-stack developer who turns complex business challenges into elegant, scalable web applications. 2+ years of experiences. Clean code, smooth performance, real results.

          </p>

            <Link className="text-white my-16" href="/">
            <MagicButton
            title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
            </Link>

            <IconsArrray/>
            </div>
            </div>
    </div>
  )
}

export default Hero
