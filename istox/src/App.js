import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Card, Button, } from 'react-bootstrap';
import { ReactComponent as Clock } from './Images/clock-1.svg'
import { ReactComponent as Facebook } from './Images/003-facebook-1.svg'
import { ReactComponent as Instagram } from './Images/instagram-1.svg'
import { ReactComponent as Google } from './Images/002-google-plus-1.svg'
import { ReactComponent as Twitter } from './Images/001-twitter-logo-silhouette-1.svg'
import { ReactComponent as RedGoogle } from './Images/002-google-plus.svg'
import { ReactComponent as Star } from './Images/star-1.svg'
import { ReactComponent as Location } from './Images/location-fill.svg'
import { ReactComponent as Email } from './Images/email.svg'
import { ReactComponent as Phone } from './Images/phone-fill.svg'

function App() {
  return (
    <div className="overflow-hidden">
      <div class="container" >
        <div className="logoCircle" />
        <Navbar expand="lg">
          <Navbar.Brand href="#" className="logo">
            <img
              src={require("./Images/logo.png")}
              className="logoStyling"
              width="100"
              height="100"
              alt="logo" />
              POWER
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeClassName="selected" className="ml-auto">
              <Nav.Link href="#home" style={{
                "border-bottom": "3px solid #F92524"
              }} >Home</Nav.Link>
              <Nav.Link href="#link">About us</Nav.Link>
              <Nav.Link href="#link">Our Classes</Nav.Link>
              <Nav.Link href="#link">Our Trainers</Nav.Link>
              <Nav.Link href="#link">Our Pricing</Nav.Link>
              <Button variant="danger">Contact us</Button>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
        <div className="home first-div">
          <div className="home-text first-text">
            <h2>Build your body &</h2>
            <h1>Shape Yourself!</h1>
            <hr align="left" className="line" />
            <p className="small-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore architecto beatae vitae dicta sunt explicabo.
            </p>
            <button type="button" className="join-button"> Join Today</button>
          </div>
          <div className="home-image screen-only">
            <div className="smallCircle" />
            <div className="smallCirclePink" />
            <div className="smallCircleBlue" />
            <img alt="smiling girl in gym" className="girl-gym" src={require('./Images/shutterstock_551338465.png')} />
          </div>
        </div>
        <div className="home">
          <div className="home-image">
            <img alt="bg_hill" className="bg-hill" src={require('./Images/bg_hill.png')} />
            <img alt="girl getting ready to run" className="girl-run" src={require('./Images/xvhgefnycofckvulefqvajudz_usermedia.png')} />
          </div>
          <div className="home-text">
            <h3>Our Story</h3>
            <hr align="left" className="line" />
            <p className="small-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            <br />
              <br />
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <div className="big-container">
              <div className="small-container">
                <img alt='logo1' src={require('./Images/logo1.png')} />
                <div>
                  <h4>
                    Open door policy
                  </h4>
                  <p className="small-text">
                    Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.
                  </p></div>
              </div>
              <div className="small-container">
                <img alt='logo1' src={require('./Images/logo2.png')} />
                <div>
                  <h4>
                    Fully Insured
                  </h4>
                  <p className="small-text">
                    Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.
                  </p>
                </div>
              </div>
              <div className="small-container">
                <img alt='logo1' src={require('./Images/logo3.png')} />
                <div>
                  <h4>
                    Personal Trainer
                  </h4>
                  <p className="small-text">
                    Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbar>
          <Navbar.Brand href="#" className="small-nav">
            Our Classes
            <hr align="left" className="small-line" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">All</Nav.Link>
              <Nav.Link href="#link">Mens</Nav.Link>
              <Nav.Link href="#stuff">Womens</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="small-text info-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
        <div className="horizontal-container">


          <div className="display-card">
            <Card>
              <Card.Img variant="top" src={require('./Images/class1@2x.png')} />
              <Card.Body className="card-body-init">
                <Card.Title className="cardTitle">Body Building</Card.Title>
                <Card.Text>
                  <div className="card-container">
                    <Clock />
                    <div className="desc-text">
                      Mon-Fri | 9.00 - 10.00
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="display-card">
            <Card>
              <Card.Img variant="top" src={require('./Images/news1-1.png')} />
              <Card.Body className="card-body-init">
                <Card.Title className="cardTitle">Body Building</Card.Title>
                <Card.Text>
                  <div className="card-container">
                    <Clock />
                    <div className="desc-text">
                      Mon-Fri | 9.00 - 10.00
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="display-card">
            <Card>
              <Card.Img variant="top" src={require('./Images/news2-1.png')} />
              <Card.Body className="card-body-init">
                <Card.Title className="cardTitle">Body Building</Card.Title>
                <Card.Text>
                  <div className="card-container">
                    <Clock />
                    <div className="desc-text">
                      Mon-Fri | 9.00 - 10.00
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="display-card">
            <Card>
              <Card.Img variant="top" src={require('./Images/news3-1.png')} />
              <Card.Body className="card-body-init">
                <Card.Title className="cardTitle">Body Building</Card.Title>
                <Card.Text>
                  <div className="card-container">
                    <Clock />
                    <div className="desc-text">
                      Mon-Fri | 9.00 - 10.00
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="display-card">
            <Card>
              <Card.Img variant="top" src={require('./Images/news4-1.png')} />
              <Card.Body className="card-body-init">
                <Card.Title className="cardTitle">Body Building</Card.Title>
                <Card.Text>
                  <div className="card-container">
                    <Clock />
                    <div className="desc-text">
                      Mon-Fri | 9.00 - 10.00
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="center-bp">
          <h3 style={{
            textAlign: "center",
            marginTop: "10vh"
          }}>
            Our Trainers
            </h3>
          <hr className="line" />
          <div className="small-text align-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </div>
        </div>
        <div className="tlayout">
          <div className="column-container">
            <div className="picture-container">
              <img src={require('./Images/123.png')} className="middle-image" alt="Buff dude" />
            </div>
            <div className="info">
              <h5>
                AMARYAN JACKSON
              </h5>
              <div className="small-text">
                Body Builder
              </div>

              <hr className="separator" />
              <div className="small-text">
                Sed ut perspiciatis unde omnis iste natus error sit quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </div>
              <div className="logos-container">
                <Facebook />
                <Google />
                <Instagram />
                <Twitter />
              </div>
            </div>
          </div>
          <div className="column-reverse  ">
            <div className="picture-container">
              <img src={require('./Images/333333.png')} className="middle-image" alt="Buff dude" />
            </div>
            <div className="info">
              <h5>
                ILONA JEKLIN
              </h5>
              <div className="small-text">
                Gymnast
              </div>
              <hr className="separator" />
              <div className="small-text">
                Sed ut perspiciatis unde omnis iste natus error sit quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </div>
              <div className="logos-container">
                <Facebook />
                <RedGoogle />
                <Instagram />
                <Twitter />
              </div>
            </div>
          </div>
          <div className="column-container">
            <div className="picture-container">
              <img src={require('./Images/1122.png')} className="middle-image" alt="Buff dude" />
            </div>
            <div className="info">
              <h5>
                John Doe
              </h5>
              <div className="small-text">
                Body Builder
              </div>

              <hr className="separator" />
              <div className="small-text">
                Sed ut perspiciatis unde omnis iste natus error sit quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </div>
              <div className="logos-container">
                <Facebook />
                <Google />
                <Instagram />
                <Twitter />

              </div>
            </div>
          </div>
        </div>
        <div className="center-bp whitespace-above">
          <div>
            <h1 style={{ textAlign: "center" }}>
              Our Pricing
            </h1>
            <hr className="line" />
          </div>
          <div className="small-text align-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </div>
        </div>
        <div className="switch-container">
          Annual Plan <div className="switch-store"><div className="green-dot" /></div> Monthly Plan
        </div>
        <div class="choices-container row text-center">
          <div class="card one-card box-shadow">
            <img alt="barbell" src={require('./Images/barbell.png')} className="barbell" />
            <div class="card-body">
              <h4>Basic Plan </h4>
              <div class="small-text">
                Sed ut perspiciatis unde natus error sit quae ab illo inventor
                </div>
              <hr class="separator"></hr>
              <h4>$340 a month </h4>
              <button type="button" class="btn btn-light btn-border">Get Started</button>
            </div>
          </div>
          <div class="card one-card danger-colors box-shadow">
            <img alt="barbell" src={require('./Images/barbell-red.png')} className="barbell" />
            <div class="card-body">
              <h4>Professional Plan </h4>
              <div class="small-text">
                Sed ut perspiciatis unde natus error sit quae ab illo inventor
                </div>
              <hr class="separator"></hr>
              <h4>$340 a month </h4>
              <button type="button" class="btn btn-danger btn-border-danger">Get Started</button>
            </div>
          </div>
          <div class="card one-card box-shadow">
            <img alt="barbell" src={require('./Images/barbell.png')} className="barbell" />
            <div class="card-body">
              <h4>Standard Plan </h4>
              <div class="small-text">
                Sed ut perspiciatis unde natus error sit quae ab illo inventor
                </div>
              <hr class="separator"></hr>
              <h4>$340 a month </h4>
              <button type="button" class="btn btn-light btn-border">Get Started</button>
            </div>
          </div>
        </div>
        <h3>
          What People Says About Us?
        </h3>
        <hr className="line" align="left"></hr>
        <div class="small-text small-column">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
        <div className="last-holder">
          <div className="contact-card">
            <img src={require('./Images/303030@2x.png')} className="profile-pic" alt="profile" />
            <div className="star-holder">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div class="small-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </div>
            <div className="name-font">
              Christopher Doe
              </div>
            <div className="location-font">
              Orlando, Florida
              </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <h4>
                  Send us your feedback
                </h4>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Full Name" />
              </div>
              <div class="form-group">
                <input type="tel" class="form-control" placeholder="Phone No." />
              </div>
              <div className="form-group">
                <textarea class="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">I agree with all conditions</label>
              </div>
              <button type="submit" class="btn btn-danger btn-border-bottom">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="column-1">
          <img src={require('./Images/logo-white.png')} className="whitelogo" alt="logo" />
          <div className="small-text whitefont display-card">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </div>

          <div className="logos-container display-card">
            <Facebook />
            <Google />
            <Instagram />
            <Twitter />
          </div>
        </div>
        <div className="column-2">
          <h3 className="whitefont text-margin">
            Get In Touch
          </h3>
          <hr className="whiteline" align="left" />
          <div className="two-col-layout">
            <div className="column-1">
              <div className="address-font whitefont no-margin">
                Address
              </div>
              <Location />
              <div className="small-text whitefont">
                123 Madison Street New York City,
                <br />NY 10001
              </div>
              <br />
              <Clock />
              <div className="small-text whitefont svg-margin">
                Mon-Fri | 9.00 - 10.00
              </div>
            </div>
            <div className="column-2">
              <div className="address-font whitefont no-margin">
                Contact Info
              </div>
              <Email />
              <div className="small-text whitefont">

                info@gym.com
              </div>
              <br />
              <Phone />
              <div className="small-text whitefont">

                +1 234 567 8901
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="copyrights">
        <hr align="center" className="footerline" />
        <div class="whitefont small-text align-center margin-below">
          Copyright © 2019 GYM. All rights reserved.
        </div>
      </div>
    </div >
  );
}

export default App;
