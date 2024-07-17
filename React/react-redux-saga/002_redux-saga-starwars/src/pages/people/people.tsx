import './people.style.css';
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {peopleActions} from "../../redux/slices/people/people.slice";

const People = () => {
    const dispatch = useDispatch();
    const [personNo, setPersonNo] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const {value} = event.target;
        setPersonNo(value);
    }


    const handleOnClickFindButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(peopleActions.fetchPeopleRequest(+personNo));
    }

    return (
        <div className="people-wrapper">
            <div className="people-input-wrapper">

                <input type="string" value={personNo} onChange={handleOnChange}/>
                <button onClick={handleOnClickFindButton}>FIND</button>
            </div>
            <div className="people-body-wrapper">
                <div className="people-body-find"></div>
                <div className="people-body-save"></div>
            </div>
            <div className="people-save-wrapper">
                <button>SAVE</button>
            </div>
        </div>
    )
}

export default People