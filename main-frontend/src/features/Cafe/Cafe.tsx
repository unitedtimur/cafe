import React from 'react';
import { useDispatch } from 'react-redux';

import { Tooltip } from 'antd/es';

import { getInfo } from '../../store/actions';
import client1 from '../../images/client1.png';
import client2 from '../../images/client2.png';

const Cafe: React.FC = () => {
    const dispatch: any = useDispatch();

    return (
        <div className="cafe">
            <Tooltip
                title="Hello!"
                visible
                overlayStyle={{maxWidth: '200px'}}
                zIndex={2}
            >
                <img
                    alt="client"
                    onClick={() => dispatch(getInfo())}
                    src={client2}
                    width="170"
                    height="250"
                    style={{ position: 'absolute', top: '41.3vh', right: '40vw' }}
                />
            </Tooltip>
            <Tooltip
                title="Hi, mister!"
                visible
                overlayStyle={{maxWidth: '200px'}}
                zIndex={2}
            >
                <img
                    alt="client"
                    src={client1}
                    width="300"
                    height="250"
                    style={{ position: 'absolute', top: '41.3vh', right: '15vw' }}
                />
            </Tooltip>
        </div>
    );
};

export default Cafe;
