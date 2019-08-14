import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import '../Card/Card.scss';
import './AddCard.scss';

class AddCard extends React.Component {
    state = {
        visible: false,
        cardName: ''
    }
    toggle = () => {
        this.setState({ visible: !this.state.visible })
    }
    cambiarNombreCard = event => {
        this.setState({ cardName: event.target.value })
    }
    render() {
        const { onAddCard } = this.props
        return (
            <div className='add-card-container'>
                {
                    this.state.visible &&
                    <div>
                        <Input
                            onChange={this.cambiarNombreCard}
                            value={this.state.cardName}
                            inputText='Add title to this card...'>
                        </Input>
                        <div className='button-icon-container'>
                            <div onClick={() => {
                                onAddCard(this.state.cardName)
                                this.setState({ cardName: '' })
                                this.toggle()
                            }
                            }>
                                <Button title='Add card'></Button>
                            </div>
                            <FontAwesomeIcon icon={faTimes} onClick={this.toggle} className='close-icon' />
                        </div>

                    </div>
                }
                {
                    !this.state.visible &&
                    <div className='add-card' onClick={this.toggle}>
                        <FontAwesomeIcon icon={faPlus} />
                        <p>Add another Card</p>
                    </div>
                }
            </div>
        )
    }
}

export default AddCard;