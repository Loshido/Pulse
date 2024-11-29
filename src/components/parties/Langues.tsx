import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return <>
        <h2 class="font-semibold text-xl">
            Langues
        </h2>

        <ul class="p-2">
            <li>
                🇫🇷  <span class="font-medium text-black text-opacity-50">
                    Français
                </span> natif
            </li>
            <li>
                🇬🇧🇺🇸  <span class="font-medium text-black text-opacity-50">
                    Anglais
                </span> C1 Cambridge
            </li>
            <li>
                🇩🇪  <span class="font-medium text-black text-opacity-50">
                    Allemand
                </span> B1 Lycée/Collège, <span class="italic">
                    Hallo, ich bin Livio und noch Student.
                </span>
            </li>
            <li>
                🇯🇵  <span class="font-medium text-black text-opacity-50">
                    Japonais
                    </span> A1 Etudes supérieurs,　<span class="italic">
                        わたしは　<span 
                            class="underline underline-offset-4">
                            リビオ
                        </span>　です、がくせいです。
                    </span>
            </li>
        </ul>
    </>
})