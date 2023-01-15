import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Form: ", values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "Field required";
      if (!values.password) errors.password = "Field required";
      return errors;
    },
  });

  return (
    <div className="app">
      <form onSubmit={formik.handleSubmit}>

        <div>Email</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
        <div> {formik.errors.email ? (
          <span style={{ color: "red" }}>
            {formik.errors.email}
          </span>
        ) : null}</div>
        <div>
          Pasword{" "}
          {formik.errors.password ? (
            <span style={{ color: "red" }}>
              {formik.errors.password}
            </span>
          ) : null}
        </div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />

        <div>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
