import { component$, PropsOf, Slot } from "@builder.io/qwik";

interface Hover {
    x?: number,
    y?: number,
    align?: 'left' | 'right'
}

type Props = Hover & PropsOf<'span'>

export default component$(({x, y, align, ...props}: Props) => {
    return <span {...props} class={["relative group",
            props.class?.toString()]}>
        <Slot/>
        <div style={`top: ${y || 100}%;${align || 'left'}: ${x || 0}%;`}
             class="absolute hidden group-hover:block z-50">
            <Slot name="hover"/>
        </div>
    </span>
})