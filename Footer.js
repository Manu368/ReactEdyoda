import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';


function Footer01(){
    return(
        <>
        <div className="bg-container01 d-flex flex-column justify-content-center pb-3 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <h5 className="heading03 pt-5">edyoda</h5>
                        <p className="p03">1st Floor, <br />
                        Gopalan Milennium Tower, <br />
                        ITPL Main Rd, Brrokfiled, <br />
                        Bengaluru Karnataka-560037, <br />
                        India, <br />
                        </p>
                        <div className="d-flex flex-row">
                        <i class="fa-solid fa-envelope icon02"></i>
                        <p className="email01">hello@edyoda.com</p>
                        </div>
                        <div className="d-flex flex-row mt-3">
                        <i class="fa-solid fa-location-dot i01"></i>
                        <i class="fa-brands fa-twitter i02"></i>
                        <i class="fa-brands fa-facebook-f i03"></i>
                        <i class="fa-brands fa-linkedin-in i04"></i>
                        <i class="fa-brands fa-telegram i05"></i>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                    <h5 className="heading04 pt-5">edyoda</h5>
                    <p className="p04">About Us</p>
                    <p className="p05">Careers</p>
                    <p className="p05">Contact Us</p>
                    <p className="p05">Terms of Use</p>
                    <p className="p05">Privacy Policy</p>
                    </div>
                    <div className="col-12 col-md-3">
                    <h5 className="heading04 pt-5">resources</h5>
                    <p className="p04">Jobs</p>
                    <p className="p05">Learning Paths</p>
                    <p className="p05">Courses</p>
                    <p className="p05">Learning Videos</p>
                    <p className="p05">Educators</p>
                    <p className="p05">Edyoda Stories</p>
                    <p className="p05">University</p>
                    </div>
                    <div className="col-12 col-md-3">
                    <h5 className="heading04 pt-5">for enterprises</h5>
                    <p className="p04">Train Your Employees</p>
                    <h5 className="heading04 pt-3">quick links</h5>
                    <p className="p05">Learn and Earn</p>
                    <p className="p05">Become a Learning-Enabler</p>
                    <p className="p05">Tips for Learning-Enabler</p>
                    <p className="p05">Request New Topic</p>
                    <p className="p05">Certification</p>
                    <p className="p05">Affiliate Program</p>
                    
                    
                    </div>
                    <hr className="hor01"/>
                   
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <div className="d-flex flex-row">
                        <i class="fa-solid fa-money-bill ic01"></i>
                        <i class="fa-brands fa-cc-mastercard ic01"></i>
                        <i class="fa-brands fa-cc-visa ic01"></i>
                        <i class="fa-solid fa-credit-card ic01"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="d-flex flex-row justify-content-center mt-3">
                    <p className="copyright">© 2023 zekelabs Techonology Private Limited</p>
                </div>
            </div>
            </>
            
        
    )
}

export default Footer01;