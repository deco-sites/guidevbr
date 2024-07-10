import LogoIcon from "site/components/ui/LogoIcon.tsx";
import { LogoIcons } from "./ui/LogoIcon.tsx";

/**
 * @titleBy name
 */
export interface Link {
  /** @title Nome do Link */
  name: string;
  /** @title Nome do Link */
  /** @format html */
  label?: string;
  /** @title URL do Link */
  link: string;
  /** @title Abrir em nova aba */
  openInNewTab?: boolean;
  /**
   * @title Nome do Icone
   * @format icon-select
   * @options site/loaders/logoIconsAdminLoader.ts
   */
  icon: LogoIcons;
}

/**
 * @titleBy name
 */
export interface Props {
  /**@title Titúlo da Seção */
  title: string;
  /** @title Links */
  links: Link[];
}

export default function LinkBar({
  title = "Links",
  links = [
    {
      icon: "GitHub",
      link: "https://github.com",
      name: "Github",
      openInNewTab: true,
    },
  ],
}: Props) {
  return (
    <div className="text-white flex flex-col gap-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.link} target={link.openInNewTab ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center flex-col cursor-pointer">
              <LogoIcon id={link.icon} size={24} />
              <span
                className="mt-1 text-center"
                dangerouslySetInnerHTML={{
                  __html: link.label ?? link.name,
                }}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
