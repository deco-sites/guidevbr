export type SystemStatusService = {
  name: string;
  status: "OK" | "DOWN";
  statusPage: string;
}[];

export interface Props {
  statusUrl: string;
}

export default async function loader({ statusUrl = "https://status.functions.gui.dev.br" }: Props): Promise<SystemStatusService> {
  try {
    console.log("statusUrl", statusUrl);
    const response = await fetch(statusUrl);
    const data = (await response.json()) as SystemStatusService;
    console.log("data", data);
    return data;
  } catch (_error) {
    console.log("error", _error);
    return [
      {
        name: "Sistema de Status",
        status: "DOWN",
        statusPage: statusUrl,
      },
    ];
  }
}
