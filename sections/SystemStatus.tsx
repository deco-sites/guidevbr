import SystemStatus from "site/islands/SystemStatus.tsx";
import type { SystemStatusService } from "../loaders/SystemStatusLoader.ts";

interface Props {
  statusLoader: SystemStatusService;
}

export default function Section(props: Props) {
  return <SystemStatus services={props.statusLoader} />;
}
