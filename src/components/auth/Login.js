import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import cart from "../../assets/images/shoperwhite.png";
import { login } from "../../actions/LoginAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      user_name: this.state.username,
      password: this.state.password
    };
    this.props.login(userData);
  };

  render() {
    return (
      <section id="contain">
        <div className="login_box">
          <div className="logos">
            <img src={cart} />
          </div>
          <div className="credits">
            <div className="heading" id="my-alert">
              <p>
                Access our store here just by loging in.
                <br />
                Fill in your credentials here.
              </p>
            </div>
            <form className="logs" id="loginform" onSubmit={this.onSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  required=""
                  onChange={this.onChange}
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  required=""
                  onChange={this.onChange}
                />
              </div>
              <div className="input-box">
                <input type="submit" name="" value="Log In" />
              </div>
              <p />
              <p>
                <small>
                  <a href="all_products.html">
                    Use this link to go to the home page
                  </a>
                </small>
              </p>
            </form>
          </div>
        </div>
        <ToastContainer autoClose={13000} />
      </section>
    );
  }
}
Login.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  errors: PropTypes.object,
  login: PropTypes.func
};

const mapStateToProps = state => ({
  errors: state.loginReducer.errors
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
