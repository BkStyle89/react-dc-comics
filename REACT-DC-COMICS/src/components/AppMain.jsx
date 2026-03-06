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
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='container'>
              <div className='row'>
              <div className='col-4'>asd</div>
              <div className='col-4'>asd</div>
              <div className='col-4'>asd</div>
              </div>
            </div>
          </div>
          <div className='col-6'>asd</div>
        </div>
      </div> 
    </main>
  )
}