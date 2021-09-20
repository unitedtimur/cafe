export const APIRequest = (url: string, params: any): Promise<any> => {
    return new Promise((resolve) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data));
    })
}
