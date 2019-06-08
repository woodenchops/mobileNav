function MobileNav(props) {
  this._parentElement = props.parentElement;
  this._nav = this._parentElement.querySelector(props.nav);
  this._trigger = this._parentElement.querySelector(props.trigger);
  this._activeClass = props.activeClass;
  this._props = props;
  this._open = props.open;
  this._self = this;

  this.openOrClose();

  this._trigger.addEventListener('click', function (e) {
    e.preventDefault();
    this.toggleState();
  }.bind(this._self));
}

MobileNav.prototype = function () {


  var setState = function (state) {
    (typeof state === 'boolean') ? this._state = state : this._state = false;
    (this._state) ? this._nav.classList.add(this._activeClass): this._nav.classList.remove(this._activeClass);
  }

  var getState = function () {
    return this._state;
  }

  var toggleState = function () {
    this.setState(!this.getState());
  }

  var openOrClose = function() {
    if(this._open) {
      this.setState(true);
    } else {
      this.setState(false);
    }
  }

  return {
    setState: setState,
    getState: getState,
    toggleState: toggleState,
    openOrClose: openOrClose
  }

}()

var navs = document.querySelectorAll('.wrap');

var buttonsArray = [];

navs.forEach(function (nav) {
  buttonsArray.push(new MobileNav({
    parentElement: nav,
    nav: '#nav',
    trigger: '#nav-btn',
    activeClass: 'active',
    open: false
  }));
});

