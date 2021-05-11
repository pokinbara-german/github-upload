import {Api} from "../components/API/api";
import {stopSubmit} from "redux-form";

const SET_AUTH = 'SET-AUTH';

const initialStage = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialStage, action) => {
    switch (action.type) {

        case SET_AUTH:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setAuth = (id, email, login, isAuth) => ({type: SET_AUTH, data: {id, email, login, isAuth}});

export const getAuth = () => (dispatch) => {
    return Api.Auth.Me().then(data => {
        if (data === null) {
            return;
        }

        let {id, email, login} = data;
        dispatch(setAuth(id, email, login, true));
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    Api.Auth.Login(email, password, rememberMe).then(data => {
        if (data.error) {
            return dispatch(stopSubmit('login', {_error: data.error}));
        }

        dispatch(getAuth());
    });
}

export const logout = () => (dispatch) => {
    Api.Auth.Logout().then(data => {
        if (!data) {
            return;
        }

        dispatch(setAuth(null, null, null, false));
    });
}

export default authReducer;