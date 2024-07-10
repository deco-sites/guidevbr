export interface Props {
  /**@title Conteudo */
  content: string;
}

export default function Paragraph({ content }: Props) {
  return <p className="text-base text-white">{content}</p>;
}
