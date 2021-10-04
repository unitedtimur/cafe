

export function getInfoApi() {
    return new Promise((resolve) => {
        fetch('/dialogs/6ff49fbb-c801-41dd-8d82-ac59e5ca939a')
            .then(response => response.json())
            .then(data => resolve(data));
    })
}

export function getDialogApi(dialogId: string) {
    return new Promise((resolve) => {
        fetch(`/dialogs/${dialogId}`)
            .then(response => response.json())
            .then(data => resolve(data));
    })
}
