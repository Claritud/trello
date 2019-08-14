import React from 'react';
import ButtonMenu from 'components/ButtonMenu/ButtonMenu';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import TitleWithIcon, { TITLE_SIZES } from 'components/TitleWithIcon/TitleWithIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faBed, faSearch } from '@fortawesome/free-solid-svg-icons'
import './NavHeader.scss';

const NavHeader = () => (
    <div className='nav-header'>
        <div className='header'>
            <Button title={<TitleWithIcon
                size={TITLE_SIZES.SMALL}
                icono={faIgloo}
                title={''}
            />} />
            <Button title={<TitleWithIcon
                size={TITLE_SIZES.SMALL}
                icono={faBed}
                title={'Tableros'}
            />} />
            <div className='input-nav'>
                <Input inputText={<FontAwesomeIcon icon={faSearch} />} />
            </div>


        </div>
        <div className='board-header'>
            <div className='home-icon'>
                {/* <FontAwesomeIcon icon={faIgloo} /> */}
            </div>
            <ButtonMenu />
        </div>

    </div>
)

export default NavHeader;