import React from "react";

const Task = (props) => {
    const { task, setList, index, list } = props;

    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        });
    };

    const onChange = () =>{
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };

    return(
        <div className="container bg-secondary">
            <h4>{task.name}</h4>
            <div className="constainer">
                <label htmlFor="checkbox">Completed?</label>
                <input onChange={onChange} type="checkbox" name="" checked={task.isComplete}/>
                <button  className="btn btn-sm btn-danger" onClick={onClick}>X</button>
            </div>
        </div>
    );
};
export default Task;