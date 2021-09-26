import { IS_BEGIN_PAGE, SET_VOLUME, CHANGE_MUSIC_STATE } from './actions';
import { IState } from '../intarfaces';

const initialState: IState = {
    isBeginPage: true,
    volume: 0.5,
    isMusicPlay: false,
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

        default: return state;
    }
}
