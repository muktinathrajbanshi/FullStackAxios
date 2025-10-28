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
            name="body" 
            id="body" 
            placeholder="Add Post"  
            autoComplete="off"
            />
        </div>
        <div>
        <button type="submit">Add</button>
        </div>
        </form>
    );
};