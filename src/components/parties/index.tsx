import { component$, Slot, type PropsOf } from "@builder.io/qwik";
import Competences from "./Competences";
import Formations from "./Formations";
import Introduction from "./Introduction";
import Langues from "./Langues";
import Projets from "./Projets";

const Partie = component$((props: PropsOf<'div'>) => {
    return <div {...props} class={[
        "p-3", props.class?.toString()
    ]}>
        <Slot/>
    </div>
})
export { 
    Competences,
    Formations,
    Introduction,
    Langues,
    Projets,
    Partie
}