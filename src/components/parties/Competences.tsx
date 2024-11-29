import { component$, type PropsOf, Slot, useStylesScoped$ } from "@builder.io/qwik";

export const Item = component$((props: PropsOf<'div'>) => {
    return <div {...props} class={[props.class?.toString(),
        "p-2 border-2 border-black border-collapse border-opacity-5"
    ]}>
        <Slot/>
    </div>
})
export const SmallItem = component$((props: PropsOf<'div'>) => {
    return <div {...props} class={[props.class?.toString(),
        "border border-black border-collapse border-opacity-5 text-xs p-1"
    ]}>
        <Slot/>
    </div>
})

import style from "./competences.css?inline"
import { LuActivity, LuChevronsUp } from "@qwikest/icons/lucide";
export default component$(() => {
    useStylesScoped$(style);

    return <>
        <h2 class="font-semibold text-xl">
            Compétences
        </h2>

        <div class="grille grid-flow-dense sm:grid-flow-row text-black text-opacity-65 p-2">
            <Item class="col-span-2">
                Typescript
                <div class="flex flex-row gap-1 p-1 text-black text-opacity-30 *:h-3 *:w-3">
                    <LuActivity/>
                    <LuChevronsUp/>
                </div>
            </Item>
            <Item class="row-span-2">
                Rust
                <div class="flex flex-row gap-1 p-1 text-black text-opacity-30 *:h-3 *:w-3">
                    <LuActivity/>
                </div>
            </Item>
            <div class="col-span-2 border border-black border-collapse border-opacity-5
                grid grid-cols-3 grid-rows-2">
                <SmallItem>
                    Figma
                    <div class="flex flex-row gap-1 p-1 text-black text-opacity-30 *:h-3 *:w-3">
                        <LuActivity/>
                    </div>
                </SmallItem>
                <SmallItem>
                    Qwik
                    <div class="flex flex-row gap-1 p-1 text-black text-opacity-30 *:h-3 *:w-3">
                        <LuActivity/>
                        <LuChevronsUp/>
                    </div>
                </SmallItem>
                <SmallItem>
                    Nodejs
                </SmallItem>
                <SmallItem>
                    Bun
                    <div class="flex flex-row gap-1 p-1 text-black text-opacity-30 *:h-3 *:w-3">
                        <LuActivity/>
                        <LuChevronsUp/>
                    </div>
                </SmallItem>
                <SmallItem>
                    Blender
                </SmallItem>
                <SmallItem>
                    Postgis
                </SmallItem>
            </div>
            <Item>
                Linux
                <div class="flex flex-row gap-1 p-1 text-black text-opacity-30 *:h-3 *:w-3">
                    <LuActivity/>
                </div>
            </Item>
            <Item>
                Postgres
                <div class="flex flex-row gap-1 p-1 text-black text-opacity-30 *:h-3 *:w-3">
                    <LuChevronsUp/>
                </div>
            </Item>
            <Item>
                Docker
                <div class="flex flex-row gap-1 p-1 text-black text-opacity-30 *:h-3 *:w-3">
                    <LuActivity/>
                    <LuChevronsUp/>
                </div>
            </Item>
            <Item>
                Git
                <div class="flex flex-row gap-1 p-1 text-black text-opacity-30 *:h-3 *:w-3">
                    <LuActivity/>
                </div>
            </Item>
        </div>

        <div class="legende px-2 italic">
            <div class="p-1">
                <LuActivity class="w-4 h-4"/>
            </div>
            <div>
                Utilisation fréquente
            </div>
            <div class="p-1">
                <LuChevronsUp class="w-4 h-4"/>
            </div>
            <div>
                Maîtrise
            </div>
        </div>
    </>
})