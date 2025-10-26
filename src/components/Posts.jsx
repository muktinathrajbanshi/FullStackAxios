import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import "../App.css";

export const Posts = () => {

    const [data, setData] = useState([]);


  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  }

  useEffect(() => {
    getPostData();
  }, []);

  // function to delete Post 
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if(res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPosts);
      } else {
        console.log("Failed to delete the post:", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return ( 
    <>
    <section>
      <Form />
    </section>
  <section className="section-post">
    <ol>
        {
            data.map((curElem) => {
                const {id, body, title} = curElem;
                return (
                    <li key={id}>
                    <p>Title: {title}</p>
                    <p>Body: {body}</p>
                    <button>Edit</button>
                    <button className="btn-delete" onClick={() => handleDeletePost(id)}>Delete</button>
                    </li>
                );
            })
        }
    </ol>
  </section>
  </>
  );
};