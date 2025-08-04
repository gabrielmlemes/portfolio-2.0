import { HeroClient } from "./HeroClient";
import { Mouse } from "./ui/Mouse";

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
      <div className="absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10 px-4">
        <HeroClient />
      </div>
      <Mouse />
      <div className="absolute bottom-0 left-0 z-10 h-48 w-full bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}

