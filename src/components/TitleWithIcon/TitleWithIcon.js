import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TitleWithIcon.scss';

export const TITLE_SIZES = {
    SMALL: 'title-small',
    BIG: 'title-big',
    MEDIUM: 'title-medium'
}

const TitleWithIcon = ({icono, title, size}) => (
    <div className='title-with-icon'>
        <div className={size}>
        <FontAwesomeIcon icon={icono}/>
        <p >{title}</p>
        </div>      
    </div>
)

export default TitleWithIcon;