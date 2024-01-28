import Vif from "https://cdn.jsdelivr.net/gh/vifjs/vif/dist/esm/vif.js";

Vif.define("page-home", function (signal, html) {
    this.navigate = Vif.navigate;

    return html`<main class="page-home">
        <h1>Lino Designer graphique</h1>
        <p>Carroussel ici !</p>

        <a href="./?project=project-name" x-on:click="navigate">
            Aller au faux projet
        </a>
    </main>`;
});
