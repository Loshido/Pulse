import { component$, PropsOf } from "@builder.io/qwik";

import { LuLinkedin, LuGithub } from "@qwikest/icons/lucide";
export default component$((props: PropsOf<'div'>) => {
    return <div {...props} class={[props.class?.toString(),
        "flex flex-row gap-2"]}>
        <LuGithub/>
        <LuLinkedin/>
    </div>
})