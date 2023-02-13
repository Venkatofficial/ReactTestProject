import {
  Button,
  Form,
  Image,
  NavbarBrand,
  NavLink,
  Nav,
  Card,
} from "react-bootstrap";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema,

    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  return (
    <Card className="mt-3 w-50 mx-auto">
      <div className="flex-center">
        <form onSubmit={formik.handleSubmit}>
          <Card.Title>LoginPage</Card.Title>
          <div className="form-group">
            <label htmlFor="email"> Email </label>
            <input
              name="email"
              type="email"
              className={
                "form-control" +
                (formik.errors.email && formik.touched.email
                  ? " is-invalid"
                  : "")
              }
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <div className="invalid-feedback">
              {formik.errors.email && formik.touched.email
                ? formik.errors.email
                : null}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password"> Password </label>
            <input
              name="password"
              type="password"
              className={
                "form-control" +
                (formik.errors.password && formik.touched.password
                  ? " is-invalid"
                  : "")
              }
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="invalid-feedback">
              {formik.errors.password && formik.touched.password
                ? formik.errors.password
                : null}
            </div>
          </div>

          <div className="d-grid gap-2">
            <Button type="submit" variant="success" size="sm">
              LogIn
            </Button>
            <Form.Text>
              Are you new user? <a href="/">Sign Up</a>
            </Form.Text>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default Login;
