import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setPending] = useState(false);

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}
        setPending(true);

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Blog Submitted');
            setPending(false)
            history("/")
        })
    }

    return ( 
        <div className="create">
            <h2>Add Blog</h2>
            <div className="create-content">
                <form onSubmit={handleSubmit}>
                    <label> Blog title:</label>
                    <input type="text" 
                    value={title}
                    onChange= {(e) => setTitle(e.target.value)}
                    required/>
                    <label>Blog body: </label>
                    <textarea
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                    required
                    >
                    </textarea>
                    <label>Blog author:</label>
                    <input type="text" 
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                    required/>
                    { !isPending && <button>Add blog</button>}
                    { isPending && <button>Adding blog..</button>}
                </form>
            </div>
        </div>
     );
}
 
export default Create;