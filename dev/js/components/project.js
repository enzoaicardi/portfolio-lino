define("project", function (datas, render) {
    window.setProject = (project) => {
        datas.project = project;
    };

    datas.display = "none";

    this.effect("project", () => {
        if (datas.project) {
            import(
                "../../../projets/" + datas.project + "/project.config.js"
            ).then((module) => (datas.blocks = module.default));
            datas.display = "block";
            document.documentElement.style.overflow = "hidden";
            window.sliderPaused = true;
        } else {
            datas.display = "none";
            document.documentElement.style.overflow = "auto";
            window.sliderPaused = false;
        }
    });

    this.filter("isHeader", (value) => value === "header");
    this.filter("isHero", (value) => value === "hero");
    this.filter("isRow", (value) => value === "row");

    render(/* html */ `
        <section class="ai-project" x-style="display:{display}">
            <header class="ai-project-heading">
                <img src="">
                <img ref="close" class="close" src="./dev/assets/icons/close.svg">
            </header>
            <div class="main">
                <x-for var="blocks" key="block">
                    <x-if var="block.type|isHeader">
                        <x-project-header x-title="block.title" x-date="block.date" x-button="block.button"></x-project-header>
                    </x-if>
                    <x-if var="block.type|isHero">
                        <x-project-hero x-image="block.image" x-text="block.text"></x-project-hero>
                    </x-if>
                    <x-if var="block.type|isRow">
                        <x-project-row x-image="block.image" x-text="block.text"></x-project-row>
                    </x-if>
                </x-for>
            </div>
        </section>
    `);

    this.ref("close").addEventListener("click", () => window.setProject(""));
});
