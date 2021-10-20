import pastaSrc from '../../images/pasta.png';
import creamSrc from  '../../images/cream.png';
import mashroomsSrc from '../../images/mashrooms.png';
import potatoesSrc from '../../images/potatoes.png';
import spicesSrc from '../../images/spices.png';
import meatSrc from '../../images/meat.png';
import sauceSrc from  '../../images/sauce.png';
import { IIngredient } from '../../intarfaces';

export const ingredients1: IIngredient[] = [
    {
        id: '905e58e1-7c36-41fc-b431-a018f65808ec',
        src: pastaSrc,
        name: 'Лапша',
        width: 90,
        height: 70,
        smallWidth: 45,
        smallHeight: 35,
    },
    {
        id: 'cf7f2847-922e-4d9d-a429-baadc2861f2b',
        src: creamSrc,
        name: 'Сливки',
        width: 90,
        height: 70,
        smallWidth: 45,
        smallHeight: 35,
    },
    {
        id: '1c712b22-0e00-4221-aed9-a9bb48bcd3f4',
        src: mashroomsSrc,
        width: 110,
        name: 'Грибы',
        height: 70,
        smallWidth: 55,
        smallHeight: 35,
    },
    {
        id: '3e3c447b-2150-4ade-a88e-7933634cd656',
        src: meatSrc,
        width: 110,
        name: 'Мясо',
        height: 70,
        smallWidth: 55,
        smallHeight: 35,
    },
    {
        id: 'b1dc80ea-c6e5-44ae-9d69-a47cb982ca4a',
        src: spicesSrc,
        width: 110,
        name: 'Специи',
        height: 70,
        smallWidth: 55,
        smallHeight: 35,
    },
    {
        id: '98a66507-6c0f-4dd1-880a-1599d8dbbf75',
        src: sauceSrc,
        name: 'Соус',
        width: 110,
        height: 70,
        smallWidth: 55,
        smallHeight: 35,
    },
    {
        id: 'bcc2e20f-35c6-40ac-bc71-a0361ee0f60c',
        src: potatoesSrc,
        name: 'Картошка',
        width: 90,
        height: 90,
        smallWidth: 50,
        smallHeight: 50,
    },
];

export const statuses = {
    success: 'success',
    cooking: 'cooking',
    error: 'error',
};

