import './style.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getNotesValue,
    initSaveNotesValue,
    initSaveNotesValueSuccessful,
    initSaveNotsValueFailed
} from "./store/actions";
import {useNavigate} from "react-router-dom";


const AddNotes = () => {
    const [notesName, setNotesName] = useState('');
    const dispatch = useDispatch();
    const {success} = useSelector(state => state?.AddNotesReducer);
    const navigate = useNavigate();


    useEffect(() => {
        console.log(1, success)
        if (success) {
            setNotesName('');
            navigate('/');
            dispatch(initSaveNotesValueSuccessful(true));
            dispatch(initSaveNotsValueFailed(false));
        }
    }, [success]);


    const handleOnChange = (event) => {
        event.preventDefault();
        const {value} = event.target;
        setNotesName(value);
    };

    const handleOnClick = () => {
        // dispatch(getNotesValue(notesName));
        dispatch(initSaveNotesValue(notesName));
    };

    return (
        <div className="add-new-note-wrapper">
            <h1>Add New Note</h1>
            <div className="form-wrapper">
                <input type="text" name="addTodo" placeholder="Enter todo" onChange={handleOnChange} value={notesName}/>
                <button onClick={handleOnClick} disabled={notesName.trim() === ''}>Add Notes</button>
            </div>
        </div>
    );
};

export default AddNotes;