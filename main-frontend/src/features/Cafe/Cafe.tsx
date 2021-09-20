import React from 'react';
import { Tooltip } from 'antd/es';
import client1 from '../../images/client1.png';
import client2 from '../../images/client2.png';

const Cafe: React.FC = () => {
    return (
        <div className="cafe">
            <Tooltip title="fuck you fuck you fuck you fuck you fuck you fuck you" visible overlayStyle={{maxWidth: '200px'}}>
                <img
                    alt="client"
                    src={client2}
                    width="170"
                    height="250"
                    style={{position: 'absolute', top: '41.3vh', right: '40vw'}}
                />
            </Tooltip>
            <Tooltip title="fuck you fuck you fuck you fuck you fuck you fuck you" visible overlayStyle={{maxWidth: '200px'}}>
                <img
                    alt="client"
                    src={client1}
                    width="300"
                    height="250"
                    style={{position: 'absolute', top: '41.3vh', right: '15vw'}}
                />
            </Tooltip>
        </div>
    );
};

export default Cafe;
