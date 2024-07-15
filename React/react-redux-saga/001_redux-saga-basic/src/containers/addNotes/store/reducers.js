import {INIT_SAVE_NOTES_VALUE, SAVE_NOTES_VALUE_SUCCESSFUL, SAVE_NOTES_VALUE_FAILED} from "./actionTypes";

const initialState = {
    success: false,
    failed: false
}

const AddNotesReducer = (state=initialState, action) => {
    switch (action.type) {
        case INIT_SAVE_NOTES_VALUE:
            return {
                ...state,
                flag: true
            }
        case SAVE_NOTES_VALUE_SUCCESSFUL:
            return {
                ...state,
                success: action.success
            }
        case SAVE_NOTES_VALUE_FAILED:
            return {
                ...state,
                failed: action.failed
            }
        default:
            return state
    }
}

export default AddNotesReducer;