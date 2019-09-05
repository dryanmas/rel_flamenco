'use strict';

class SocialMedia extends React.Component {

  render() {
    return (
      <React.Fragment>
        <a href="https://www.facebook.com/Robert-Earl-Longley-Music-643973815618328/" className="fa fa-facebook" target="_blank"></a>
        <a href="https://soundcloud.com/robert-earl-longley" target="_blank" className="fa fa-soundcloud"></a>
      </React.Fragment>
    );
  }
}

class UpperNav extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div id="open-menu">
          <a className="nav-link" href="#" onClick={this.openMenu}>Menu</a>
        </div> 
        <nav id="upper-nav">
          <div className="sm" id="sm-nav">
            <SocialMedia />
          </div>
          <a className="nav-link" id="close-menu" onClick={this.closeMenu} href="#"><i class="fa fa-angle-double-up"></i></a>
          <hr className="nav-break" />
          <a className="nav-link selected" href="./index.html">Home</a>
          <hr className="nav-break" />
          <a className="nav-link" href="./music.html">Music</a>
          <hr className="nav-break" />
          <a className="nav-link" href="./videos.html">Videos</a>
          <hr className="nav-break" />
          <a className="nav-link" href="./about.html">About</a>
          <hr className="nav-break" />
          <a className="nav-link" href="./booking.html">Booking</a>
          <hr className="nav-break" />
      </nav>
      <div className="sm" id="sm-lower">
        <SocialMedia />
      </div>
      </React.Fragment>
    );
  }

  openMenu = () => {
    const openButton = document.getElementById('open-menu');
    const nav = document.getElementById('upper-nav');

    console.log('open button', openButton);
    console.log('nav', nav);

    openButton.style.display = "none";
    nav.style.display = "flex";
  }

  closeMenu = () => {
    const openButton = document.getElementById('open-menu');
    const nav = document.getElementById('upper-nav');

    openButton.style.display = "flex";
    nav.style.display = "none";
  }
}

const domContainer = document.querySelector('#upper-nav-container');
ReactDOM.render(<UpperNav />, domContainer);
