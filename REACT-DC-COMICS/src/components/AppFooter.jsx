import fBook from '../assets/img/footer-facebook.png';
import pScope from '../assets/img/footer-periscope.png';
import pTerest from '../assets/img/footer-pinterest.png';
import tX from '../assets/img/footer-twitter.png';
import yTube from '../assets/img/footer-youtube.png';

export default function AppFooter(){


  return (
    <footer> 
      <div id="footerBar">
        <div className="container">
            <div className="row">
              <div id='lowBar'>
                <button id="footBTN" className='p-3'>SIGN-UP NOW!!</button>
                <div className="bottomBotton">
                  <button id="follow">FOLLOW US</button>
                  <button className='p-2 d-none d-md-block'>
                    <img src={fBook} alt="FACEBOOK" />
                  </button>
                  <button className='p-2 d-none d-md-block'>
                    <img src={tX} alt="TWITTER" />
                  </button>
                  <button className='p-2 d-none d-md-block'>
                    <img src={yTube} alt="YOUTUBE" />
                  </button>
                  <button className='p-2 d-none d-md-block'>
                    <img src={pTerest} alt="PINTEREST" />
                  </button>
                  <button className='p-2 d-none d-md-block'>
                    <img src={pScope} alt="SCOPE" />
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </footer>
  )
}