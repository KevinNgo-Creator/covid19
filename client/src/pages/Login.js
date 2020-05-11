import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "./util/api";

function Login(props) {
  const [Username, setUsername] = useState({});
  const [Password, setPassword] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  //   const { id } = useParams();
  //   useEffect(() => {
  //     API.getUser(id)
  //       .then((res) => setBook(res.data))
  //       .catch((err) => console.log(err));
  //   }, []);
  $(document).ready(function () {
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function (event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
      };

      if (!userData.email || !userData.password) {
        return;
      }

      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password,
      })
        .then(function () {
          window.location.replace("/members");
          // If there's an error, log the error
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  });

  return (
    <Container fluid>
      <Row>
        {/* <Col size="md-12">
          <span> username: </span>
          <input id="username"></input>
          <span> password: </span>
          <input id="password"></input>
          <button id="btnlogin">login</button>{" "}
          <button id="btnsignup">signup</button>
        </Col> */}
        <form class="login">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email-input"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="password-input"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-default">
            Login
          </button>
        </form>
      </Row>
    </Container>
  );
}

export default Login;
