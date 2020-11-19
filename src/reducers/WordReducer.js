
const d = new Date();
const time = d.getTime();
const initialState = {
    now: 0,
    needWords: 7,
    style: '',
    fullName: '',
    timeNow: time,
    activeCharakter: 'п',
    allCharatkers: [],
    charatkers: [
        {
            name: 'П',
            id: 'п',
            hint: false,
            left: Math.floor(Math.random() * 100) + 1,
            opacity: Math.floor(Math.random() * (9 - 5)) + 5,
            top: Math.floor(Math.random() * 100) + 1,
            time: time,
            found: false,
        },
        {
            name: 'Р',
            id: 'р',
            left: Math.floor(Math.random() * 100) + 1,
            top: Math.floor(Math.random() * 100) + 1,
            opacity: Math.floor(Math.random() * (9 - 5)) + 5,
            found: false,
            hint: false,
        },
        {
            name: 'И',
            id: 'и',
            left: Math.floor(Math.random() * 100) + 1,
            top: Math.floor(Math.random() * 100) + 1,
            opacity: Math.floor(Math.random() * (9 - 5)) + 5,
            found: false,
            hint: false,
        },
        {
            name: 'В',
            id: 'в',
            left: Math.floor(Math.random() * 100) + 1,
            top: Math.floor(Math.random() * 100) + 1,
            opacity: Math.floor(Math.random() * (9 - 5)) + 5,
            found: false,
            hint: false,
        },
        {
            name: 'Е',
            id: 'е',
            left: Math.floor(Math.random() * 100) + 1,
            top: Math.floor(Math.random() * 100) + 1,
            opacity: Math.floor(Math.random() * (9 - 5)) + 5,
            found: false,
            hint: false,
        },
        {
            name: 'Т',
            id: 'т',
            left: Math.floor(Math.random() * 100) + 1,
            top: Math.floor(Math.random() * 100) + 1,
            opacity: Math.floor(Math.random() * (9 - 5)) + 5,
            found: false,
            hint: false,
        },
    ]
};


const CHANGE_ACTIVE_CHARACTER = 'CHANGE_ACTIVE_CHARACTER'
const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_STYLE = 'CHANGE_STYLE'
const SET_HINT_CHARACTER = 'SET_HINT_CHARACTER'
const SET_ALL_CHARACTERS = 'SET_ALL_CHARACTERS'
const SET_NEW_ELEMENTS = 'SET_NEW_ELEMENTS'

const changeActiveCharacter = (payload) => ({
    type: CHANGE_ACTIVE_CHARACTER,
    payload,
})
const changeName = (payload) => ({
    type: CHANGE_NAME,
    payload,
})
const changeStyle = (payload) => ({
    type: CHANGE_NAME,
    payload,
})
const setHintCharacter = (payload) => ({
    type: SET_HINT_CHARACTER,
    payload,
})
const setAllCharacters = (payload) => ({
    type: SET_ALL_CHARACTERS,
    payload,
})
const setNewElements = (payload) => ({
    type: SET_NEW_ELEMENTS,
    payload,
})

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_ACTIVE_CHARACTER:
            return {
                ...state,
                charatkers: state.charatkers.map((item) => ({
                    ...item,
                    time: item.id === state.activeCharakter ? (payload.startTime - item.time) : item.id === payload.id ? payload.startTime : item.time,
                    found: item.id === state.activeCharakter ? true : item.found
                })),
                activeCharakter: payload.id,
                timeNow: payload.startTime,
            }
        case SET_HINT_CHARACTER:
            return {
                ...state,
                charatkers: state.charatkers.map((item) => ({
                    ...item,
                    hint: item.id === state.activeCharakter ? true : item.hint
                })),
            }
        case CHANGE_NAME:
            return {
                ...state,
                fullName: payload
            }
        case CHANGE_STYLE:
            return {
                ...state,
                style: payload
            }
        case SET_ALL_CHARACTERS:
            return {
                ...state,
                allCharatkers: [...state.allCharatkers, ...payload]
            }
        case SET_NEW_ELEMENTS:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}

export const SET_NEW_CHARACTER = (id, startTime) => (dispatch, getState) => {
    dispatch(changeActiveCharacter({id, startTime}))
}
export const SET_NEW_NAME = (name) => (dispatch, getState) => {
    dispatch(changeName(name))
}
export const SET_NEW_STYLE = (name) => (dispatch, getState) => {
    dispatch(changeStyle(name))
}
export const SET_HINT = (id) => (dispatch, getState) => {
    dispatch(setHintCharacter(id))
}
export const SET_ALL = (data) => (dispatch, getState) => {
    dispatch(setAllCharacters(data))
}
export const SET_NEW = (data) => (dispatch, getState) => {
    dispatch(setNewElements(data))
}
