//import { LoginController } from './login.controller';

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCESS = 'SET_LOGIN_SUCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';


export function login(email,password){
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSucess(false));
    dispatch(setLoginError(null));

    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if(!error){
        dispatch(setLoginSucess(true));
      }
      else{
        dispatch(setLoginError(error));
      }
    });
  }
}

function setLoginPending(isLoginPending){
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}
function setLoginSucess(isLoginSucess){
  return {
    type: SET_LOGIN_SUCESS,
    isLoginSucess
  };
}
function setLoginError(loginError){
  return {
    type: SET_LOGIN_ERROR,
    loginError
  };
}


function callLoginApi(email,password,callback){
  console.log("In call login api.....");
  setTimeout(()=> {
    if((email === 'admin@example.com' && password === 'admin')//||
      //  (LoginController.isValidUserId(['admin@example.com','vamsi@example.com','manju@example.com'],email))
      ){
      console.log("Sucessfully logged in..");
      return callback(null);
    }else{
      return callback(alert('Invalid email and password'));
    }
  },1000);
}

export default function reducer(state = {
  isLoginPending: false,
  isLoginSucess:false,
  loginError:null
},action){
  switch(action.type){
    case SET_LOGIN_PENDING:
    return Object.assign({},state,{
      isLoginPending: action.isLoginPending
    });

    case SET_LOGIN_SUCESS:
    return Object.assign({},state,{
      isLoginSucess:action.isLoginSucess
    });

    case SET_LOGIN_ERROR:
    return Object.assign({},state,{
      loginError:action.loginError
    });

    default:
    return state;
  }
}
