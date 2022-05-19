import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import InputField from "./inputfield";
import TextAreaField from "./textarea";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .send("service_lhyeuqd", "template_k92gu72", values, "uK8DxOBh25g0DVjGr")
      .then(
        (response) => {
          console.log("SUCCESS!", response.text);
          setValues({
            fullname: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    alert("Email Sent!");
  }

  // function renderAlert() {
  //   <div className="px-4 py-3 mb-5 lead bg-white text-primary">
  //     <p>your message submitted successfully</p>
  //   </div>;
  // }

  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6 ">
          {/* {renderAlert()} */}
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="p-4 shadow p-3 bg-white rounded"
            autoComplete="off"
          >
            <h3 className="text-center fs-3 my-4">Send us a Message</h3>
            <div className="form-group mb-2">
              <InputField
                handleChange={handleChange}
                label="Full Name"
                name="fullname"
                type="text"
                placeholder="John Doe"
                value={values.fullname}
              />
              <InputField
                handleChange={handleChange}
                label="E-Mail"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={values.email}
              />
              <TextAreaField
                handleChange={handleChange}
                label="Your message here"
                name="message"
                value={values.message}
              />
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success button">
                  Send{" "}
                  <FontAwesomeIcon
                    style={{ fontSize: "13px" }}
                    className="text-center mx-2"
                    icon={faChevronRight}
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
