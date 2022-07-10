const initialState = {
    isLoading: true
}

function reducer(state = initialState, action){
    switch (action.type) {

    case 'LOADING/SETLOADINGSTATE':
        return {...state, isLoading: action.payload}
    default: 
        return state;
    }
}

export default reducer