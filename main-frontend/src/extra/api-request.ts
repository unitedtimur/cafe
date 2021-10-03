

export function getInfoApi() {
    return new Promise((resolve) => {
        fetch('/dialogs/christian/dialog/d433b653-60da-4c27-b47c-0b76fe4d20fa')
            .then(response => response.json())
            .then(data => resolve(data));
    })
}
