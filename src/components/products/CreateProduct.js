import React, { Component } from "react";
import logo from "../../assets/images/logoo.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { createProduct } from "../../actions/CreateProductAction";
import "react-toastify/dist/ReactToastify.css";

export class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      unit_price: "",
      quantity: "",
      category: "",
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
    const productData = {
      product: this.state.product,
      unit_price: this.state.unit_price,
      quantity: this.state.quantity,
      category: this.state.category
    };
    this.props.createProduct(productData);
    e.target.reset();
    this.setState({ product: "" });
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
              <p>Add Product To Store</p>
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
              <form id="add_product" onSubmit={this.onSubmit}>
                <div className="input-box">
                  <input
                    type="text"
                    name="product"
                    placeholder="Product name"
                    required=""
                    id="product"
                    onChange={this.onChange}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    name="unit_price"
                    placeholder="Unit Price"
                    required=""
                    id="unit_price"
                    onChange={this.onChange}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Quantity"
                    required=""
                    id="quantity"
                    onChange={this.onChange}
                  />
                </div>
                <div className="input-box">
                  <select name="category" onChange={this.onChange}>
                    <option>Category</option>
                    <option value="">Jackets</option>
                    <option value="">Trousers</option>
                    <option value="">T.Shirts</option>
                    <option value="">Shoes</option>
                  </select>
                </div>
                <div className="input-box">
                  <input type="submit" name="" value="Add Item" />
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

CreateProduct.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  errors: PropTypes.object,
  createProduct: PropTypes.func
};

const mapStateToProps = state => ({
  errors: state.createProductReducer.errors
});

export default connect(
  mapStateToProps,
  { createProduct }
)(CreateProduct);
