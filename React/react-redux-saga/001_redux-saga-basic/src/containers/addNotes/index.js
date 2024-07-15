import './style.css';

const AddNotes = () => {
    const handleOnChange = (event) => {
        event.preventDefault();

    };

    return (
        <div className="add-new-note-wrapper">
            <h1>Add New Note</h1>
            <div className="form-wrapper">
                <input type="text" name="addTodo" placeholder="Enter todo" onChange={handleOnChange}/>
                <button>Add TODO</button>
            </div>
        </div>
    );
};

export default AddNotes;