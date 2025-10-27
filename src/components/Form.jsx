export const Form = () => {
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
            />
        </div>

        <div>
            <label htmlFor="body"></label>
            <input 
            type="text" 
            name="" 
            id="" 
            placeholder="Add Post"  
            autoComplete="off"
            id="body" 
            name="body"
            />
        </div>
        <div>
        <button type="submit">Add</button>
        </div>
        </form>
    );
};