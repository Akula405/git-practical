import React from "react";
import "../App.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form values", values);
      navigate("/success");
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },
  });

  return (
    <div className="form_data">
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formik.values.name}
          className="form_field"
          onChange={formik.handleChange}
        />
        {formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formik.values.email}
          className="form_field"
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formik.values.password}
          className="form_field"
          onChange={formik.handleChange}
        />
        {formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
        <br />
        <button type="submit">Submit</button>
      </form>
      {/*<h1>{formik.values.name}</h1>*/}
    </div>
  );
};

export default Form;
