import { SocialLinks } from "./ui/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 py-6">
      <div className="mx-auto flex gap-2 flex-col max-w-sm items-center justify-center rounded-full border border-white/10 bg-black/30 p-4 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-4">
          <SocialLinks />
        </div>
        <p className="text-xs text-slate-300 w-fit text-nowrap">
          &copy; {currentYear} Gabriel Lemes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

