import Image from "next/image";

interface ProjectCardImageProps {
  src: string;
  alt: string;
}

export function ProjectCardImage({ src, alt }: ProjectCardImageProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl group">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-all duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-white/10"></div>
    </div>
  );
}