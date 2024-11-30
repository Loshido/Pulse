import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return <>
        <h2 class="font-semibold text-xl">
            Projets
        </h2>

        <ul class="list-disc list-inside ml-2">
            <li>
                <strong class="text-[#20386E60] ">Isen Engineering</strong>, 
                une association d'étudiant dont l'objectif 
                est d'apprendre des uns et des autres par la création de projets:
                <ul class="list-disc list-inside ml-8">
                    <li>
                        <strong>Tide</strong>, une application pour prendre 
                        l'appel et gérer les projets (+ API + BDD)
                    </li>
                    <li>
                        <strong>Isen't it</strong>, un jeu hautement distribuable 
                        (compilé en WASM & natif) servant de demo technique 
                        (Rust, Bevy, + jouable via QRCode)
                    </li>
                </ul>
            </li>
            <li>
                <strong class="text-[#00b0bc60]">SafeMap</strong>, une startup offrant 
                une solution pour identifier la position des imperfections des routes 
                dans les communes ayant besoin de garantir 
                la bonne qualité de leur réseau routier.
                <ul class="list-disc list-inside ml-8">
                    <li>
                       Une plateforme permettant de visualiser des données géographiques
                       traitées avec un système de permission complexe.
                    </li>
                </ul>
            </li>
            <li>
                <strong>Legofication</strong>, une application permettant de transformer toutes images en images lego.
            </li>
            <li>
                Écosystème Siege
                <ul class="ml-4 list-disc list-inside">
                    <li>
                        Pulse (CV)
                    </li>
                    <li>
                        Mute (CMS & Facturations)
                    </li>
                    <li>
                        Jackal (Analytics)
                    </li>
                    <li>
                        Alibi (Serveur)
                    </li>
                    <li>
                        Nomad (Page d'accueil)
                    </li>
                    <li>
                        IQ (Base de données)
                    </li>
                    <li>
                        Mira (Status)
                    </li>
                </ul>
            </li>
        </ul>
    </>
})