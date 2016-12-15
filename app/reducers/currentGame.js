const initialState = {
    isLoading: true,
    data: {
        gameTitle: 'Unknown Game Mode',
        participants: []
    },
    errorMessage: null
}

export default function currentGame (state=initialState, action) {

    switch (action.type) {
        case 'ENABLE_LOADING_CURRENTGAME':
            return Object.assign({}, state, {
                isLoading: true,
                data: initialState.data,
                errorMessage: null
            })
        case 'VALIDATED_SEARCH_CURRENTGAME':
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data,
                errorMessage: null
            })
        case 'CAUGHT_ERROR_CURRENTGAME':
            return Object.assign({}, state, {
                isLoading: false,
                data: initialState.data,
                errorMessage: action.errorMessage
            })
        default:
            return state;
    }
}
