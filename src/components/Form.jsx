import { useState } from "react";

export const Form = () => {
    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
            console.log(prev);
        });
    };

    return (
        <form>
        <div>
            <label htmlFor="title"></label>
            <input 
            type="text" 
            name="title" 
            id="title" 
            autoComplete="off"
            placeholder="Add Title"
            value={addData.title}
            onChange={handleInputChange}
            />
        </div>
        <div>
            <label htmlFor="body"></label>
            <input 
            type="text" 
            name="body" 
            id="body" 
            placeholder="Add Post"  
            autoComplete="off"
            value={addData.body}
            onChange={handleInputChange}
            />
        </div>
        <div>
        <button type="submit">Add</button>
        </div>
        </form>
    );
};