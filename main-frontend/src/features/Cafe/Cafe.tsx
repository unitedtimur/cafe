import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';

import { Tooltip, Button } from 'antd/es';

import { IState } from '../../intarfaces';
import { getDialog } from '../../store/actions';
import client1 from '../../images/client1.png';
import client2 from '../../images/client2.png';
import { IPlayerPhrasesItem } from '../../intarfaces';

const Cafe: React.FC = () => {
    const dispatch: any = useDispatch();
    const history = useHistory();

    const dialogInfo = useSelector((state: IState) => state.dialogInfo);

    useEffect(() => {
        if(_.isNull(dialogInfo)) {
            dispatch(getDialog('9d73f2e6-151e-408f-82ef-dc2add75ad6c'));
        }
    }, []);

    const onClickPhase = (item: IPlayerPhrasesItem) => {
        if (item.nextDialogId) {
            if (item.phrase === '<Угостить>') {
                dispatch(getDialog(item.nextDialogId));
                history.push('/kitchen');
            } else {
                dispatch(getDialog(item.nextDialogId));
            }
        }
    };

    const dialogTooltip = (
        <>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>{dialogInfo?.phrase}</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                {
                    _.map(dialogInfo?.playerPhrasesArray, item => (
                        <Button
                            type="ghost"
                            className="answer-button"
                            key={item.nextDialogId}
                            onClick={() => onClickPhase(item)}
                        >
                            {item.phrase}
                        </Button>
                    ))
                }
            </div>
        </>
    );

    return (
        <div className="cafe">
            <Tooltip
                overlayStyle={{ maxWidth: '60vw' }}
                title={dialogTooltip}
                visible
                zIndex={2}
            >
                <img
                    alt="client"
                    src={client2}
                    width="170"
                    height="250"
                    style={{ position: 'absolute', top: '41.3vh', right: '40vw', pointerEvents: 'none' }}
                />
            </Tooltip>
            {/*<Tooltip*/}
            {/*    title="Hi, mister!"*/}
            {/*    visible*/}
            {/*    overlayStyle={{maxWidth: '200px'}}*/}
            {/*    zIndex={2}*/}
            {/*>*/}
            {/*    <img*/}
            {/*        alt="client"*/}
            {/*        src={client1}*/}
            {/*        width="300"*/}
            {/*        height="250"*/}
            {/*        style={{ position: 'absolute', top: '41.3vh', right: '15vw', pointerEvents: 'none' }}*/}
            {/*    />*/}
            {/*</Tooltip>*/}
        </div>
    );
};

export default Cafe;
