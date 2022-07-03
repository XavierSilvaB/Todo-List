import React, { useState } from "react";

import Logo4Geeks from "../../img/Logo4geeks.png";
const ToDo = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const handlertask = (event) => {
    setTask(event.target.value);
  };
  const handlerKeyPress = (event) => {
    // event.preventDefault();
    if (event.key == "Enter" && task != "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };
  const handlerButtomDelete = (indexid) =>
    setTaskList(taskList.filter((tarea, index) => index != indexid));
  return (
    
    <div className="row bg-black">
       <div className=" data text-center mb-4">
      <h1 className=" title-principal text-center mt-1 text-white py-2 px-0">TODO LIST</h1>
      <div className=" d-flex justify-content-between py-2 px-2">
        <h3 className="title-principal d-flex text-white col-4 d-flex justify-content-center align-items-center rounded-3 border border-white"> 4Geeks Academy / Xavier Silva</h3>  
        <p>
          <img src={Logo4Geeks} className=" col-6 rounded-1 position-relative mt-0" />
        </p>
      </div>
    </div>
      <div className="col-3"></div>
      <div className="col-6 position-relative mt--50">
        <div className="Card" id="card">
          <div className="form-floating mb-3">
            <input
              onChange={handlertask}
              value={task}
              onKeyDown={handlerKeyPress}
              type="text"
              className="form-control bg-black mb-2"
              id="floatingInput "
              placeholder="Tarea por hacer"
              style={{ color: 'white'}}
            />
            <label htmlFor="floatingInput">Tarea por hacer</label>
            <div className="task"></div>
            {taskList.map((tarea, i) => {
              return (
                <span
                  className="d-flex justify-content-between py-2 px-3 bg-dark text-white my-1 rounded-1 border border-info"
                  key={`s-${i}`}>
                  <h2 key={i}>{tarea}</h2>{" "}
                  <i className="fa-regular fa-trash-can mt-3 ms-4 position-relative me-3"
                    key={`p-${i}`}
                    onClick={() => {
                      handlerButtomDelete(i);}}>
                  </i>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToDo;


