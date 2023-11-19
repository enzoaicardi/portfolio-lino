
define('slider', function(datas, render){

    datas.slides = datas.slides && (Object.entries(datas.slides))

    render(/* html */`
        <div ref="slider" class="ai-gallery-slider embla">
            <div class="embla__container">
                <x-for var="slides" key="slide">
                    <div class="ai-gallery-slider-slide embla__slide" x-style="background:{slide.1.color};">
                        <x-if var="slide.1.image">
                            <img x-src="slide.1.image">
                        </x-if>
                    </div>
                </x-for>
            </div>
            <img ref="prev" src="./dev/assets/icons/arrow.svg" class="embla__prev">
            <img ref="next" src="./dev/assets/icons/arrow.svg" class="embla__next">
        </div>
    `)

    let carousel = EmblaCarousel(this.ref('slider'), {
        loop: true,
        startIndex: Math.floor(Math.random() * datas.slides.length)
    })

    this.ref('prev').addEventListener('click', ()=>carousel.scrollPrev())
    this.ref('next').addEventListener('click', ()=>carousel.scrollNext())

})