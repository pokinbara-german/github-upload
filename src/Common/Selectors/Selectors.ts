import {appStateType} from '../../redux/reduxStore';

export function getUsersSelector (state: appStateType) {
    return state.usersPage.users;
}

export function getCurrentPageSelector (state: appStateType) {
    return state.usersPage.currentPage;
}

export function getPageSizeSelector (state: appStateType) {
    return state.usersPage.pageSize;
}

export function getIsUsersFetchingSelector (state: appStateType) {
    return state.usersPage.isUsersFetching;
}

export function getFollowingInProgressSelector (state: appStateType) {
    return state.usersPage.followingInProgress;
}

export function getUsersFilterSelector (state: appStateType) {
    return state.usersPage.filter;
}

export function getIsAuthSelector (state: appStateType) {
    return state.auth.isAuth;
}

export function getCaptchaUrlSelector (state: appStateType) {
    return state.auth.captchaUrl;
}

export function getLoginSelector (state: appStateType) {
    return state.auth.login;
}

export function getOwnerIdSelector (state: appStateType) {
    return state.auth.id;
}

export function getChatMessages (state: appStateType) {
    return state.chat.messages;
}

export function getIsChatConnectedSelector (state: appStateType) {
    return state.chat.isConnected;
}

export function getDialogsMessagesSelector (state: appStateType) {
    return state.dialogsPage.messageList;
}

export function getNewMessagesCountSelector (state: appStateType) {
    return state.dialogsPage.newMessagesCount;
}