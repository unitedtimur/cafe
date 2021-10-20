import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {Button, Slider, Tooltip, Typography} from 'antd/es';
import { SoundTwoTone, StopTwoTone } from '@ant-design/icons';

import { changeMusicPlay, setVolume } from '../../store/actions';
import { IState } from '../../intarfaces';

const { Title } = Typography;

const SelectVolume: React.FC = () => {
    const dispatch: any = useDispatch();
    const { volume, isMusicPlay } = useSelector((state: IState) => state);

    return (
        <>
            <Title level={2} style={{ textAlign: 'center' }}>Звук:</Title>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Slider
                    style={{ width: '300px', marginRight: '20px' }}
                    min={0}
                    max={1}
                    step={0.1}
                    onChange={(volume: number) => dispatch(setVolume(volume))}
                    value={volume}
                />
                <Tooltip title={`${isMusicPlay ? 'Выключить' : 'Включить'} звук`}>
                    <Button onClick={() => dispatch(changeMusicPlay())}
                    >
                        {isMusicPlay ? <StopTwoTone /> : <SoundTwoTone />}
                    </Button>
                </Tooltip>
            </div>
        </>
    )
};

export default SelectVolume;
