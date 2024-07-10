import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type LogoIcons = "Coolify" | "Cloudflare" | "Figma" | "Firebase" | "GitHub" | "Gmail" | "GoogleCloud" | "GoogleMeet" | "Immich" | "MicrosoftTeams" | "Notion" | "Oracle" | "PiHole" | "Portainer" | "Tarefy" | "TraefikProxy" | "Vercel";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id: LogoIcons;
  size?: number;
}

function LogoIcon({ id, strokeWidth = 16, size, width, height, ...otherProps }: Props) {
  return (
    <svg {...otherProps} width={width ?? size} height={height ?? size} strokeWidth={strokeWidth}>
      <use href={asset(`/icons/logos.svg#${id}`)} />
    </svg>
  );
}

export default LogoIcon;
