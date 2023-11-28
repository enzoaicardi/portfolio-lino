define("slider", function (datas, render) {
    datas.slides =
        datas.slides &&
        Object.entries(datas.slides).sort((a, b) => 0.5 - Math.random());

    render(/* html */ `
        <div ref="slider" class="ai-gallery-slider embla">
            <div class="embla__container">
                <x-for var="slides" key="slide">
                    <div ref="slide" x-project="slide.0" class="ai-gallery-slider-slide embla__slide" x-style="background:{slide.1.color};">
                        <x-if var="slide.1.image">
                            <img x-src="slide.1.image">
                        </x-if>
                    </div>
                </x-for>
            </div>
            <!-- <img ref="prev" src="./dev/assets/icons/arrow.svg" class="embla__prev">
            <img ref="next" src="./dev/assets/icons/arrow.svg" class="embla__next"> -->
        </div>
    `);

    this.carousel = EmblaCarousel(this.ref("slider"), {
        loop: true,
        startIndex: Math.floor(Math.random() * datas.slides.length),
    });

    this.refs("slide").forEach((slide) =>
        slide.addEventListener("click", (event) => {
            window.setProject(event.currentTarget.getAttribute("project"));
        })
    );

    // this.ref("prev").addEventListener("click", () =>
    //     this.carousel.scrollPrev()
    // );
    // this.ref("next").addEventListener("click", () =>
    //     this.carousel.scrollNext()
    // );
});
