export interface IState {
    isBeginPage: boolean,
    volume: number,
    isMusicPlay: boolean,
    dialogInfo: IDialogInfo | null,
    friedFood: boolean,
    client: string,
}

export interface IIngredient {
    id?: string,
    src?: string,
    name?: string,
    width?: number,
    height?: number,
    smallWidth?: number,
    smallHeight?: number,
}

export interface IDialogInfo {
    characterId: string,
    dialogId: string,
    phrase: string,
    playerPhrasesArray: IPlayerPhrasesItem[],
}

export interface IPlayerPhrasesItem {
    nextDialogId: string | null,
    phrase: string,
}

export interface IClient {
    width: number,
    src: string,
    dialogId: string,
}
