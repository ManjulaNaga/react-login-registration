import React,{Component} from "react";
import { connect } from 'react-redux';
import { login } from './reducer';
import './LoginForm.css';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import RegistrationForm from './RegistrationForm';
import { createBrowserHistory } from 'history';
import { Home } from './Home';
import loginImage from './login.jpg';
import { LoginController } from './login.controller';

class LoginForm extends Component{
  constructor(props){
    super(props);
    let isFirstTimeUser = false;

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegSubmit = this.handleRegSubmit.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    console.log("in handleSubmit()");

    //const history = createBrowserHistory();

      let { email,password } = this.state;
      this.props.login(email,password);
      this.setState({
        email:'',
        password:'',
        isFirstTimeUser:false
      });

    //}
    //console.log(" Login sucessfully completed.....");
  }
handleRegSubmit(e){
    //this.isFirstTimeUser = true;
    this.setState({
      isFirstTimeUser:true
    });
    console.log(this.state);
}


  render(){
    let {email,password} = this.state;
    let {isLoginPending,isLoginSucess,loginError } = this.props;

 console.log("this.props:");
 console.log(this.props);
    return(
      <div>
      <form name="loginForm" onSubmit={this.handleSubmit}>
              <div className="form-group-collection">
                <img src = {loginImage} alt = "loginImage"/>
                <div className="form-group" > <h2 className="heading">Login Here</h2>
                  <table>
                    <tr>
                      <td>
                         <label>Email:</label>
                      </td>
                      <td>
                        <input type="email" name="email" onChange={e => this.setState({email: e.target.value})} value={email}/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Password:</label>
                      </td>
                      <td>
                        <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>
                      </td>
                    </tr>
                  </table>
                </div>
                <br/>
              <button className="left" type="submit" value="Login">Login</button>
              <div className="message">
                { isLoginPending && <div className ="loader">Please wait...</div> }
                { isLoginSucess && <div>Success.</div> }
                { loginError && <div>{loginError.message}</div> }
              </div>
              <br/>
        </div>
          </form>
          <Router>
            <div>

              <button className="left btn" onClick ={this.handleRegSubmit} value="register">Click here to register now</button>
          </div>
        </Router>
          <RegistrationForm isFirstTimeUser = {this.state.isFirstTimeUser}/>

          </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginError:state.loginError,
    isLoginSucess: state.isLoginSucess,
    isLoginPending:state.isLoginPending
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email,password))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
