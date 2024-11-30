import { component$ } from "@builder.io/qwik";

import Hover from "~/components/utilitaires/Hover";
export default component$(() => {
    return <>
        <h1 class="text-4xl sora font-bold">
            Livio Ardoin
        </h1>
        <div>
            Étudiant en 1ère année de prépa ingénieur à l'
            <span class="font-medium underline decoration-red-200 underline-offset-4">
                <Hover y={110} align="right">
                    ISEN Méditerranée
                    <div q:slot="hover">isn't it?</div>
                </Hover>
            </span>
        </div>
    </>
})