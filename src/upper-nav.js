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
        <nav id="upper-nav">
          <div className="sm" id="sm-nav">
            <SocialMedia />
          </div>
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
}

const domContainer = document.querySelector('#upper-nav-container');
ReactDOM.render(<UpperNav />, domContainer);
