import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { 
    Introduction, 
    Formations, 
    Competences, 
    Langues, 
    Projets,
    SavoirFaire,
    Partie,
} from "~/components/parties"
import Liens from "~/components/parties/Liens";
export default component$(() => {
    return <div class="py-12 sm:py-24 px-6 sm:px-32 md:px-48 lg:px-64 
        text-black text-opacity-30 sora">
        <Introduction/>

        <section class="flex flex-col py-2">
            <Partie>
                <Formations/>
            </Partie>
            <Partie class="flex flex-col sm:flex-row flex-wrap gap-2">
                <Competences/>
                <SavoirFaire/>
            </Partie>
            <Partie>
                <Langues/>
            </Partie>
            <Partie>
                <Projets/>
            </Partie>
            <Liens/>
        </section>
    </div>;
});

export const head: DocumentHead = {
    title: "Livio",
    meta: [
    ],
};
