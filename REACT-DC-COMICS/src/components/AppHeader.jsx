import logo from '../assets/img/dc-logo.png';
export default function AppHeader(){


  return (
    <header> 
      <div className="container">
        <div className="row">
          <div id='upBar'>
            <img className='d-none d-lg-block' id='logo' src={logo} alt="DC-LOGO" />
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid ">
                  <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon "></span>
                  </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item ">
                    <a className="nav-link active " aria-current="page" href="#">CHARACTERS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link " href="#">COMICS</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link active " aria-current="page" href="#">MOVIES</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link active " aria-current="page" href="#">TV</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link active " aria-current="page" href="#">GAMES</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link active " aria-current="page" href="#">COLLECTIBLES</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link active " aria-current="page" href="#">VIDEOS</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link active " aria-current="page" href="#">FANS</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link active " aria-current="page" href="#">NEWS</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link active " aria-current="page" href="#">SHOP</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className='d-none d-md-block' id='jumbotron'>
      </div>
    </header>
  )
}

