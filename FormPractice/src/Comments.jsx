import { useState } from "react"
import { useFormik } from "formik"
import "./Comments.css";
import Form from "./Form";
export default function Comments() {
    let [comments, setComments] = useState([{
        // userName: "",
        // email: "",
        // password: "",
        // remarks: "",
        // rating: {},
    }])


    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
    }



    return (
        <div className="maindiv">
            <Form addNewComment={addNewComment} />

            <h2>All Commetns</h2>
            {comments.map((comment, idx) => (
                <div className="comment" key = {idx}>
                    <span>{comment.userName}</span>
                    {/* <span>{comment.password}</span> */}
                    <span>{comment.email}</span>
                    <span>{comment.remarks}</span>
                    <span>{comment.rating}</span>
                </div>
            ))}


        </div>
    )
}