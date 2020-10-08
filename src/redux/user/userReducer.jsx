const { FETCH_USERS_REQUEST, FETCH_USERS_SUCESS, FETCH_USERS_FAILURE } = require("./userTypes")

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCESS:
            return{
                loading: false,
                users: action.payload,
                error: '' 
            }
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer