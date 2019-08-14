import React from 'react';
import ModalCardsControl from 'components/ModalCardsControl/ModalCardsControl';
import Tags, { TAG_TYPES } from 'components/Tags/Tags';
import uuid from 'uuid/v4';

import './Card.scss';

class Card extends React.Component {
    state = {
        cardModalVisible: false,
        comments: []
    }
    agregarCommentario = textComent => {
        const comment = {
            id: uuid(),
            texto: textComent
        }
        const nuevosComentarios = this.state.comments.slice()
        nuevosComentarios.push(comment)
        this.setState({ commentText: '', comments: nuevosComentarios })
    }
    toggleCardModal = () => {
        this.setState({ cardModalVisible: !this.state.cardModalVisible })
    }
    render() {
        const { title, text, tags, texto } = this.props
        return (
            <>
                <div className='card' onClick={this.toggleCardModal}>
                    <div className="card-tags-container">
                        {tags.map(tag =>
                            <Tags
                                key={tag.id}
                                type={TAG_TYPES.SMALL}
                                name={tag.name}
                                color={tag.color} />)}
                    </div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                {
                    this.state.cardModalVisible &&
                    <ModalCardsControl 
                    onClose={this.toggleCardModal} 
                    onAddComment={this.agregarCommentario}/>
                }
            </>
        )
    }
}

export default Card;