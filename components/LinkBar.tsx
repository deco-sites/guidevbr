import LogoIcon from "site/components/ui/LogoIcon.tsx";
import { LogoIcons } from "./ui/LogoIcon.tsx";

/**
 * @titleBy name
 */
export interface Link {
  /** @title Nome do Link */
  name: string;
  /** @title URL do Link */
  link: string;
  /** @title Abrir em nova aba */
  openInNewTab: boolean;
  /**
   * @title Nome do Icone
   * @format icon-select
   * @options site/loaders/logoIconsAdminLoader.ts
   */
  icon: LogoIcons;
}

export interface Props {
  /** @title Links */
  links: Link[];
}

export default function LinkBar({
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
    <div>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.link}
              target={link.openInNewTab ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <LogoIcon id={link.icon} size={24} />
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
