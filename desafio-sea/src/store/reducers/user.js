import { 
    CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAIL,
    USER_LIST_START, USER_LIST_SUCCESS, USER_LIST_FAIL 
} from '../../store/actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    
    users: [],
    error: null,
    loading: false
};

const getUserListStart = (state, action) => {
    
    return updateObject(state, {
    
        error: null,
        loading: true
    });
};

const getUserListSuccess = (state, action) => {
    
    return updateObject(state, {
    
        users: action.users,
        error: null,
        loading: false
    });
};

const getUserListFail = (state, action) => {
    
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const createUserStart = (state, action) => {
    
    return updateObject(state, {
    
        error: null,
        loading: true
    });
};

const createUserSuccess = (state, action) => {
    
    return updateObject(state, {
    
        error: null,
        loading: false
    });
};

const createUserFail = (state, action) => {
    
    return updateObject(state, {
    
        error: action.error,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case USER_LIST_START:
            return getUserListStart(state, action);
        case USER_LIST_SUCCESS:
            return getUserListSuccess(state, action);
        case USER_LIST_FAIL:
            return getUserListFail(state, action);
        case CREATE_USER_START:
            return createUserStart(state, action);
        case CREATE_USER_SUCCESS:
            return createUserSuccess(state, action);
        case CREATE_USER_FAIL:
            return createUserFail(state, action);
        default:
            return state;
    }
};
  
export default reducer;