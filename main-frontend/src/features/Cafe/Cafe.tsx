import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';

import { Tooltip, Button } from 'antd/es';

import { IState } from '../../intarfaces';
import { clients } from '../Cafe/constants';
import { getDialog, changeClient } from '../../store/actions';
import { IPlayerPhrasesItem } from '../../intarfaces';
import { man, woman } from './constants';

const Cafe: React.FC = () => {
    const dispatch: any = useDispatch();
    const history = useHistory();

    const { dialogInfo, client } = useSelector((state: IState) => state);

    useEffect(() => {
        if(_.isNull(dialogInfo?.playerPhrasesArray)) {
            setTimeout(() => onChangeClient(), 5000);
        }
    }, [ dialogInfo?.playerPhrasesArray ]);

    useEffect(() => {
        if(_.isNull(dialogInfo)) {
            dispatch(getDialog(clients[client].dialogId));
        }
    }, []);

    const onChangeClient = () => {
        dispatch(changeClient());
        dispatch(getDialog(clients[client === man ? woman : man ].dialogId));
    };

    const onClickPhase = (item: IPlayerPhrasesItem) => {
        if (item.nextDialogId) {
            if (item.phrase === '<Угостить>') {
                dispatch(getDialog(item.nextDialogId));
                history.push('/kitchen');
            } else {
                dispatch(getDialog(item.nextDialogId));
            }
        } else {
            onChangeClient();
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
                    src={clients[client].src}
                    style={{ position: 'absolute', top: '41.3vh', right: '25vw', pointerEvents: 'none', height: '31.5vh', width: `${clients[client].width}vh` }}
                />
            </Tooltip>
        </div>
    );
};

export default Cafe;
