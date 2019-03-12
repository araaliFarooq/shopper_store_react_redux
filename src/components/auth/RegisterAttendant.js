import React, { Component } from "react";
import logo from "../../assets/images/logoo.png";
import { registerAttendant } from "../../actions/RegisterAttendantAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class RegisterAttendant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      contact: "",
      password: "",
      role: "",
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
      username: this.state.username,
      contact: this.state.contact,
      password: this.state.password,
      role: this.state.role
    };
    this.props.registerAttendant(userData);
  };

  render() {
    return (
      <main id="container">
        <header className="head" id="nav_header">
          <div className="navigation">
            <a href="sell_products.html">
              <img className="logo" src={logo} />
            </a>
            <p className="profile">
              Paul A<br />
              <a href="loginpage.html">Sign out</a>
            </p>
            <ul>
              <li>
                <a href="sell_products.html">Sell</a>
              </li>
              <li>
                <a href="all_products.html">Products</a>
              </li>
              <li>
                <a href="user_report.html">My Report</a>
              </li>
              <li>
                <a href="profile.html">Admin</a>
              </li>
            </ul>
          </div>
        </header>

        <section className="contain">
          <div className="prodct_box">
            <div id="reminder" className="reminder">
              <p>Add Store Attendant</p>
            </div>

            <div className="category_card_admin">
              <h3 className="category-title">
                <a href="#">Menu</a>
              </h3>
              <a href="products_dash.html">
                <p className="category-content">View Available Products</p>
              </a>
              <a href="add_product.html">
                <p className="category-content">Add Product Item</p>
              </a>
              <a href="">
                <p className="category-content">Add Product Category</p>
              </a>
              <a href="general_report.html">
                <p className="category-content">General Sales Report</p>
              </a>
              <h3 className="category-title">
                <a href="#">Attendants</a>
              </h3>
              <a href="add_attendant.html">
                <p className="category-content">Add Attendant</p>
              </a>

              <a href="all_attendants.html">
                <p className="category-content">View Attendants</p>
              </a>
              <a href="sales_report.html">
                <p className="category-content">View Attendants Reports</p>
              </a>
            </div>

            <div className="former">
              <form id="signup-form" action="" onSubmit={this.onSubmit}>
                <div className="input-box">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    required=""
                    onChange={this.onChange}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="07xx-xxxxxx"
                    required=""
                    onChange={this.onChange}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="password"
                    required=""
                    onChange={this.onChange}
                  />
                </div>
                <div className="input-box">
                  <select id="role" onChange={this.onChange} name="role">
                    <option>Role</option>
                    <option value="attendant">Attendant</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="input-box">
                  <input type="submit" name="" value="Add Attendant" />
                </div>
              </form>
            </div>
          </div>
          <ToastContainer autoClose={13000} />
        </section>

        <footer>
          <p>
            2018 © <a href="#">Shopers store</a> Design by Araali Farroq.
            <br />
            Project by <a href="#">TIA</a>.
          </p>
          <p>
            <small>
              As a user, you agree to the <a href="#">Terms and Conditions</a>{" "}
              here.
            </small>
          </p>
        </footer>
      </main>
    );
  }
}

RegisterAttendant.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  errors: PropTypes.object,
  registerAttendant: PropTypes.func
};

const mapStateToProps = state => ({
  errors: state.registerReducer.errors
});

export default connect(
  mapStateToProps,
  { registerAttendant }
)(RegisterAttendant);
