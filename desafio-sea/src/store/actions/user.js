import axios from 'axios';
import { 
    CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAIL,
    USER_LIST_START, USER_LIST_SUCCESS, USER_LIST_FAIL
} from './actionTypes';

const createUserStart = () => {
    
    return {
        type: CREATE_USER_START
    };
};
  
const createUserSuccess = user => {
    
    return {
        type: CREATE_USER_SUCCESS,
        user
    };
};
  
const createUserFail = error => {
    
    return {
    
        type: CREATE_USER_FAIL,
        error: error
    };
};

const getUserListStart = () => {
    
    return {
        type: USER_LIST_START
    };
};

const getUserListSuccess = users => {
    
    return {
    
        type: USER_LIST_SUCCESS,
        users
    };
};

const getUserListFail = error => {
    
    return {
    
        type: USER_LIST_FAIL,
        error: error
    };
};

export const getUsers = () => {
    
    return dispatch => {
    
        dispatch(getUserListStart());
        axios.get('http://localhost:3001/users/')
        .then(res => {
            const users = res.data;
            dispatch(getUserListSuccess(users));
        })
        .catch(err => {
            dispatch(getUserListFail(err));
        });
    };
};

export const createUser = (user) => {

    return dispatch => {
    
        dispatch(createUserStart());
        axios.post('http://localhost:3001/users/', user)
        .then(res => {
            dispatch(createUserSuccess(res));
        })
        .catch(err => {
            dispatch(createUserFail(err));
        });
    };
};