
const d = new Date();
const time = d.getTime();
const initialState = {
    fullName: '',
    timeNow: time, 
    activeCharakter: 'п',
    charatkers: [
        {
            name: 'П',
            id: 'п',
            hint: false,
            left: Math.floor(Math.random() * 100) + 1,
            opacity: Math.floor(Math.random() * 10) + 1, 
            top: Math.floor(Math.random() * 100) + 1,
            time: time,
            found: false,
        },
        {
            name: 'Р',
            id: 'р',
            left: Math.floor(Math.random() * 100) + 1,
            top: Math.floor(Math.random() * 100) + 1,
            opacity: Math.floor(Math.random() * 10) + 1, 
            found: false,
            hint: false,
        },
        {
            name: 'И',
            id: 'и',
            left: Math.floor(Math.random() * 100) + 1,
            top: Math.floor(Math.random() * 100) + 1,
            opacity: Math.floor(Math.random() * 10) + 1, 
            found: false,
            hint: false,
        },
        {
            name: 'В',
            id: 'в',
            left: Math.floor(Math.random() * 100) + 1,
            top: Math.floor(Math.random() * 100) + 1,
            opacity: Math.floor(Math.random() * 10) + 1, 
            found: false,
            hint: false,
        },
        {
            name: 'Е',
            id: 'е',
            left: Math.floor(Math.random() * 100) + 1,
            top: Math.floor(Math.random() * 100) + 1,
            opacity: Math.floor(Math.random() * 10) + 1, 
            found: false,
            hint: false,
        },
        {
            name: 'Т',
            id: 'т',
            left: Math.floor(Math.random() * 100) + 1,
            top: Math.floor(Math.random() * 100) + 1,
            opacity: Math.floor(Math.random() * 10) + 1, 
            found: false,
            hint: false,
        },
    ]
};


const CHANGE_ACTIVE_CHARACTER = 'CHANGE_ACTIVE_CHARACTER'
const CHANGE_NAME = 'CHANGE_NAME'
const SET_HINT_CHARACTER = 'SET_HINT_CHARACTER'

const changeActiveCharacter = (payload) => ({
    type: CHANGE_ACTIVE_CHARACTER,
    payload,
})
const changeName = (payload) => ({
    type: CHANGE_NAME,
    payload,
})
const setHintCharacter = (payload) => ({
    type: SET_HINT_CHARACTER,
    payload,
})

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_ACTIVE_CHARACTER:
            const d = new Date();
            const startTime = d.getTime();
            return {
                ...state,
                charatkers: state.charatkers.map((item) => ({
                    ...item,
                    time: item.id === state.activeCharakter ? (startTime - item.time) : item.id === payload ? startTime : item.time,
                    found: item.id === state.activeCharakter ? true : item.found 
                })),
                activeCharakter: payload, 
                timeNow: startTime,
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
        default:
            return state
    }
}

export const SET_NEW_CHARACTER = (id) => (dispatch, getState) => {
   dispatch(changeActiveCharacter(id)) 
}
export const SET_NEW_NAME = (name) => (dispatch, getState) => {
    dispatch(changeName(name)) 
}
export const SET_HINT = (id) => (dispatch, getState) => {
    dispatch(setHintCharacter(id)) 
}
