import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';

import { Progress, message, Button } from 'antd/es';

import { ingredients1, statuses } from './constants';
import { setFriedFood, getServerConfirm } from '../../store/actions';
import { IIngredient, IState } from '../../intarfaces';

const Kitchen: React.FC = () => {
    const history = useHistory();
    const dispatch: any = useDispatch();

    // const friedFood = useSelector((state: IState) => state.friedFood);

    const [ ingredients, setIngredients ] = useState<IIngredient[]>([ ...ingredients1 ]);
    const [ dish, setDish ] = useState<IIngredient[]>([]);
    const [ isShowHint, setIsShowHint ] = useState<boolean>(false);
    const [ isValidDrop, setIsValidDrop ] = useState<boolean>(false);
    const [ dragItem, setDragItem ] = useState<IIngredient>({});
    const [ time, setTime ] = useState<number>(NaN);
    const [ statusDish, setStatusDish ] = useState<string>(statuses.error);

    useEffect(() => {
        if (dish.length === 3) {
            setTime(0);
            setStatusDish(statuses.cooking);
            // // @ts-ignore
            // dispatch(getServerConfirm(_.map(dish, item => item.id)))
            //     .then((res: boolean) => {
            //         if (res) {
            //             setTime(0);
            //             setStatusDish(statuses.cooking);
            //         } else {
            //             setIngredients([ ...ingredients1 ]);
            //             setDish([]);
            //         }
            //     });
        }
    }, [ dish.length ]);

    useEffect(() => {
        time < 10 && statusDish === statuses.cooking && setTimeout(() => setTime(time + 0.5), 500);
        if(time === 10) {
            setStatusDish(statuses.error);
            message.warning('Пережарили :(');
        }
    }, [ time ]);

    const onDragStart = (e: React.DragEvent, target: IIngredient) => {
        setIsShowHint(true);
        setDragItem(target);
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsValidDrop(true);
    };

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const onDragEnd = (e: React.DragEvent, target: IIngredient) => {
        if (isValidDrop) {
            setIngredients(prevState => _.pull(prevState, target));
            setDish(prevState => [ ...prevState, dragItem ]);
        }
        setIsShowHint(false);
        setIsValidDrop(false);
    };

    const onClickCompleted = () => {
        if (time <= 5 || time >= 7) {
            setIngredients([ ...ingredients1 ]);
            setDish([]);
            setStatusDish(statuses.error);
            if (time <= 6) {
                message.warning('Недожарили :(');
            } else {
                message.warning('Пережарили :(');
            }
        } else {
            message.success('Блюдо готово!');
            setStatusDish(statuses.success);
            // dispatch(setFriedFood());
        }
    };

    return (
        <div className="kitchen">
            <div className="ingredients-container">
                {_.map(ingredients, (value, index) => (
                    <img
                        style={index === 1 ? { alignSelf: 'flex-start' } : {}}
                        key={value.id}
                        alt={value.id}
                        src={value.src}
                        width={value.width}
                        height={value.height}
                        draggable
                        onDragEnd={e => onDragEnd(e, value)}
                        onDragOver={onDragOver}
                        onDragStart={e => onDragStart(e, value)}
                        className="ingredient"
                    />
                ))}
            </div>
            <div className="pan-container">
                {
                    statusDish === statuses.cooking && (
                        <>
                            <Button
                                style={{ display: 'block', margin: 'auto' }}
                                danger={time <= 5 || time >= 7}
                                onClick={onClickCompleted}>Готово!</Button>
                            <Progress
                                status={time <= 5 || time >= 7 ? 'exception' : 'success'}
                                percent={100 / 10 * time }
                                showInfo={false}
                            />
                        </>
                    )
                }
                <div
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    className={'pan'}
                    // + (dish.length === 3 ? ' is-clicked-pan' : '')
                    onClick={statusDish === statuses.success ? () => history.replace('/cafe') : () => {}}
                    style={{ border: isShowHint ? '2px dashed green' : 'none', cursor: statusDish === statuses.success ? 'pointer' : '' }}
                >
                    <div className="pan-inside">
                        {_.map(dish, value => (
                            <img
                                key={value.id}
                                alt={value.id}
                                src={value.src}
                                width={value.smallWidth}
                                height={value.smallHeight}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kitchen;
