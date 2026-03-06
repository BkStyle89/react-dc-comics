import logo from '../assets/img/dc-logo.png';
export default function AppHeader(){


  return (
    <header> 
      <div className="container">
        <div className="row">
          <div id='upBar'>
          <img id='logo' src={logo} alt="DC-LOGO" />
          <div>
            <button>CHARACTERS</button>
            <button>COMICS</button>
            <button>MOVIES</button>
            <button>TV</button>
            <button>GAMES</button>
            <button>COLLECTIBLES</button>
            <button>VIDEOS</button>
            <button>FANS</button>
            <button>NEWS</button>
            <button>SHOP</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}