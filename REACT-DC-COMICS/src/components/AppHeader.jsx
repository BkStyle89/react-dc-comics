import logo from '../assets/img/dc-logo.png';
export default function AppHeader(){


  return (
    <header> 
      <div className="container">
        <div className="row">
          <div id='upBar'>
          <img className='d-none d-lg-block' id='logo' src={logo} alt="DC-LOGO" />
            <div className='navigation '>
              <a className='navBar p-1' href="">CHARACTERS</a>
              <a className='navBar p-1' href="">COMICS</a>
              <a className='navBar p-1' href="">MOVIES</a>
              <a className='navBar p-1' href="">TV</a>
              <a className='navBar p-1' href="">GAMES</a>
              <a className='navBar p-1' href="">COLLECTIBLES</a>
              <a className='navBar p-1' href="">VIDEOS</a>
              <a className='navBar p-1' href="">FANS</a>
              <a className='navBar p-1' href="">NEWS</a>
              <a className='navBar p-1' href="">SHOP</a>
            </div>
          </div>
        </div>
      </div>
      <div className='d-none d-md-block' id='jumbotron'>
      </div>
    </header>
  )
}

