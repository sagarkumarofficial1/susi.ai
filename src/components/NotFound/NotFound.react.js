import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import './NotFound.css';
import LogoImg from '../../images/susi-logo.svg';
import UserPreferencesStore from '../../stores/UserPreferencesStore';
import Login from '../Auth/Login/Login.react';
import SignUp from '../Auth/SignUp/SignUp.react';
import Dialog from 'material-ui/Dialog';
import ForgotPassword from '../Auth/ForgotPassword/ForgotPassword.react';
import Close from 'material-ui/svg-icons/navigation/close';
import Footer from '../Footer/Footer.react';


export default class NotFound extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            loginOpen: false,
            openForgotPassword: false
        }
    }
    handleOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({
          open: false,
          loginOpen: false,
          openForgotPassword: false
        });
    };
    handleLoginOpen = () => {
        this.setState({
            loginOpen: true,
            open: false,
            openForgotPassword:false
        })
    }
    handleLoginClose = () => {
        this.setState({
            loginOpen: false,
        })
    }
    handleForgotPassword = () => {
        this.setState({
          openForgotPassword: true,
          loginOpen: false
        });
    }
    render() {
        const closingStyle ={
          position: 'absolute',
          zIndex: 1200,
          fill: '#444',
          width: '26px',
          height: '26px',
          right: '10px',
          top: '10px',
          cursor:'pointer'
        }
        const closingStyleLogin = {
            position: 'absolute',
            zIndex: 1200,
            fill: '#444',
            width: '26px',
            height: '26px',
            right: '10px',
            top: '10px',
            cursor: 'pointer'
        };
        const bodyStyle = {
            'padding': 0,
            textAlign: 'center'
        }
        return (
            <div>
                <div className='container-fluid not-found-banner'>
                    <h2 >
                        <a className='susilogo'  >
                            <img
                                src={LogoImg}
                                to={'/'}
                                alt='Page Not Found' />
                        </a>
                    </h2>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                    <div className='button-wrapper'>
                      <Link to={'/'} className='actionButton'>
                          <RaisedButton
                              className='notfound-button'
                              label='Chat With SUSI'
                              backgroundColor={
                              UserPreferencesStore.getTheme() ? '#4285f4' : '#19314B'}
                              labelColor='#fff'
                          />
                      </Link>
                      <br />
                        <RaisedButton
                                className='notfound-button'
                                label='SignUp to SUSI'
                                onTouchTap={this.handleOpen}
                                backgroundColor={
                                UserPreferencesStore.getTheme() ? '#4285f4' : '#19314B'}
                                labelColor='#fff'
                        />
                      <br />
                        <RaisedButton
                            className='notfound-button'
                            label='SignIn to SUSI'
                            onTouchTap={this.handleLoginOpen}
                            backgroundColor={
                                UserPreferencesStore.getTheme() ? '#4285f4' : '#19314B'}
                            labelColor='#fff'
                        />
                    </div>
                </div>
                <Footer />
                {/* Login */}
                <Dialog
                    className='dialogStyle'
                    modal={true}
                    open={this.state.loginOpen}
                    autoScrollBodyContent={true}
                    bodyStyle={bodyStyle}
                    contentStyle={{ width: '35%', minWidth: '300px' }}
                    onRequestClose={this.handleClose}>
                    <Login {...this.props}
                    handleForgotPassword={this.handleForgotPassword}/>
                    <Close style={closingStyleLogin} onTouchTap={this.handleClose} />
                </Dialog>
                {/* SignUp */}
                <Dialog
                    className='dialogStyle'
                    modal={true}
                    open={this.state.open}
                    autoScrollBodyContent={true}
                    bodyStyle={bodyStyle}
                    contentStyle={{ width: '35%', minWidth: '300px' }}
                    onRequestClose={this.handleClose}>
                    <SignUp {...this.props}
                    onRequestClose={this.handleClose}
                    onLoginSignUp={this.handleLoginOpen}/>
                    <Close style={closingStyle}
                    onTouchTap={this.handleClose} />
                </Dialog>
                <Dialog
                    className='dialogStyle'
                    modal={false}
                    open={this.state.openForgotPassword}
                    autoScrollBodyContent={true}
                    contentStyle={{width: '35%',minWidth: '300px'}}
                    onRequestClose={this.handleClose}>
                    <ForgotPassword {...this.props}
                    showForgotPassword={this.showForgotPassword}/>
                    <Close style={closingStyle}
                    onTouchTap={this.handleClose}/>
                  </Dialog>
            </div>

        );
    };
}
