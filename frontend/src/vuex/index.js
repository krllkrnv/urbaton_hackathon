import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        CITY_NAME: '',
        SHOW_EVENTS: true,
        SHOW_REQUESTS: false,
        SHOW_NEWS: false,
        SHOW_BRIEF: false,
    },
    mutations: {
        SET_CITY_NAME: (state, payload) => {
            state.CITY_NAME = payload
        },
        PRESS_EVENTS: (state) => {
            state.SHOW_EVENTS = true;
            state.SHOW_REQUESTS = false;
            state.SHOW_NEWS = false;
            state.SHOW_BRIEF = false;
        },
        PRESS_REQUESTS: (state) => {
            state.SHOW_EVENTS = false;
            state.SHOW_REQUESTS = true;
            state.SHOW_NEWS = false;
            state.SHOW_BRIEF = false;
        },
        PRESS_NEWS: (state) => {
            state.SHOW_EVENTS = false;
            state.SHOW_REQUESTS = false;
            state.SHOW_NEWS = true;
            state.SHOW_BRIEF = false;
        },
        PRESS_BRIEF: (state) => {
            state.SHOW_EVENTS = false;
            state.SHOW_REQUESTS = false;
            state.SHOW_NEWS = false;
            state.SHOW_BRIEF = true;
        }

    },
    getters: {
        GET_CITY_NAME: (state) => {
            return state.CITY_NAME
        },
        GET_SHOW_EVENTS: state => {
            return state.SHOW_EVENTS
        },
        GET_SHOW_REQUESTS: state => {
            return state.SHOW_REQUESTS
        },
        GET_SHOW_NEWS: state => {
            return state.SHOW_NEWS
        },
        GET_SHOW_BRIEF: state => {
            return state.SHOW_BRIEF
        }
    }
})