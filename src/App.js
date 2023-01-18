import React from "react";
import {useFormik} from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, {resetForm}) => {
      console.log("Form: ", values);
      alert(`Login Successful! \nWelcome ${values.email}`);
      resetForm({values: ""});
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Field required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
      }
      if (!values.password) errors.password = "Field required";
      return errors;
    },
  });

  return (
    <div className="app d-flex  align-items-center justify-content-center  mt-5">
      <div
        className="d-flex flex-column border rounded-3 p-3 shadow"
        style={{width: "25rem"}}
      >
        <h2 className="text-center">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div>Email</div>
          <input
            id="emailField"
            name="email"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          {formik.errors.email ? (
            <div
              id="emailError"
              style={{color: "red"}}
            >
              {formik.errors.email}
            </div>
          ) : null}

          <div>Password</div>
          <input
            id="pswField"
            name="password"
            type="password"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          {formik.errors.password ? (
            <div
              id="pswError"
              style={{color: "red"}}
            >
              {formik.errors.password}
            </div>
          ) : null}

          <div>
            <button
              id="submitBtn"
              className="form-control btn btn-primary btn-block mt-3"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
