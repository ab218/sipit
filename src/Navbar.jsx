import React, {Component} from 'react';


const styles ={

navBar : {
  backgroundColor : '#FFFF',
  color: '#5d4427',
  fontSize: '30px',
  boxShadow: '0 9px 10px 0 rgba(0,0,0,0.2)',
  fontFamily: 'Karla',
  paddingTop: '20px',
},

navHead : {
 margin: '10px 0 0 20px',
 float: 'left',
},

navIcon:{
//  paddingRight: '20px',
},

navBody: {
 display: 'inline-flex',
 padding: '10px 0 0 70px',
 fontSize: '20px',
},

navDropdown : {

},

dropContent: {
//  display: 'none',
 display: 'grid',
 position: 'absolute',
 minWidth: '160px',
 boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
 zIndex: '1',

},

dropItem : {
  color: 'black',
  padding: '12px 16px',
 // text-decoration: none;
},

navItem :{
  padding: '12px 16px',
},
memberControl : {
  textAlign: 'right',
  fontSize: '20px',
},

}
class NavbarComponent extends Component {
    constructor(props) {
      super(props);
    }

  
    render() {

      const { navBar, navHead, navIcon, navItem, navBody, dropContent, dropItem, memberControl } = styles

       return (
           <div className="navBar" style={navBar}>
        <div className="navHead" style={navHead}>
          <div className="navBrand">
            <i className="fas fa-coffee" style={navIcon}></i> Sip-It
          </div>
        </div>
        <div className="navBody" style={navBody}>
          <div className="navItem" style={navItem}>
            Home
          </div>
          <div className="navItem" style={navItem}>
            About
          </div>
          <div className="navDropdown" className="navItem"style={navItem}>Menu<i className="fas fa-caret-down"></i>
            <div className="dropContent" style={dropContent} onMouseOver={(e)=> {}}>
            <a className="dropDownItem" style={dropItem} href="#">Action</a>
            <a className="dropDownItem" style={dropItem} href="#">Action</a>
            <a className="dropDownItem" style={dropItem} href="#">Action</a>
            <a className="dropDownItem" style={dropItem} href="#">Action</a>
            </div>
          </div>
        </div>
        <div style={memberControl}>
        <span>Log In</span>
        <span>Sign Up</span>
        </div>
      </div>
        );
    }
  }

  export default NavbarComponent;
