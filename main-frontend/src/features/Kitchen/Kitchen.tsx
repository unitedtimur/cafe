import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';

import { Progress, message } from 'antd/es';

import { ingredients1 } from './constants';
import { IIngredient } from '../../intarfaces';

const Kitchen: React.FC = () => {
    const history = useHistory();

    const [ ingredients, setIngredients ] = useState<IIngredient[]>([ ...ingredients1 ]);
    const [ dish, setDish ] = useState<IIngredient[]>([]);
    const [ isShowHint, setSIsShowHint ] = useState<boolean>(false);
    const [ isValidDrop, setIsValidDrop ] = useState<boolean>(false);
    const [ dragItem, setDragItem ] = useState<IIngredient>({});
    const [ time, setTime ] = useState<number>(NaN);

    useEffect(() => {
        if (dish.length === 3) {
            // message.success('Блюдо готово!')
            fryFood();
        }
    }, [ dish.length ]);

    const onDragStart = (e: React.DragEvent, target: IIngredient) => {
        setSIsShowHint(true);
        setDragItem(target);
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsValidDrop(true);
    };

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const fryFood = (time: number = 0) => {
        setTime(time);
        if (time !== 5) {
            setTimeout(() => fryFood(time + 0.5), 500);
        }
    };

    const onDragEnd = (e: React.DragEvent, target: IIngredient) => {
        if (isValidDrop) {
            setIngredients(prevState => _.pull(prevState, target));
            setDish(prevState => [ ...prevState, dragItem ]);
        }
        setSIsShowHint(false);
        setIsValidDrop(false);
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
            <div
                onDrop={onDrop}
                onDragOver={onDragOver}
                className={'pan'}
                // + (dish.length === 3 ? ' is-clicked-pan' : '')
                onClick={dish.length === 3 ? () => history.replace('/cafe') : () => {}}
                style={{ border: isShowHint ? '2px dashed green' : 'none', cursor: dish.length === 3 ? 'pointer' : '' }}
            >
                {
                    dish.length === 3 && (
                        <Progress
                            strokeColor={{
                                from: '#108ee9',
                                to: '#87d068',
                            }}
                            percent={100 / 5 * time }
                            showInfo={false}
                        />
                    )
                }
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
    );
};

export default Kitchen;
