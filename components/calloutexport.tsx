import { Callout } from "nextra/components";

export default function Callouter(props) {
  return (
    <Callout type="warning" emoji="⚠️">
      {props.children}
    </Callout>
  );
}
