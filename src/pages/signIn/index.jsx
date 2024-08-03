import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import ImgForm from "../../assets/image/image-form.jpeg";
import Footer from "../../components/footer";
import Header from "../../components/header";
import signInValidationSchema from "../../validation/signInValidation";

function SignIn() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInValidationSchema,
    onSubmit: () => {
      const isLoggedin = localStorage.getItem("login") === "true";
      if (isLoggedin) {
        navigate("/");
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1">
        <aside className="hidden lg:block lg:w-1/2">
          <img
            src={ImgForm}
            className="h-full w-full object-cover"
            alt="Sign Up"
          />
        </aside>
        <section className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="font-medium text-4xl mb-4">Realize o login</h2>
            <p className="mb-6">Digite seus dados abaixo</p>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-500 sm:text-sm"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-500 sm:text-sm"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col space-y-4">
                <button
                  type="submit"
                  className="bg-gray-600 rounded px-4 py-2 text-white hover:bg-gray-700"
                >
                  Entre
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className="bg-white rounded px-4 py-2 border-2 border-gray-400 text-black hover:bg-gray-100"
                >
                  Não tem conta? Realize o cadastro
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
