import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from 'prop-types'


export default function Form(props) {
  let docWidth = window.innerWidth;

  let imageStyle =
    docWidth < 600
      ? { width: "30vw", height: "30vw" }
      : {
          width: "15vw",
          height: "10vw",
        };

  let style =
    docWidth < 600
      ? {
          width: "95vw",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "5%",
          borderRadius: "15px",
          backgroundColor: "#ffffff",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }
      : {
          width: "30vw",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "2%",
          borderRadius: "15px",
          backgroundColor: "#ffffff",
          boxShadow: "rgba(0, 0, 0, 0.24) 2px 3px 8px",
        };


  return (
    <>
      <div
        style={{
          width: "100vw",
          background: "linear-gradient(135deg, #153677, #ff5945)",
        }}
      >
        <div
          className="d-flex align-items-center py-4 bg-body-tertiary my-form"
          style={style}
        >
          <main classN           height="57"ame="form-signin w-100 m-auto">
            <form>
              <img
                className="ms-auto me-auto"
                src="spardhalogo.png"
                alt=""
                style={imageStyle}
              />
              <h1
                className="h3 mb-4 fw-normal"
                style={{
                  color: "#002765",
                  fontStyle: "bold",
                  fontSize: "2rem",
                }}
              >
                Enter Your Details -
              </h1>

              <div className="form-floating my-2">
                <input
                  type="text"
                  required
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                <label htmlFor="Name">Name</label>
              </div>

              <select
                className="form-select my-2"
                name="Branch"
                id="Branch"
                required
              >
                <option value="CSE">Computer Science and Engineering</option>
                <option value="Electrical">Electrical Engineering</option>
                <option value="Electronics">
                  Electronics and Communication Engineering
                </option>
                <option value="MnC">Mathematics &amp; Computing</option>
                <option value="Mechanical">Mechanical Engineering</option>
                <option value="Chemical">Chemical Engineering</option>
                <option value="Metallurgy">Metallurgy</option>
                <option value="Mining">Mining Engineering</option>
                <option value="Ceramic">Ceramic Engineering</option>
                <option value="Pharma">Pharma</option>
                <option value="Other">Other lower branch</option>
              </select>

              <div className="form-floating my-2">
                <input
                  type="email"
                  required
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="Email">Email address</label>
              </div>

              <div className="form-floating my-2">
                <input
                  type="number"
                  required
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone number"
                />
                <label htmlFor="PhoneNumber">Contact number</label>
              </div>

              <button
                className="btn btn-primary w-100 py-2 my-4"
                style={{ backgroundColor: "#ff5945", border: "0px" }}
              >
                {props.buttonTask}
              </button>
              {/* <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p> */}
            </form>
          </main>
          <script
            src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
            crossOrigin="anonymous"
          ></script>
        </div>
      </div>

      <ToastContainer
        // position="bottom-right"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
