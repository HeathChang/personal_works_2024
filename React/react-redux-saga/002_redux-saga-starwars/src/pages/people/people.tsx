import './people.style.css';
import React, {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {peopleActions} from "../../redux/slices/people/people.slice";
import {RootState} from "../../redux/store";

const People = () => {
    const dispatch = useDispatch();
    const {person, isLoading, isError, peopleList} = useSelector((state: RootState) => state.people);
    const [personNo, setPersonNo] = useState('');

    const isPageReady = useMemo(() => {
        return person && Object.entries(person)?.length > 0
    }, [person])


    useEffect(() => {
        dispatch(peopleActions.initSavedPeopleRequest());
    }, [peopleList, dispatch]);


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const {value} = event.target;
        setPersonNo(value);
    }

    const handleOnClickFind = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(peopleActions.fetchPeopleRequest(+personNo));
    }

    const handleOnClickSave = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (person && Object.entries(person)?.length > 0) {
            dispatch(peopleActions.savePeopleRequest(person))
        }
    }

    // if (isLoading) return <div className="people-body-find">로딩 중..</div>
    // if (isError) return <div style={{'position': 'absolute', 'top': '50%', 'left': '50%'}}>에러 발생..</div>


    return (
        <div className="people-wrapper">
            <div className="people-input-wrapper">

                <input type="string" value={personNo} onChange={handleOnChange}/>
                <button onClick={handleOnClickFind}>find</button>
            </div>
            <div className="people-body-wrapper">
                <div className="people-body-find">
                    {isPageReady
                        ?
                        <div>
                            <h3>name: {person?.name}</h3>
                            <h5>gender: {person?.gender}</h5>
                            <h5>birth_year: {person?.birth_year}</h5>
                            <h5>height: {person?.height}</h5>
                            <h5>mass: {person?.mass}</h5>
                        </div>
                        : null
                    }
                </div>
                <div className="people-body-save">
                    <ul>
                        {peopleList && peopleList.map((item, key) => {
                            return (
                                <li key={key}>
                                    <h5>name: {item.name}</h5>
                                    <h5>gender: {item.gender}</h5>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="people-save-wrapper">
                <button onClick={handleOnClickSave} disabled={!isPageReady}>save</button>
            </div>
        </div>
    )
}

export default People