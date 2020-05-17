import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    sent: false,
    msg: "",
  };

  resetForm = () => {
    this.setState({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.setState({
      msg: "...sending",
    });

    let data = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      phone: this.state.phone,
      company: this.state.company,
      message: this.state.message,
    };
    axios
      .post("https://janviermbilizi.herokuapp.com/send", data)
      .then(() => {
        this.setState({ msg: "Request submitted! Thank you " });
        this.resetForm();
      })
      .catch(() => {
        this.setState({ msg: "Error, message not sent" });
      });
  };

  render() {
    return (
      <div className="container my-auto justify-content-md-center">
        <div className="row justify-content-md-center">
          <div>
            <h6 id="contacts">
              Denver, CO. 80014 | Phone: 540-236-2223 | Email:
              janviermbilizi@gmail.com
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" id="colContact">
            <form method="POST" onSubmit={(e) => this.formSubmit(e)}>
              <h1 className="title">Contact Me</h1>
              <br />
              <div className="form-group">
                <h4 className="row justify-content-md-center">
                  {this.state.msg}
                </h4>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputFName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => this.setState({ fname: e.target.value })}
                    id="fName"
                    name="fName"
                    value={this.state.fname}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputLName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => this.setState({ lname: e.target.value })}
                    id="lName"
                    name="lName"
                    value={this.state.lname}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    id="email"
                    name="email"
                    value={this.state.email}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPhone">Phone number</label>
                  <input
                    type="phone"
                    className="form-control"
                    onChange={(e) => this.setState({ phone: e.target.value })}
                    id="phone"
                    name="phone"
                    value={this.state.phone}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputCompanyName">Company name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => this.setState({ company: e.target.value })}
                  id="company"
                  name="company"
                  value={this.state.company}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputMessage">Message</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  onChange={(e) => this.setState({ message: e.target.value })}
                  name="message"
                  value={this.state.message}
                ></textarea>
              </div>
              <button
                className="btn btn-primary btn-lg btn-block"
                id="Submit"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
