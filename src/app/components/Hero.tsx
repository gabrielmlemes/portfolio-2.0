import { HeroClient } from "./HeroClient";
import { Mouse } from "./ui/mouse";

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="relative z-10 px-4">
        <HeroClient />
      </div>
      <Mouse />
    </div>
  );
}

