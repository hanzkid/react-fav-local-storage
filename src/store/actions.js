const base_url = 'https://rickandmortyapi.com/api';

export function setQuerySearch(payload){
    return { type: 'CHARACTERS/SETQUERYSEARCH', payload }
}

export function setPage(payload){
    return { type: 'CHARACTERS/SETPAGE', payload }
}

export function setDetailCharacter(payload){
    return { type: 'CHARACTERS/SETDETAILCHARACTER', payload }
}

export function setListCharacter(payload){
    return { type: 'CHARACTERS/SETCHARACTERS', payload }
}

export function setInfoResp(payload){
    return { type: 'CHARACTERS/SETINFORESP', payload }
}

export function addToFav(payload){
    return { type: 'CHARACTERS/ADDTOFAV', payload }
}

export function setLoadingState(payload){
    return { type: 'LOADING/SETLOADINGSTATE', payload }
}

export function fetchCharacter(payload) {
    return async (dispatch) => {
        try {
            const resp = await fetch(base_url+payload)
            const data = await resp.json()
            dispatch(setListCharacter(data.results))
            dispatch(setInfoResp(data.info))
            dispatch(setLoadingState(false))
        } catch (error) {
        }
    }
}

export function fetchDetailCharacter(payload) {
    return async (dispatch) => {
        try {
            const resp = await fetch(base_url+payload)
            const data = await resp.json()
            dispatch(setDetailCharacter(data))
        } catch (error) {
            
        }
    }
}
