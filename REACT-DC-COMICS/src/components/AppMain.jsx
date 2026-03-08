import comics from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import subscriptions from '../assets/img/buy-comics-subscriptions.png';
import locator from '../assets/img/buy-comics-shop-locator.png';
import visa from '../assets/img/buy-dc-power-visa.svg';
export default function AppMain(){


  return (
    <main>
      <div id="blackBar">
        <div className="container">
          <div className="row">
            <p id="lightText">--&gt; Content Goes Here &lt;--</p>
          </div>
        </div>
      </div>
      <div id="blueBar">
        <div id='merch' className="container">
          <div className="row row-col-5">
            <div className="col">
              <button>
                <div id='Info'>
                <img className='iconsBar' src={comics} alt="Comics" />
                <p className='text-light p-3 mt-2'>DIGITAL COMICS</p>
                </div>
              </button>
            </div>
            <div className="col">
              <button>
                <div id='Info'>
                <img className='iconsBar' src={merchandise} alt="Merchandise" />
                <p className='text-light p-3 mt-2 text-nowrap'>DC MERCHANDISE</p>
                </div>
              </button>
            </div>
            <div className="col">
              <button>
                <div id='Info'>
                <img className='iconsBar' src={subscriptions} alt="Subscriptions" />
                <p className='text-light p-3 mt-2'> SUBSCRIPTION</p>
                </div>
              </button>
            </div>
            <div className="col">
              <button>
                <div id='Info'>
                <img className='iconsBar' src={locator} alt="Locator" />
                <p className='text-light p-3 mt-2 text-nowrap'>COMIC SHOP LOCATION</p>
                </div>
              </button>
            </div>
            <div className="col">
              <div id='Info'>
              <img className='iconsBar' id='visa' src={visa} alt="Visa" />
              <button className='text-light p-3 mt-2 text-nowrap'>DC POWER VISA</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div id='backgroundIMG'>
      <div className='container' id='logoInfo'>
        <div className='row'>
          <div className='col-lg-2 col-md-6 col-sm-12'>
            <h2 className='text-light text-nowrap mt-5'>DC COMICS</h2>
            <p className='text-secondary'>Characters</p>
            <p className='text-secondary'>Comics</p>
            <p className='text-secondary'>Movies</p>
            <p className='text-secondary'>TV</p>
            <p className='text-secondary'>Games</p>
            <p className='text-secondary'>Videos</p>
            <p className='text-secondary'>News</p>
            <h2 id='shop' className='text-light text-nowrap mt-5'>Shop</h2>
            <p className='text-secondary'>Shop DC</p>
            <p className='text-secondary'>Shop DC Collectibles</p>
          </div>
          <div className='col-lg-2 col-md-6 col-sm-12'>
            <h2 className='text-light text-nowrap mt-5'>DC</h2>
            <p className='text-secondary'>Terms of Use</p>
            <p className='text-secondary'>Privacy Policy (NEW)</p>
            <p className='text-secondary'>AD Choices</p>
            <p className='text-secondary'>Advesiting</p>
            <p className='text-secondary'>Jobs</p>
            <p className='text-secondary'>Subscriptions</p>
            <p className='text-secondary'>Talent WorkShops</p>
            <p className='text-secondary'>CPSC Certificates</p>
            <p className='text-secondary'>Ratings</p>
            <p className='text-secondary'>Shop Help</p>
            <p className='text-secondary'>Contact US</p>
          </div>
          <div className='col-lg-2 col-md-12 col-sm-12'>
            <h2 className='text-light text-nowrap mt-5'>Sites</h2>
            <p className='text-secondary'>DC</p>
            <p className='text-secondary'>Mad Magazine</p>
            <p className='text-secondary'>Dc Kids</p>
            <p className='text-secondary'>DC Universe</p>
            <p className='text-secondary'>DC Power</p>
          </div>
          <div id='dcLogo' className='col-lg-6 d-lg-block d-none'></div>
        </div>
      </div>
    </div>
    </main>
  )
}