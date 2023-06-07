import { Callout } from "nextra/components";

export default function CalloutExport(props) {
  return (
    <Callout type="warning" emoji="⚠️">
      {props.children}
    </Callout>
  );
}
