import comics from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import subscriptions from '../assets/img/buy-comics-subscriptions.png';
import locator from '../assets/img/buy-comics-shop-locator.png';
import visa from '../assets/img/buy-dc-power-visa.svg';
import AppCard from './AppCard'
export default function AppMain({fumetti}){



  return (
    <main>
      <div id="blackBar">
        <div className='current d-none d-md-block'>
        </div>
        <div  className="container">
            <div className='row ' id='comic'>
             {fumetti.map(fumetto=>(
              <AppCard img={fumetto.thumb} title={fumetto.title} price={fumetto.price} type={fumetto.type} key={fumetto.id}/>
                
             ))}
             </div>
        </div>
        <div className='d-flex justify-content-center'>
          <button id='more' className='text-light bg-primary p-2 fw-bold mb-4'>LOAD MORE</button>
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
    <div  id='backgroundIMG'>
      <div className='container' id='logoInfo'>
        <div className='row'>
          <div className='col-lg-2 col-md-6 col-sm-12'>
            <h2 className='text-light text-nowrap mt-5'>DC COMICS</h2>
            <div className='comics'>
              <a className='mainFont' href=""> Characters</a>
              <a className='mainFont' href=""> Comics</a>
              <a className='mainFont' href=""> Movies</a>
              <a className='mainFont' href=""> TV</a>
              <a className='mainFont' href=""> Games</a>
              <a className='mainFont' href=""> Videos</a>
              <a className='mainFont' href=""> News</a>
            </div>
            <h2 id='shop' className='text-light text-nowrap mt-5 '>Shop</h2>
            <div className='comics'>
              <a href="" className='mainFont'>Shop DC</a>
              <a href="" className='mainFont mb-4'>Shop DC Collectibles</a>
            </div>  
          </div>
          <div className='col-lg-2 col-md-6 col-sm-12'>
            <h2 className='text-light text-nowrap mt-5'>DC</h2>
            <div className='comics'>
              <a href="" className='mainFont'>Terms of Use</a>
              <a href="" className='mainFont'>Privacy Policy (NEW)</a>
              <a href="" className='mainFont'>AD Choices</a>
              <a href="" className='mainFont'>Advesiting</a>
              <a href="" className='mainFont'>Jobs</a>
              <a href="" className='mainFont'>Subscriptions</a>
              <a href="" className='mainFont'>Talent WorkShops</a>
              <a href="" className='mainFont'>CPSC Certificates</a>
              <a href="" className='mainFont'>Ratings</a>
              <a href="" className='mainFont'>Shop Help</a>
              <a href="" className='mainFont'>Contact US</a>
            </div>
          </div>
          <div className='col-lg-2 col-md-12 col-sm-12'>
            <h2 className='text-light text-nowrap mt-5'>Sites</h2>
            <div className='comics'>
              <a href="" className='mainFont'>DC</a>
              <a href="" className='mainFont'>Mad Magazine</a>
              <a href="" className='mainFont'>Dc Kids</a>
              <a href="" className='mainFont'>DC Universe</a>
              <a href="" className='mainFont'>DC Power</a>
            </div>  
          </div>
          <div id='dcLogo' className='col-lg-6 d-lg-block d-none'></div>
        </div>
      </div>
    </div>
    </main>
  )
}