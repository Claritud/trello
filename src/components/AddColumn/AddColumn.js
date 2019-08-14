import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import './AddColumn.scss';

class AddColumn extends React.Component {
    state = {
        visible: false,
        columnName: ''
    }
    toggle = () => {
        this.setState({ visible: !this.state.visible })
    }
    cambiarNombreColumna = event => {
        this.setState({ columnName: event.target.value})
    }
    render() {
        const { onAddColumn } = this.props
        return (
            <>
                {
                    this.state.visible &&
                    <div className='addColumn'>
                        <Input
                            onChange={this.cambiarNombreColumna}
                            value={this.state.columnName}
                            inputText='Add title to this list...'>        
                        </Input>
                        <div className='button-icon-container'>
                            <div onClick={() => {
                                onAddColumn(this.state.columnName)
                                this.setState({columnName: ''})
                                this.toggle()}
                            }>
                            <Button title='Add list'></Button>
                            </div>
                            <FontAwesomeIcon icon={faTimes} onClick={this.toggle} className='close-icon' />
                        </div>
                    </div>
                }
                {
                    !this.state.visible &&
                    <div className='add-list' onClick={this.toggle}>
                        <FontAwesomeIcon icon={faPlus} />
                        <p>Add list</p>
                    </div>
                }

            </>

        )
    }
}

export default AddColumn;