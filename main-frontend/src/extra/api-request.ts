export function getDialogApi(dialogId: string) {
    return new Promise((resolve) => {
        fetch(`/dialogs/${dialogId}`)
            .then(response => response.json())
            .then(data => resolve(data));
    })
}

export function getServerConfirmApi(ids: string[]) {
    return new Promise((resolve) => {
        fetch(`/dish/${ids[0]}/${ids[1]}/${ids[2]}`)
            .then(response => response.json())
            .then(data => resolve(data.dishId));
    })
}
