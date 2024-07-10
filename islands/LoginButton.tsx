import LoginButton, { Props as ComponentProps } from "site/components/LoginButton.tsx";
export type Props = ComponentProps;
export default function Island(props: ComponentProps) {
  return <LoginButton {...props} />;
}
