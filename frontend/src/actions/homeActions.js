import {
    HOME_LOAD_REQUEST,
    HOME_LOAD_SUCCESS,
    HOME_LOAD_FAIL
} from '../constants/homeConstants';
import Axios from 'axios';
import { sampleHome } from '../temp';

const API_URL = process.env.REACT_APP_API_URL + "";

const loadHome = () => async (dispatch) => {
    try {
        dispatch({ type: HOME_LOAD_REQUEST });
        const { data } = 
        { data: sampleHome };
        // await Axios.get(API_URL + '/home');
        dispatch({ type: HOME_LOAD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: HOME_LOAD_FAIL, payload: error.message });
    }
};

export {
    loadHome
};
