import SystemStatus, { Props as ComponentProps } from "site/components/SystemStatus.tsx";
export type Props = ComponentProps;
export default function Island(props: Props) {
  return <SystemStatus {...props} />;
}
