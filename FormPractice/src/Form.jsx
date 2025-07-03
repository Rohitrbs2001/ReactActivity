import { useState } from "react";

export default function Form() {
    let [formdata, setFormdata] = useState({
        userName: "",
        password: "",
        remarks: "",
        rating: "",
    });

    let handleInputChange = (event) => {
        setFormdata((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formdata);

        setFormdata({
            userName: "",
            password: "",
            remarks: "",
            rating: "",
        })
    }


    return (
        <form action="">
            <label htmlFor="userName"> User Name
                <input style={{ margin: '20px' }} type="text" placeholder="Enter User name" value={formdata.userName} name="userName" id="userName" onChange={handleInputChange}/>
            </label>

            <br /> <br />

            <label htmlFor="password">Password
                <input style={{ margin: '20px' }} type="text" placeholder="Enter password" value={formdata.password} name="password" id="password" onChange={handleInputChange}/>
            </label>

            <br /> <br />

            <label htmlFor="remarks"> Remarks
                <textarea  style={{ margin: '20px'  }} type="text" placeholder="Enter remarks" value={formdata.remarks} name="remarks" id="remarks" onChange={handleInputChange}>
                    Remarks
                </textarea>
            </label>

            <br /> <br />

            <label htmlFor="rating">Give Rating
                <input style={{ margin: '20px' }} type="number" min={0} max={5} placeholder="Give rating" value={formdata.rating} name="rating" id="rating" onChange={handleInputChange}/>
            </label>

            <br /><br />

            <button onClick={handleSubmit}>Submit</button>

        </form>

    );
}