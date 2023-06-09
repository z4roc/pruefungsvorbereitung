import { Callout } from "nextra-theme-docs";

export default function CCallout(props) {
  return (
    <Callout type="warning" emoji="⚠">
      {props.children}
    </Callout>
  );
}
