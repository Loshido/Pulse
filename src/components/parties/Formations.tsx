import { component$, useStylesScoped$ } from "@builder.io/qwik";

import { LuBookUp, LuBookUp2 } from "@qwikest/icons/lucide"
import style from "./formations.css?inline"
export default component$(() => {
    useStylesScoped$(style);

    return <>
        <h2 class="font-semibold text-xl">
            Formations
        </h2>
        <div class="w-fit formations gap-2 p-2">
            <div class="p-1">
                <LuBookUp2 class="w-4 h-4" />
            </div>
            <div class="row-span-2">
                <h3 class="font-medium text-lg text-black text-opacity-65">
                    ISEN Méditerranée (Formation BAC+5, Diplôme d'ingénieur)
                </h3>
                <p>
                    2024 → 2029
                </p>
            </div>
            <div class="w-1 mx-auto bg-black bg-opacity-10 rounded"/>
            <div class="p-1">
                <LuBookUp class="w-4 h-4"/>
            </div>
            <div class="row-span-2">
                <h3 class="font-medium text-lg text-black text-opacity-65">
                    Stanislas Cannes (Collège / Lycée)
                </h3>
                <p>
                    2017 → 2024
                </p>
            </div>
            <div class="w-1 mx-auto bg-black bg-opacity-10 rounded"/>
        </div>
    </>
})