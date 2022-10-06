import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Home(){
    const [blogs, setBlogs] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    console.log('server url', process.env.REACT_APP_SERVER_URL)
    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog`)
                console.log(response.data)
            }catch(err){
                console.warn(err)
                if(err.response){
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getBlogs()
    }, []) // only fire on page load

    const blogLinks = blogs.map(blog => {
        return (
            <div key={blog._id}>
                <Link to={`/blogs${blog._id}`}>{blog.name}</Link>
            </div>
        )
    })

    return(
        <div>
        <h1>Welcome to the Blog!</h1>
        <h2>Most recent Blogs:</h2>
        {blogLinks}
        <p>{errorMessage}</p>
        </div>
    )
}