
import React from "react";


export const Contact = (props) => {





  return (
    <div>
      <div id="contact">
        <div className="container">

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            Made with ☠ by Runtime Terror
          </p>
          <p>
            Developed at{" "}
            <a href="https://www.softsages.com/" rel="nofollow">
              Softsages Technology
            </a>
            </p>
        </div>
      </div>
    </div>
  );
};
