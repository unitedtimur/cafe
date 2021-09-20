import React from 'react';
import pan from '../../images/pan.png';
import carrot from '../../images/carrot.png';

const Kitchen: React.FC = () => {

    const onDragStart = (e: any)=> {
        console.log('drag')
    }

    const onDrop = (e: any) => {
        e.preventDefault();
        console.log('drop')
    }

    const onDragOver = (e: any) => {
        e.preventDefault();
        console.log('over')
    }

    return (
        <div className="kitchen">
            <img
                alt="pan"
                src={pan}
                width="200"
                height="70"
                onDrop={onDrop}
                draggable
                onDragOver={onDragOver}
                onDragStart={onDragStart}
                style={{position: 'absolute', top: '64vh', right: '20vw'}} />
            <img
                alt="carrot"
                src={carrot}
                width="90"
                height="70"
                draggable
                onDragOver={onDragOver}
                onDragStart={onDragStart}
                className="ingredient"
                style={{position: 'absolute', top: '64vh', right: '10vw', cursor: "pointer"}}
            />
        </div>
    );
};

export default Kitchen;
