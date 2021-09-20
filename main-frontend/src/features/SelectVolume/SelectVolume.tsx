import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Slider, Typography } from 'antd/es';

import { setVolume } from '../../store/actions';
import { IState } from '../../intarfaces';

const { Title } = Typography;

const SelectVolume: React.FC = () => {
    const dispatch: any = useDispatch();
    const volume = useSelector((state: IState) => state.volume);

    return (
        <>
            <Title level={2} style={{ textAlign: 'center' }}>Звук:</Title>
            <Slider
                style={{ width: '300px', margin: 'auto' }}
                min={0}
                max={100}
                onChange={(volume: number) => dispatch(setVolume(volume))}
                value={volume}
            />
        </>
    )
};

export default SelectVolume;
