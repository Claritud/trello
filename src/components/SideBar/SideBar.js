import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Tags, { TAG_TYPES } from 'components/Tags/Tags';
import './SideBar.scss';
import tags from 'tags';

class SideBar extends React.Component {
    render() {
        const { onCloseMenu } = this.props
        return (
            <div className='sideBar'>
                <div className='title-menu'>
                    <p>MENU</p>
                    <FontAwesomeIcon icon={faTimes} onClick={ onCloseMenu } />
                </div>
                <div>
                    {
                        tags.map(tag => <Tags
                            type={TAG_TYPES.BIG}
                            key={tag.id}
                            name={tag.name}
                            color={tag.color} />)
                    }
                </div>
            </div>
        )
    }
}

export default SideBar;