import React from 'react';
import './Footer.css';
//import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

export default function Footer() {
    return (
            <div className="footer text-center text-white">
                <div className="container">

                    <section className="mb-5">
                        <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <p>
                            CAN WE HELP YOU?
                            <br />
                            <br />
                                SEND EMAIL
                            <br />
                            CONTACTUS@CUTFITTERS.COM.PK
                            <br />
                            <br />
                            UAN: 042 111-11-1111
                            <br />
                            MON-FRI 9:00 TO 5:30 PST
                            </p>
                        </div>
                        </div>
                    </section>

                    <section className="text-center mb-5 social">
                        <div>
                        <i className="fa fa-facebook-f"></i>

                        <i className="fa fa-twitter"></i>

                        <i className="fa fa-google"></i>

                        <i className="fa fa-instagram"></i>

                        <i className="fa fa-linkedin"></i>

                        <i className="fa fa-pinterest"></i>
                    </div>
                    </section>
                </div>
                    
                    © 2020 Copyright:
                    <a className="text-white" href="./index.html"
                        >CutFitters.com</a>
                    
                </div>
    );
}