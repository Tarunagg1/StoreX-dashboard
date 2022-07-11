import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem, NavLink
} from "shards-react";
import { connect } from 'react-redux';
import { logoutUserAction } from '../../../../redux/actions/auth.Actions';
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom';

class UserActions extends Component {


  constructor(props) {
    // this.dispatch = useDispatch();
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  logout = () => {
    this.props.logoutUserAction();
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }



  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle style={{ cursor: 'pointer', marginTop: '10px' }} caret tag={NavLink} className="text-nowrap px-3">
          {/* <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../assets/images/0.jpg")}
            alt="User Avatar"
          />{" "} */}
          <span className=" d-md-inline-block">tarun@gmail.com</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link}  to="profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>

          <DropdownItem divider />
          <DropdownItem onClick={this.logout} className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  // return {
  //   logoutUser: () => dispatch(logoutUser),
  // }

  return bindActionCreators({ logoutUserAction }, dispatch)
}


export default connect(null, mapDispatchToProps)(UserActions);