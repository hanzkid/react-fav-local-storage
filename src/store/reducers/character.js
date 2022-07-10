const initialState = {
    character: {},
    listCharacter: [],
    infoResp: {},
    querySearch: '',
    page: 1
}

function reducer(state = initialState, action){

    switch (action.type) {
        case 'CHARACTERS/SETDETAILCHARACTER':
            return {...state, character: action.payload};
        case 'CHARACTERS/SETCHARACTERS':
            return {...state, listCharacter: action.payload};
        case 'CHARACTERS/SETINFORESP':
            return {...state, infoResp: action.payload};
        case 'CHARACTERS/SETQUERYSEARCH':
            return {...state, querySearch: action.payload};
        case 'CHARACTERS/SETPAGE':
            return {...state, page: action.payload};
        default: 
            return state;
    }

}

export default reducer;