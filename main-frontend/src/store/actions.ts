export const IS_BEGIN_PAGE = 'IS_BEGIN_PAGE';
export const SET_VOLUME = 'SET_VOLUME';

export function setVolume(volume: number) {
    return {
        type: SET_VOLUME,
        volume,
    };
}

export function changeIsBeginPage(value: boolean) {
    return {
        type: IS_BEGIN_PAGE,
        value,
    }
}

// export function getPlayerAction(playerName: string) {
//     return async (dispatch: any) => {
//         const response = await getPlayersFromAPI(playerName);
//
//         dispatch({
//             type: SET_PLAYERS,
//             nickname: response.nickname,
//             accountId: response.account_id,
//         })
//     };
// }
