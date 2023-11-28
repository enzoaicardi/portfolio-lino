define("project-row", function (datas, render) {
    render(/* html */ `
        <div class="ai-project-row">
            <img x-src="image">
            <p x-text="text">Description</p>
        </div>
    `);
});
