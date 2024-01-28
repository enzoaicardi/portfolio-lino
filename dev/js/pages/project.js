import Vif from "https://cdn.jsdelivr.net/gh/vifjs/vif/dist/esm/vif.js";

Vif.define("page-project", function (signal, html) {
    // navigation
    this.navigate = Vif.navigate;

    // project relative datas
    this.path = `/projects/${this.name()}`;
    this.sections = signal([]);

    // import project datas
    if (this.name()) {
        import(`../../..${this.path}/page.js`)
            .then((res) => this.sections(res.default))
            .catch((err) =>
                console.error("[portfolio] error on project import", err)
            );
    }

    return html`<main class="page-project">
        <h1>Bienvenue sur le projet : <span x-text="name()"></span></h1>
        <a href="/" x-on:click="navigate">Revenir à l'accueil</a>
        <template x-for="sections()" item="section">
            <p x-text="section().type"></p>
        </template>
    </main>`;
});
