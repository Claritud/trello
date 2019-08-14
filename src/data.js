import uuid from 'uuid/v4'

const columns = [
    {
    id: uuid(),
    title: 'Lista de fracasos',
    cards: [
        {
        id: uuid(),
        title: 'Dormir bien',
        text: 'zzzzzzzzz',
        tags: [
            {
                id: uuid(),
                name: 'Maquetado',
                color: 'magenta'
            },
            {
                id: uuid(),
                name: 'Desarrollo',
                color: 'violet'
            }

        ]
    },{
        id: uuid(),
        title: 'Hacer ejercicio',
        text: 'chu chu chu',
        tags: []   
    }]
}, {
    id: uuid(),
    title: 'Lista de aciertos',
    cards: [
        {
        id: uuid(),
        title: 'Ser papa frita',
        text: 'ppppppppp',
        tags: []
    },{
        id: uuid(),
        title: 'Estar refrirada',
        text: 'achuuu',
        tags: []   
    }]
    
}]




export default columns;