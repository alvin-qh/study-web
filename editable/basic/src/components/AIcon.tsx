import { createEffect, createSignal, type JSX } from "solid-js";

const AIcon = (props: {
  name: string
  effect?: boolean
}): JSX.Element => {
  const className = `fa-solid fa-${props.name} fa-fw`;

  if (props.effect ?? false) {
    const [classes, setClasses] = createSignal(className);

    createEffect(() => {
      const { name } = props;
      setClasses(`fa-solid fa-${name} fa-fw`);
    });

    return (<i class={classes()}></i>);
  }

  return (<i class={className}></i>);
};

export default AIcon;
