import { MoveUpRight } from "lucide-react";
import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  route?: string;
}

const SectionHeader = ({ title, subtitle, route }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col">
      <Link
        href={route || "/"}
        className="flex items-center gap-2 group cursor-pointer w-fit"
      >
        <h2 className="uppercase text-2xl md:text-4xl tracking-widest">
          {title}
        </h2>
        <MoveUpRight
          size={35}
          className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300"
        />
      </Link>
      <p className="opacity-50 max-w-xl">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
