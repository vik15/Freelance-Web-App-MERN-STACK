import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Footer.scss";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
          <hr />
                <div className="top">
                    <div className="item">
                        <h2>Developers</h2>
                        <Link className="link" to="/gigs?cat=js_dev">
                        <span>Javascript Developers</span>
                        </Link>
                        <Link className="link" to="/gigs?cat=py_dev">
                        <span>Python Developers</span>
                        </Link>
                        <Link className="link" to="/gigs?cat=web">
                        <span>Web Developers</span>
                        </Link>
                        <Link className="link" to="/gigs?cat=react">
                        <span>React Developers</span>
                        </Link>
                        <Link className="link" to="/gigs?cat=devops">
                        <span>Devops Engineers</span>
                        </Link>
                        <Link className="link" to="/gigs?cat=data_sci">
                        <span>Data Scientists</span>
                        </Link>
                        <Link className="link" to="/gigs?cat=sql_dev">
                        <span>SQL Developers</span>
                        </Link>
                        <Link className="link" to="/gigs?cat=data_eng">
                        <span>Data Engineers</span>
                        </Link>
                    </div>
                    <div className="item">
                        <h2>Designers</h2>
                        <Link className="link" to="/gigs?cat=graphic">
                        <span>Graphic Designers</span>
                        </Link>
                        <Link className="link" to="/gigs?cat=web_des">
                        <span>Web Designers</span>
                        </Link>
                        <Link className="link" to="/gigs?cat=game_des">
                        <span>Game Designers</span>
                        </Link>
                    </div>
                    <div className="item">
                        <h2>Help & Support</h2>
                        <span>FAQ</span>
                    </div>
                    <div className="item">
                        <h2>Company</h2>
                        <span>About Us</span>
                        <span>Support</span>
                        <span>Founders</span>
                        <span>Our Team</span>
                    </div>
                    <div className="item">
                        <h2>Contact Us</h2>
                        <span>service@lancealot.in</span>
                        <span>+91-890-567-1234</span>
                        <span>Mumbai, India.</span>
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <h2>Lance-a-lot</h2>
                        <span>©Copyright Lance-a-lot Inc.</span>
                    </div>
                    <div className="right">
                        <div className="social">
                            <img src="/img/twitter.png" alt="" />
                            <img src="/img/facebook.png" alt="" />
                            <img src="/img/linkedin.png" alt="" />
                            <img src="/img/instagram.png" alt="" />
                        </div>
                        <div className="link">
                            <img src="/img/language.png" alt="" />
                            <span>English</span>
                        </div>
                        <div className="link">
                            <img src="/img/coin.png" alt="" />
                            <span>INR</span>
                        </div>
                        {/* <img src="/img/accessibility.png" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;