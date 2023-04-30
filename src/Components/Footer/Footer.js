import React from "react";
import Para from "../CustomHeadings/Para";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import "../../App.css";

const sectionStyle = {
  width: "60%",
  margin: "40px auto",
  backgroundColor: "whitesmoke",
  padding: "20px 3%",
  height: "120px",
  borderRadius: "10px",
  position: "relative",
  zIndex: "5555555",
  top: "100px",
};
const footerStyle = {
  backgroundColor: "#06142E",
  minHeight: "50vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 5%",
  color: "white",
};
function Footer() {
  return (
    <React.Fragment>
      <section style={sectionStyle} className="flex-box">
        <div>
          <Para>Ready to get started?</Para>
          <Para>Talk to us Today</Para>
        </div>
        <div>
          <CustomButton>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/contact"}
            >
              GET SARTED
            </Link>
          </CustomButton>
        </div>
      </section>
      <footer
        style={{
          minHeight: "50vh",
          backgroundColor: "#06142E",
          padding: "40px 0px",
        }}
      >
        <div style={footerStyle}>
          <div style={{ margin: "20px 0px", height: "150px" }}>
            <Para>My-E-Store</Para>
            <Para sx={{ fontWeight: 400 }}>
              Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.
            </Para>
          </div>
          <div>
            <Para>
              Subscribe to get important <br /> updates.
            </Para>
            <form>
              <input
                style={{
                  width: "250px",
                  height: "35px",
                  padding: "10px",
                  margin: "10px 0px",
                }}
                placeholder="Enter your email"
                required
              />
              <CustomButton
                sx={{
                  display: "block",
                  "&:hover": { backgroundColor: "#2196f3" },
                }}
                type="submit"
              >
                Subscribe
              </CustomButton>
            </form>
          </div>
          <div style={{ margin: "20px 0px", height: "150px", width: "150px" }}>
            <Para>Follow Us</Para>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <a href="https://www.facebook.com">
                <img src="./Images/facebook.png" alt="facebook" />
              </a>
              <a href="https://">
                <img src="./Images/instagram.png" alt="instagram" />
              </a>
              <a href="https://">
                <img src="./Images/twitter.png" alt="twitter" />
              </a>
            </div>
          </div>
          <div style={{ margin: "20px 0px", height: "150px" }}>
            <Para>Call Us</Para>

            <div style={{ marginTop: "10px" }}>
              <Para>+923463837369</Para>
            </div>
          </div>
        </div>

        <hr />

        <center style={{color:'white',marginTop:'20px'}}>
          <Para>All Right Reserved &copy; {new Date().getFullYear()}</Para>
        </center>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
