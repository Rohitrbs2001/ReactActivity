import { useState } from "react";
import "./Form.css"
import { useFormik } from "formik";

export default function Form({ addNewComment }) {
  // let [formdata, setFormdata] = useState({
  //     userName: "",
  //     password: "",
  //     remarks: "",
  //     rating: 5,
  // });

  // let handleInputChange = (event) => {
  //     setFormdata((currData) => {
  //         return { ...currData, [event.target.name]: event.target.value };
  //     });
  // };

  // let handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(formdata);
  //     addNewComment(formdata);
  //     setFormdata({
  //         userName: "",
  //         password: "",
  //         remarks: "",
  //         rating: 5,
  //     })
  // }


  // validation using Formik


  const validate = values => {
    const errors = {};
    if (!values.userName) {
      errors.userName = 'Required';
    } else if (values.userName.length > 15) {
      errors.userName = 'Must be 15 characters or less';
    }

    //  if (!values.lastName) {
    //    errors.lastName = 'Required';
    //  } else if (values.lastName.length > 20) {
    //    errors.lastName = 'Must be 20 characters or less';
    //  }

     if (!values.email) {
       errors.email = 'Required';
     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
       errors.email = 'Invalid email address';
     }

    return errors;   
  };


  const formik = useFormik({
    initialValues: {
      userName: '',
      //  lastName: '',
       email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      addNewComment(values);
    },
  });


  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          placeholder="Enter user name"
          value={formik.values.userName}
          name="userName"
          id="userName"
          onChange={formik.handleChange}
        />
        {formik.errors.userName ? <div>{formik.errors.userName}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter email address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>

      {/* <div className="form-group">
    <label htmlFor="password">Password</label>
    <input
      type="password"
      placeholder="Enter password"
      value={formdata.password}
      name="password"
      id="password"
      onChange={handleInputChange}
    />
  </div> */}
      {/* 
      <div className="form-group">
        <label htmlFor="remarks">Remarks</label>
        <textarea
          placeholder="Enter remarks"
          value={formdata.remarks}
          name="remarks"
          id="remarks"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="rating">Give Rating</label>
        <input
          type="number"
          min={0}
          max={5}
          value={formdata.rating}
          name="rating"
          id="rating"
          onChange={handleInputChange}
        />
      </div> */}

      <button type="submit">Submit</button>
    </form>


  );
}