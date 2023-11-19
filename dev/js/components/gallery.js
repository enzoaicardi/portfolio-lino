
define('gallery', function(datas, render){

    import('../../../projets/projects.list.js').then(module => datas.projects = module.default)

    render(/* html */`
        <div class="ai-gallery">
            <img class="vas-y-clique" src="./dev/assets/icons/vas-y-clique.svg">
            <x-if var="projects">
                <x-slider x-slides="projects"></x-slider>
                <x-slider x-slides="projects"></x-slider>
                <x-slider x-slides="projects"></x-slider>
            </x-if>
        </div>
    `)

})