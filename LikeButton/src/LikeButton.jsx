import { useState } from "react";
export default function LikeButton(){

    let [isliked, setIsliked] = useState(false);

    let toggleLike = () =>{
        setIsliked(!isliked);
        console.log("liked");
    }
    return(

        <div>
            <p onClick={toggleLike}>
                {isliked ? (<i className="fa-solid fa-heart" style={{color: "red"}}></i>) : (<i className="fa-regular fa-heart"></i>)}
            </p>
        </div>
    )
}