import { Section } from "deco/blocks/section.ts";

export interface Props {
    /**@title Sessões */
    sections: Section[];
}
export default function Container({ sections }: Props) {
    return (
        <main className="bg-stone-900 h-screen">
            <main className="container mx-auto p-4">
                {sections.map(({ Component, props }) => (
                    <Component key={props.id} {...props} />
                ))}
            </main>
        </main>
    );
}
