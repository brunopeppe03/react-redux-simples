import { createStore, combineReducers } from 'redux'


const reducers = combineReducers({
    numuros: function(state, action) {
        return {
            min: 1,
            max: 10
        }
    },
    nomes: function(state, action) {
        return [
            'Ana',
            'Jurandir',
            'Clodoaldo'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig