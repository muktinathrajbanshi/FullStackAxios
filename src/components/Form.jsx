import { useEffect, useState } from "react";
import { postData } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    // get the updated Data and add into input field 

    useEffect(() => {
        updateDataApi && setAddData({
            title: updateDataApi.title || "",
            body: updateDataApi.body || "",
        });
    }, [updateDataApi])

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
            return{
            ...prev,
            [name]:value,
            };
        });
    };

    const addPostData = async () => {
       const res = await postData(addData);
       console.log("res", res);
       
       if ((res.status === 201)) {
        setData([...data, res.data]);
        setAddData({ title: "", body: "" });
       }
    }

    // form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData();
    };

    return (
        <form onSubmit={handleFormSubmit}>
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