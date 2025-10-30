import React from 'react';
import "./todo.css";

export const Todo = () => {
  return (
    <>
        <div className="container">
            <div>
                <h1>Welcome to Todo Application</h1>
            </div>
            <div className="maintain">
            <div className="todo-box">
                <input 
                type="text"
                placeholder="Enter your data"
                 />
            </div>
            <button className="btn">Add task</button>
            </div>
        </div>
    </>
  );
};
