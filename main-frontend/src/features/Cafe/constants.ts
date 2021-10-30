import client1 from '../../images/client1.png';
import client2 from '../../images/client2.png';
import { IClient } from '../../intarfaces';

export const man = 'man';
export const woman = 'woman';

export const clients: { [key: string]: IClient } = {
    man: {
        src: client1,
        width: 37,
        dialogId: '9d73f2e6-151e-408f-82ef-dc2add75ad6c',
    },
    woman: {
        src: client2,
        width: 20,
        dialogId: '6ff49fbb-c801-41dd-8d82-ac59e5ca939a',
    },
};
