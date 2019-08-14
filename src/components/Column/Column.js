import React from 'react';
import Card from 'components/Card/Card';
import AddCard from 'components/AddCard/AddCard';
import uuid from 'uuid/v4';

import './Column.scss';

class Column extends React.Component {
    state = {
        cards: []
    }
    agregarCard = nombreCard => {
        const card = {
            id: uuid(),
            title: nombreCard,
            text: '',
            tags: []
        }
        const nuevasCards = this.state.cards.slice()
        nuevasCards.push(card)
        this.setState({ cardName: '', cards: nuevasCards })
    }
    render() {
        const { title } = this.props
        return (
            <div className='column'>
                <h1>{title}</h1>
                {
                    this.state.cards.map(card => <Card
                        key={card.id}
                        title={card.title}
                        text={card.text}
                        tags={card.tags} />)
                }
                <AddCard onAddCard={this.agregarCard} />
            </div>

        )

    }

}

export default Column;