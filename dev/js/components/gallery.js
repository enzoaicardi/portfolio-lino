define("gallery", function (datas, render) {
    import("../../../projets/projects.list.js").then(
        (module) => (datas.projects = module.default)
    );

    render(/* html */ `
        <div class="ai-gallery">
            <img class="vas-y-clique" src="./dev/assets/icons/vas-y-clique.svg">
            <x-if var="projects">
                <x-slider x-slides="projects" ref="slider"></x-slider>
                <x-slider x-slides="projects" ref="slider"></x-slider>
                <x-slider x-slides="projects" ref="slider"></x-slider>
            </x-if>
            <img class="pouce-leve" src="./dev/assets/icons/pouce-leve.svg">
        </div>
    `);

    setInterval(() => {
        let num = Math.floor(Math.random() * this.refs("slider").length);
        this.refs("slider")[num].carousel.scrollNext();
    }, 2000);
});
