import React from 'react';
import TitleWithIcon, { TITLE_SIZES } from 'components/TitleWithIcon/TitleWithIcon';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { faAlignLeft, faComments, faSkiingNordic } from '@fortawesome/free-solid-svg-icons';
import './ModalMain.scss';

class ModalMain extends React.Component {
    render() {
        const { onAddComment } = this.props
        return (
            <div className='modal-main'>
                <TitleWithIcon
                    size={TITLE_SIZES.MEDIUM}
                    icono={faAlignLeft}
                    title={'Descripción'} />
                <p>Añadir una descripción mas detallada...</p>
                <TitleWithIcon
                    size={TITLE_SIZES.MEDIUM}
                    icono={faComments}
                    title={'Añadir comentario'} />
                <Input
                    inputText='Escriba un comentario...' />
                <Button title='Guardar' />
                <div className='actividad-modal'>
                    <TitleWithIcon
                        size={TITLE_SIZES.MEDIUM}
                        icono={faSkiingNordic}
                        title={'Actividad'} />
                    <Button title='Mostrar detalles' />
                </div>
            </div>

        )
    }
}

export default ModalMain;
