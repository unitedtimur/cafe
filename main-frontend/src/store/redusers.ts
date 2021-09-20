import { IS_BEGIN_PAGE, SET_VOLUME } from './actions';
import { IState } from '../intarfaces';

const initialState: IState = {
    isBeginPage: true,
    volume: 30,
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

        default: return state;
    }
}
