import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return <section>
        <h2 class="font-semibold text-xl">
            Savoir-faire
        </h2>

        <ul class="list-disc list-inside pl-4">
            <li>
                Création d'application web dynamiques avec<br/> <span 
                    title="Redis">cache</span> et <span
                    title="Postgresql, mysql ou autre...">
                        base de données relationnelle
                    </span>.
                </li>
            <li>Création d'interface web d'administration</li>
            <li>CI/CD</li>
            <li>Conteneurisation d'applications</li>
            <li>Design et prototypage d'interfaces</li>
        </ul>
    </section>
})