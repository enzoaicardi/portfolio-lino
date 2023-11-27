define("me", function (datas, render) {
    datas.align = datas.align || "flex-start";

    render(/* html */ `
        <div class="ai-me">
            <x-if var="title">
                <h2 x-text="title">Title</h2>
            </x-if>
            <div class="ai-me-body" x-style="align-items:{align}">
                <x-if var="src">
                    <img x-src="src">
                </x-if>
                <p x-html="text">Description</p>
            </div>
        </div>
    `);
});
