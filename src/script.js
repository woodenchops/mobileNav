function MobileNav(props) {
    this._nav = props.nav;
    this._parentElement = props.parentElement;
    this._trigger = props.trigger;
    this._activeClass = props.activeClass;
    this._props = props;

    var self = this;
    var parentElement = this._parentElement;
    var nav = parentElement.querySelector(this._nav);
    var trigger = parentElement.querySelector(this._trigger);
    
    this.setState = function(state) {
        (typeof state === 'boolean') ? this._state = state : this._state = false;
        (this._state) ? nav.classList.add(this._activeClass) : nav.classList.remove(this._activeClass);
    }

    this.getState = function() {
        return this._state;
    }

    this.toggleState = function() {
        this.setState(!this.getState());
    }

  

  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    this.toggleState();
  }.bind(self));

    
    
}

var navs = document.querySelectorAll('.wrap')

var buttonsArray = [];


navs.forEach(function(nav) {
  buttonsArray.push(
      new MobileNav({
      parentElement: nav,
      nav: '#nav',
      trigger: '#nav-btn',
      activeClass: 'active'
  }));
});