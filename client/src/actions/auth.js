import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });
        history.push('/');
    } catch (error) {
        console.log(error.response)
    }
};

export const signup = (fromData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(fromData);
        dispatch({ type: AUTH, data });
        history.push('/');
    } catch (error) {
        console.log(error.response)
    }
};
