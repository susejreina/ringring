import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import { Redirect } from 'react-router-dom';


import avatarImage from '../img/user12.jpg';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class AvatarDropdown extends Component {
  state = {
    valueSingle: '3',
    valueMultiple: ['3', '5'],
  };

  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value,
    });
  }

  constructor(props){
      super(props);
      this.state = {
        redirect: false
      }

      this.logout = this.logout.bind(this);
  }

  componentWillMount(){
    if(sessionStorage.getItem('user')) {
      console.log('llamar a un amigo');
    }
    else {
      this.setState({redirect: true});
    }
  }

  logout() {
    sessionStorage.setItem('user','');
    sessionStorage.clear();
    this.setState({redirect: true});
  }



  render() {

    if(this.state.redirect){
      return (<Redirect to={'/login'} />)
    }

    const style= {
      zIndex: '1500'
    }

    return (
      <div>
        <IconMenu
          style={style}
          anchorOrigin={{horizontal:'left', vertical:'bottom'}}
          iconButtonElement={<IconButton>
            <Avatar
              src={avatarImage}
              size={35}
            />
          </IconButton>}
          open={this.state.openMenu}
          onRequestChange={this.handleOnRequestChange}
        >
          <MenuItem primaryText="Sign Out" leftIcon={<i className="material-icons" onClick={this.logout}>power_settings_new</i>} />
        </IconMenu>
      </div>

    );
  }
}
