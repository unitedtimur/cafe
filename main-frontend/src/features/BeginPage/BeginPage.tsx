import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from 'antd/es';

import { changeIsBeginPage } from '../../store/actions';
import SelectVolume from '../SelectVolume';

const BeginPage: React.FC = () => {
    const dispatch: any = useDispatch();

    useEffect(() => {
        dispatch(changeIsBeginPage(true));
    }, []);

    return (
        <>
            <Button
                style={{ margin: '10% auto', display: 'block' }}
                type="primary"
                onClick={() => dispatch(changeIsBeginPage(false))}
            >
                <Link to="/cafe">Играть!</Link>
            </Button>
            <SelectVolume />
        </>
    );
};

export default BeginPage;
