const initialState = {
    favoritesCharacter: []
}

function reducer(state = initialState, action){
    switch (action.type) {

    case 'CHARACTERS/ADDTOFAV':
        if(!state.favoritesCharacter.some(character => character.id === action.payload.id)){
            return {...state, favoritesCharacter: [ ...state.favoritesCharacter, action.payload ]}
        }
        else
            return state;
    default: 
        return state;
    }
}

export default reducer