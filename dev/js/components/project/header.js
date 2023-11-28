define("project-header", function (datas, render) {
    render(/* html */ `
        <header class="ai-project-header">
            <h1 x-text="title">Project Title</h1>
            <p x-text="date">Date</p>
            <a class="button" href="mailto:lino.aicardi@gmail.com" x-text="button">Contact Moi</a>
        </header>
    `);
});
