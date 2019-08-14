import React from 'react';
import SideBar from 'components/SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import './ButtonMenu.scss';

class ButtonMenu extends React.Component {
    state = {
        sideBarVisible: false
    }
    toggleSideBar = () => {
        this.setState({ sideBarVisible: !this.state.sideBarVisible})
    }
    render() {
        
        return (
            <>
            <div className='button-menu' onClick={this.toggleSideBar} >
                <FontAwesomeIcon icon={ faBeer } />
            </div>
            {
                this.state.sideBarVisible && 
                <SideBar onCloseMenu={this.toggleSideBar}/>
            }
            </>
        )
    }
}

export default ButtonMenu;