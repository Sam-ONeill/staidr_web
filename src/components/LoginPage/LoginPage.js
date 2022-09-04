import React, { Component } from 'react'
import event from  '../../events'
import {Grid, Header, Icon, Form, Message, Button} from 'semantic-ui-react';
import AuthenticationButton from "./AuthenticationButton";
import {useAuth0, withAuth0} from '@auth0/auth0-react';

export class LoginPage extends Component {


  state = {
    nickname: '',
    error: ''
  }


  //isvalid = ({ nickname }) => nickname

  setUser = ( { user, isUser} ) =>  {
    if( isUser ) {
      this.setState({ error: 'This user is already signed in'})
    } else {
      this.setState({ error : '' })
      this.props.setUser( user )
    }
  }

  handleChange = e => {
    this.setState({ nickname: e.target.value })
  }


  handleSubmit = async () => {
    const {user} = await this.props.auth0;

    this.setState({nickname: user.nickname})
    console.log("handle submit" + this.state);

    let {socket} = this.props
    let {nickname} = this.state


    socket.emit(event.IS_USER, nickname, this.setUser);
  }

  render() {

    return (

      <Grid
        style={{ height: '100vh', padding: '0px', margin: '0px' }}
        textAlign='center'
        verticalAlign='middle'
      >
        <Grid.Column computer={ 6 } tablet={ 8 } mobile={ 14 } >

          <Header as='h2' icon textAlign='center' color='green'>
            <Icon name='book' />
            Staidr
          </Header>
          <AuthenticationButton>

          </AuthenticationButton>
          <Button onClick={this.handleSubmit}>Continue</Button>
        </Grid.Column>
      </Grid>
    )
  }
}

export default withAuth0(LoginPage)
