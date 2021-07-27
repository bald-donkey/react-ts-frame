let defaultState = [1, 2, 3]

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = defaultState, action) {
    return [...state]
}