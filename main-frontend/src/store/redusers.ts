import { IS_BEGIN_PAGE, SET_VOLUME, CHANGE_MUSIC_STATE, SET_DIALOG, SET_FRIED_FOOD, SET_CLIENT } from './actions';
import { IState } from '../intarfaces';
import { man, woman } from '../features/Cafe/constants';

const initialState: IState = {
    isBeginPage: false,
    volume: 0.5,
    isMusicPlay: false,
    dialogInfo: null,
    friedFood: false,
    client: 'man',
};

export default function reducer(state = initialState, action: any): IState {
    switch(action.type) {
        case SET_VOLUME:
            return {
                ...state,
                volume: action.volume,
            }

        case IS_BEGIN_PAGE:
            return {
                ...state,
                isBeginPage: action.value,
            }

        case CHANGE_MUSIC_STATE:
            return {
                ...state,
                isMusicPlay: !state.isMusicPlay,
            }

        case SET_DIALOG:
            return {
                ...state,
                dialogInfo: action.dialogInfo,
            }

        case SET_FRIED_FOOD:
            return {
                ...state,
                friedFood: action.friedFood,
            }

        case SET_CLIENT:
            return {
                ...state,
                client: state.client === woman ? man : woman,
            }

        default: return state;
    }
}
