import React from 'react';
import Column from 'components/Column/Column';
import uuid from 'uuid/v4'
import AddColumn from 'components/AddColumn/AddColumn';
import './Dashboard.scss';

class Dashboard extends React.Component {
    state = {
        columns: []
    }
    agregarColumna = nombreColumna => {
        const columna = {
            id: uuid(),
            title: nombreColumna,
            cards: []
        }
        const nuevasColumnas = this.state.columns.slice()
        nuevasColumnas.push(columna)
        this.setState({ columnName: '', columns: nuevasColumnas}) 
    }
    render() {
        return (
            <div className='dashboard'>
                {
                    this.state.columns.map(column => <Column
                     //ponele que aca podria ir tipo un onAddCard={this.addCard} y que le pase la info del array
                        key={column.id}
                        title={column.title}
                        cards={column.cards} />)
                }
                <AddColumn onAddColumn={this.agregarColumna}/>
            </div>

        )
    }
}

export default Dashboard;