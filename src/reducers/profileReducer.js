import {Api} from "../components/API/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_PROFILE = 'SET-PROFILE';
const UPDATE_PROFILE = 'UPDATE-PROFILE';
const SET_STATUS = 'SET-STATUS';
const TOGGLE_STATUS_FETCHING = 'TOGGLE-STATUS-FETCHING';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

const initialState = {
    postsData: [
        {id: 1, text: 'Second post!', likes: 20},
        {id: 2, text: 'First post!', likes: 15},
    ],
    profile: null,
    statusFetching: false,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (action.newPost === undefined) {
                return state;
            }

            return {
                ...state,
                postsData: [...state.postsData, {id: 5, text: action.newPost, likes: 0}]
            };
        case DELETE_POST:
            return {
                ...state, postsData: state.postsData.filter(post => {
                    return post.id !== action.postId;
                })
            };
        case SET_PROFILE:
            return {...state, profile: action.profile};
        case UPDATE_PROFILE:
            return {...state, profile: {...state.profile, ...action.profile}};
        case SET_STATUS:
            return {...state, status: action.status};
        case TOGGLE_STATUS_FETCHING:
            return {...state, statusFetching: !state.statusFetching};
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}};
        default:
            return state;
    }
}

export const sendPost = (newPost) => ({type: ADD_POST, newPost});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
const setProfile = (profile) => ({type: SET_PROFILE, profile});
const updateProfile = (profile) => ({type: UPDATE_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
const toggleStatusFetching = () => ({type: TOGGLE_STATUS_FETCHING});
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getStatus = (userId) => async (dispatch) => {
    let id = userId || 16702;

    let data = await Api.Profile.getStatus(id);

    if (data === null) {
        return dispatch(setStatus(''));
    }

    dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    dispatch(toggleStatusFetching());

    let data = await Api.Profile.updateStatus(status);

    if (!data) {
        return;
    }

    dispatch(setStatus(status));
    dispatch(toggleStatusFetching());
}

export const getProfile = (userId) => async (dispatch) => {
    let id = userId || 16702;

    let data = await Api.Profile.getProfile(id);

    if (data === null) {
        return;
    }

    dispatch(setProfile(data));
}

export const savePhoto = (file) => async (dispatch) => {
    let data = await Api.Profile.savePhoto(file);

    if (data === null) {
        return;
    }

    dispatch(savePhotoSuccess(data));
}

export const saveProfile = (profile) => async (dispatch) => {
    let data = await Api.Profile.saveProfile(profile);

    if (!data) {
        return;
    }

    dispatch(updateProfile(profile));
}

export default profileReducer;