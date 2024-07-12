export type SystemStatusService = {
  name: string;
  status: "OK" | "DOWN";
  statusPage: string;
}[];

export interface Props {
  statusUrl: string;
}

export default async function loader({ statusUrl = "https://status.functions.gui.dev.br" }: Props, _req: Request): Promise<SystemStatusService> {
  const response = await fetch(statusUrl);
  const data = (await response.json()) as SystemStatusService;
  return data;
}
