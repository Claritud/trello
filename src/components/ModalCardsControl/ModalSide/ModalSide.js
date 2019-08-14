import React from 'react';
import Button from 'components/Button/Button';
import TitleWithIcon, { TITLE_SIZES } from 'components/TitleWithIcon/TitleWithIcon';
import { faUserSecret, faTag, faPaperclip, faStopwatch, faClipboardCheck, faPaste } from '@fortawesome/free-solid-svg-icons';
import { faPaw, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight, faPaperPlane, faArchive, faShareAlt } from '@fortawesome/free-solid-svg-icons';

import './ModalSide.scss';



const ModalSide = () => (
    <div className='modal-side'>
        <p>AÑADIR A LA TARJETA</p>
        <Button title={<TitleWithIcon
            size={TITLE_SIZES.SMALL}
            icono={faUserSecret}
            title={'Miembros'}
        />} />
        <Button title={<TitleWithIcon
            size={TITLE_SIZES.SMALL}
            icono={faTag}
            title={'Etiquetas'}
        />} />
        <Button title={<TitleWithIcon
            size={TITLE_SIZES.SMALL}
            icono={faClipboardCheck}
            title={'Checklist'}
        />} />
        <Button title={<TitleWithIcon
            size={TITLE_SIZES.SMALL}
            icono={faStopwatch}
            title={'Vencimiento'}
        />} />
        <Button title={<TitleWithIcon
            size={TITLE_SIZES.SMALL}
            icono={faPaperclip}
            title={'Adjunto'}
        />} />
        <p>POWER-UPS</p>
        <Button title={<TitleWithIcon
            size={TITLE_SIZES.SMALL}
            icono={faPaw}
            title={'GitHub'}
        />} />
        <Button title={<TitleWithIcon
            size={TITLE_SIZES.SMALL}
            icono={faPlus}
            title={'Conseguir mas ...'}
        />} />
        <p>ACCIONES</p>
        <Button title={<TitleWithIcon
            size={TITLE_SIZES.SMALL}
            icono={faArrowRight}
            title={'Mover'}
        />} />
        <Button title={<TitleWithIcon
            size={TITLE_SIZES.SMALL}
            icono={faPaste}
            title={'Copiar'}
        />} />
        <Button title={<TitleWithIcon
            size={TITLE_SIZES.SMALL}
            icono={faPaperPlane}
            title={'Seguir'}
        />} />
        <Button title={<TitleWithIcon
            size={TITLE_SIZES.SMALL}
            icono={faArchive}
            title={'Archivar'}
        />} />
        <Button title={<TitleWithIcon
            size={TITLE_SIZES.SMALL}
            icono={faShareAlt}
            title={'Compartir'}
        />} />
    </div>
)

export default ModalSide;