define("input", function (datas, render) {
    datas.type = datas.type || "text";

    render(/* html */ `
        <div class="ai-input">
            <x-if var="label">
                <label x-text="label">
                    Label
                </label>
                <div class="triangle"></div>
            </x-if>
            <div class="ai-input-body">
                <input x-type="type" x-placeholder="placeholder">
                <x-if var="button">
                    <a class="button" x-href="link" x-text="button"></a>
                </x-if>
            </div>
        </div>
    `);
});
