import {MAIN_URL} from './urls';

async function getMenu(onSuccessCallback, onErrorCallback) {
    fetch(MAIN_URL)
    .then(response => response.json())
    .then(onSuccessCallback)
    .catch(onErrorCallback);
}

export { getMenu }