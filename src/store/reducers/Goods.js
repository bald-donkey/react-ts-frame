let defaultState = ["洛杉矶·湖人"];

export default function (state = defaultState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'FETCH_PRODUCT':
            return [...payload, ...state]

        default:
            return [...state]
    }
}