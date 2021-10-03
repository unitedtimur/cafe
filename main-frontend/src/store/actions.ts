import { getInfoApi } from '../extra/api-request';

export const IS_BEGIN_PAGE = 'IS_BEGIN_PAGE';
export const SET_VOLUME = 'SET_VOLUME';
export const CHANGE_MUSIC_STATE = 'CHANGE_MUSIC_STATE';

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

export function changeMusicPlay() {
    return {
        type: CHANGE_MUSIC_STATE,
    }
}

export function getInfo() {
    return async (dispatch: any) => {
        const response = await getInfoApi();

        console.log(response)
    };
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
