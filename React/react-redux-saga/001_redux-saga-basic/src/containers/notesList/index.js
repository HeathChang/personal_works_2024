import './style.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FETCHING_GET_LIST_DATA, INIT_GET_LIST_DATA} from "./store/actionTypes";
import {fetchingGetListDataFailed, initGetListData} from "./store/actions";


const NotesList = () => {
    const dispatch = useDispatch();
    const {notesList, isNotesDataFetching, isNotesDataFetchingFailed} = useSelector(state => state?.NotesListReducer);

    // DESC: Action Creator && Fetch Data
    useEffect(() => {
        dispatch(initGetListData());
    }, []);


    if (isNotesDataFetching) {
        return (<div> Notes Data is Loading.. Please Wait</div>);
    } else if (isNotesDataFetchingFailed) {
        return (<div> Failed to fetch Data</div>);
    } else {
        return (
            <div className="notes-list-wrapper">
                <h1> Notes List </h1>

                <ul>
                    {notesList && notesList.map(item => {
                        return (
                            <li key={item?.id}> {item.name}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
};

export default NotesList;