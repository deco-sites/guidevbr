import { Section } from "deco/blocks/section.ts";
type TailwindGap = "gap-0" | "gap-1" | "gap-2" | "gap-3" | "gap-4" | "gap-5" | "gap-6" | "gap-8" | "gap-10" | "gap-12" | "gap-16" | "gap-20" | "gap-24" | "gap-32" | "gap-40" | "gap-48" | "gap-56" | "gap-64";
export interface Props {
  /**@title Sessões */
  sections: Section[];

  /**@title Espaçamento */
  spacing?: TailwindGap;

  /**@title Tipo */
  type: "screen" | "area";

  /**@title Direção */
  direction?: "row" | "column";
}
export default function Container({ sections, spacing, type, direction }: Props) {
  if (type === "screen") {
    return (
      <main className={"bg-stone-900 h-screen"}>
        <div className={`container mx-auto p-4 flex ${direction == "column" ? "flex-col" : ""} ${spacing}`}>
          {sections.map(({ Component, props }) => (
            <Component key={props.id} {...props} />
          ))}
        </div>
      </main>
    );
  }

  return (
    <div className={`flex ${direction == "column" ? "flex-col" : ""} ${spacing}`}>
      {sections.map(({ Component, props }) => (
        <Component key={props.id} {...props} />
      ))}
    </div>
  );
}
