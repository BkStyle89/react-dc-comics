import logo from '../assets/img/dc-logo.png';
export default function AppHeader(){


  return (
    <header> 
      <div className="container">
        <div className="row">
          <div id='upBar'>
          <img className='d-none d-md-block' id='logo' src={logo} alt="DC-LOGO" />
            <div className='navigation'>
              <a className='navBar p-2' href="">CHARACTERS</a>
              <a className='navBar p-2' href="">COMICS</a>
              <a className='navBar p-2' href="">MOVIES</a>
              <a className='navBar p-2' href="">TV</a>
              <a className='navBar p-2' href="">GAMES</a>
              <a className='navBar p-2' href="">COLLECTIBLES</a>
              <a className='navBar p-2' href="">VIDEOS</a>
              <a className='navBar p-2' href="">FANS</a>
              <a className='navBar p-2' href="">NEWS</a>
              <a className='navBar p-2' href="">SHOP</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

