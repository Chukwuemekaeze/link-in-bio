import type { ReactElement } from "react";

type Props = {
  href: string;
  label: string;
  icon?: ReactElement;
};

export default function LinkButton({ href, label, icon }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 w-full max-w-xs py-3 px-4 rounded-lg
                 bg-white/10 backdrop-blur text-white shadow-lg shadow-black/20
                 hover:bg-white/20 hover:scale-[1.02] focus:outline-none
                 focus:ring-2 focus:ring-lime-400 transition"
    >
      {icon && icon}
      <span className="flex-1 text-center">{label}</span>
    </a>
  );
}
