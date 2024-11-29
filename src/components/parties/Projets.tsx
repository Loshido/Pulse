import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return <>
        <h2 class="font-semibold text-xl">
            Projets
        </h2>

        <span>(à finir)</span>
        <ul class="list-disc list-inside">
            <li>
                Isen Engineering
            </li>
            <li>
                SafeMap
            </li>
            <li>
                Legoficator
            </li>
            <li>
                Eco-système 
                <ul class="ml-4 list-disc list-inside">
                    <li>
                        Solis (CV)
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
                </ul>
            </li>
        </ul>
    </>
})