'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SocialMedia = function (_React$Component) {
  _inherits(SocialMedia, _React$Component);

  function SocialMedia() {
    _classCallCheck(this, SocialMedia);

    return _possibleConstructorReturn(this, (SocialMedia.__proto__ || Object.getPrototypeOf(SocialMedia)).apply(this, arguments));
  }

  _createClass(SocialMedia, [{
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement("a", { href: "https://www.facebook.com/Robert-Earl-Longley-Music-643973815618328/", className: "fa fa-facebook", target: "_blank" }),
        React.createElement("a", { href: "https://soundcloud.com/robert-earl-longley", target: "_blank", className: "fa fa-soundcloud" })
      );
    }
  }]);

  return SocialMedia;
}(React.Component);

var UpperNav = function (_React$Component2) {
  _inherits(UpperNav, _React$Component2);

  function UpperNav() {
    _classCallCheck(this, UpperNav);

    return _possibleConstructorReturn(this, (UpperNav.__proto__ || Object.getPrototypeOf(UpperNav)).apply(this, arguments));
  }

  _createClass(UpperNav, [{
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "nav",
          { id: "upper-nav" },
          React.createElement(
            "div",
            { className: "sm", id: "sm-nav" },
            React.createElement(SocialMedia, null)
          ),
          React.createElement("hr", { className: "nav-break" }),
          React.createElement(
            "a",
            { className: "nav-link selected", href: "./index.html" },
            "Home"
          ),
          React.createElement("hr", { className: "nav-break" }),
          React.createElement(
            "a",
            { className: "nav-link", href: "./music.html" },
            "Music"
          ),
          React.createElement("hr", { className: "nav-break" }),
          React.createElement(
            "a",
            { className: "nav-link", href: "./videos.html" },
            "Videos"
          ),
          React.createElement("hr", { className: "nav-break" }),
          React.createElement(
            "a",
            { className: "nav-link", href: "./about.html" },
            "About"
          ),
          React.createElement("hr", { className: "nav-break" }),
          React.createElement(
            "a",
            { className: "nav-link", href: "./booking.html" },
            "Booking"
          ),
          React.createElement("hr", { className: "nav-break" })
        ),
        React.createElement(
          "div",
          { className: "sm", id: "sm-lower" },
          React.createElement(SocialMedia, null)
        )
      );
    }
  }]);

  return UpperNav;
}(React.Component);

var domContainer = document.querySelector('#upper-nav-container');
ReactDOM.render(React.createElement(UpperNav, null), domContainer);