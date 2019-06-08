
/*

MOBILE NAV CLASS - 


DEV NOTE: 
There appears to be a scoping issue when you use variables in the contructor function or when attaching things to the prototype

so, instead, reference elements etc with the 'this' keyword instead.

I only use variables outside the class - when I'm initialising it 

NOTE: 

*/

function MobileNav(props) {
  this._parentElement = props.parentElement; // the parent wrapper
  this._nav = this._parentElement.querySelector(props.nav); // the nav you wish to toggle
  this._trigger = this._parentElement.querySelector(props.trigger); // the trigger you want to use to toggle the nav
  this._activeClass = props.activeClass; // the class you wish to add to create the toggle
  this._props = props; // pass the values of the object passed when you initialise the class
  this._open = props.open; // property to determine if you want the nav open or closed on page load
  this._self = this; // reference the class itself (MobileNav)

  this.openOrClose(); // open or close the nav on page load

  // trigger the toggle
  this._trigger.addEventListener('click', function (e) { 
    e.preventDefault();
    this.toggleState();
  }.bind(this._self)); // use 'bind' to bind the 'this' keyword to the 'MobileNav' class
}

MobileNav.prototype = function () { // attach methods to the prototype


  var setState = function (state) { // create a 'state' property and give it a boolean value
    (typeof state === 'boolean') ? this._state = state : this._state = false; // check if the value of the 'state' prop is a boolean then set it
    (this._state) ? this._nav.classList.add(this._activeClass): this._nav.classList.remove(this._activeClass); // based off the 'state' prop, add or remove active class
  }

  var getState = function () { // get the 'state' prop value (boolean)
    return this._state;
  }

  var toggleState = function () { // toggle the 'state' prop
    this.setState(!this.getState());
  }

  var openOrClose = function() { // open or close nav on page load
    if(this._open) {
      this.setState(true);
    } else {
      this.setState(false);
    }
  }

  return { // return all methods - (whatever isn't returned in this object will be kept private) - I have chosen to include them all
    setState: setState,
    getState: getState,
    toggleState: toggleState,
    openOrClose: openOrClose
  }

}() // the '()' means that the function will be executed straight away. 

var navs = document.querySelectorAll('.wrap'); // select the parent container for each nav (returns a nodeList)

var buttonsArray = []; // create an empty array to push each new instance into 

navs.forEach(function (navParent) { // loop over each nav element and create an instance of the class for each 
  buttonsArray.push(new MobileNav({
    parentElement: navParent, // set the parent nav ('.wrap')
    nav: '#nav', // set the nav you wish to target
    trigger: '#nav-btn', // the button you wish to use to toggle the nav
    activeClass: 'active', // the class you wish to add to toggle the nav
    open: true // open or close the nav on page load
  }));
});




