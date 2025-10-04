// src/components/LoginModal.jsx
import React, { useState } from "react";

const SignInModal = () => {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("social"); // 'social' | 'login' | 'register'

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  return (
    <>
      {/* Trigger Button */}
      <button className="gradient-button" onClick={openModal}>
        <i className="fa fa-sign-in-alt" /> Sign In Now
      </button>

      {/* Modal */}
      {visible && (
        <div id="modal" className="popupContainer">
          <div className="popupHeader">
            <span className="header_title">Login</span>
            <span className="modal_close" onClick={closeModal}>
              <i className="fa fa-times" />
            </span>
          </div>

          <section className="popupBody">
            {/* --- Social Login --- */}
            {activeTab === "social" && (
              <div className="social_login">
                <div>
                  <a href="#" className="social_box fb">
                    <span className="icon">
                      <i className="fab fa-facebook" />
                    </span>
                    <span className="icon_title">Connect with Facebook</span>
                  </a>
                  <a href="#" className="social_box google">
                    <span className="icon">
                      <i className="fab fa-google-plus" />
                    </span>
                    <span className="icon_title">Connect with Google</span>
                  </a>
                </div>
                <div className="centeredText">
                  <span>Or use your Email address</span>
                </div>
                <div className="action_btns">
                  <div className="one_half">
                    <button
                      onClick={() => setActiveTab("login")}
                      className="btn"
                    >
                      Login
                    </button>
                  </div>
                  <div className="one_half last">
                    <button
                      onClick={() => setActiveTab("register")}
                      className="btn"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* --- Login Form --- */}
            {activeTab === "login" && (
              <div className="user_login">
                <form>
                  <label>Email / Username</label>
                  <input type="text" />
                  <br />
                  <label>Password</label>
                  <input type="password" />
                  <br />
                  <div className="checkbox">
                    <input id="remember" type="checkbox" />
                    <label htmlFor="remember">
                      Remember me on this computer
                    </label>
                  </div>
                  <div className="action_btns">
                    <div className="one_half">
                      <button
                        type="button"
                        className="btn back_btn"
                        onClick={() => setActiveTab("social")}
                      >
                        <i className="fa fa-angle-double-left" /> Back
                      </button>
                    </div>
                    <div className="one_half last">
                      <button type="submit" className="btn btn_red">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
                <a href="#" className="forgot_password">
                  Forgot password?
                </a>
              </div>
            )}

            {/* --- Register Form --- */}
            {activeTab === "register" && (
              <div className="user_register">
                <form>
                  <label>Full Name</label>
                  <input type="text" />
                  <br />
                  <label>Email Address</label>
                  <input type="email" />
                  <br />
                  <label>Password</label>
                  <input type="password" />
                  <br />
                  <div className="checkbox">
                    <input id="send_updates" type="checkbox" />
                    <label htmlFor="send_updates">
                      Send me occasional email updates
                    </label>
                  </div>
                  <div className="action_btns">
                    <div className="one_half">
                      <button
                        type="button"
                        className="btn back_btn"
                        onClick={() => setActiveTab("social")}
                      >
                        <i className="fa fa-angle-double-left" /> Back
                      </button>
                    </div>
                    <div className="one_half last">
                      <button type="submit" className="btn btn_red">
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default SignInModal;
