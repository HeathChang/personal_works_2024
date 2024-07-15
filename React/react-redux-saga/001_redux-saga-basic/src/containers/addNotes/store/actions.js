// action is simply a js function with type and payload
import {GET_NOTES_VALUE, INIT_SAVE_NOTES_VALUE, SAVE_NOTES_VALUE_SUCCESSFUL, SAVE_NOTES_VALUE_FAILED} from "./actionTypes";

export const getNotesValue = (noteValue) => {
    console.log('getNotesValue @ action.js:: ', noteValue)
    return {
        type: GET_NOTES_VALUE,
        noteValue
    }
}

export const initSaveNotesValue = (noteValue) => {
    console.log('initSaveNotesValue @ action.js:: ', noteValue)
    return {
        type: INIT_SAVE_NOTES_VALUE,
        noteValue
    }
}

export const initSaveNotesValueSuccessful = (success) => {
    console.log('initSaveNotesValueSuccessful @ action.js:: ', success)
    return {
        type: SAVE_NOTES_VALUE_SUCCESSFUL,
        success
    }
}

export const initSaveNotsValueFailed = (failed) => {
    console.log('initSaveNotesValueSuccessful @ action.js:: ', failed)
    return {
        type: SAVE_NOTES_VALUE_FAILED,
        failed
    }
}