import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {

    const {id} = useParams();
    const {data:blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id);
      
    const history = useNavigate();

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            history("/");
        })
    }
    
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div> { error } </div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <h4> Written by { blog.author} </h4>
                    <p>{ blog.body} </p>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetail;