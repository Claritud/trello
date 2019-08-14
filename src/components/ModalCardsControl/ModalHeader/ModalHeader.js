import React from 'react';
import TitleWithIcon, { TITLE_SIZES } from '../../TitleWithIcon/TitleWithIcon';
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';


const ModalHeader = () => (
    <div className='modal-header'>
        <TitleWithIcon 
        size={ TITLE_SIZES.BIG }
        icono={ faBreadSlice }
        title={'partes de la pagina'}/>
    </div>
)

export default ModalHeader;