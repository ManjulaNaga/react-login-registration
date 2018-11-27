const SET_REG_PENDING = 'SET_REG_PENDING';
const SET_REG_SUCESS = 'SET_REG_SUCESS';
const SET_REG_ERROR = 'SET_REG_ERROR';

export function registration(firstName,lastName,email,password,address,zip,phone){
  return dispatch => {
    dispatch(setRegPending);
    dispatch(setRegSucess);
    dispatch(setRegError);

    callRegApi(firstName,lastName,email,password,address,zip,phone,error => {
      dispatch(setRegPending(false));
      if(!error){
        dispatch(setRegSucess(true));
      }
      else{
        dispatch(setRegError(error));
      }
    });
  }
}

function setRegPending(isRegPending){
  return{
    type: SET_REG_PENDING,
    isRegPending
  };
}

function setRegSucess(isRegSucess){
  return{
    type:SET_REG_SUCESS,
    isRegSucess
  };
}

function setRegError(regError){
  return{
    type:SET_REG_ERROR,
    regError
  };
}

function callRegApi(firstName,lastName,email,password,address,zip,phone,callback){
  console.log("in reg api...");
  setTimeout(()=> {
    if(firstName === '' || lastName === ''||email === ''||password === ''||address === '' ||zip === ''){
      return callback(alert('Invalid email and password'));
    }else{
      console.log("Sucessfully logged in..");
      alert("Sucessfully logged in");
      this.setState({isRegConform:true});
      return callback(null);
    }
  },1000);
}
export default function reducer(state = {
  isRegPending: false,
  isRegSucess:false,
  regError:null
},action){
  switch(action.type){
    case SET_REG_PENDING:
    return Object.assign({},state,{
      isRegPending: action.isRegPending
    });

    case SET_REG_SUCESS:
    return Object.assign({},state,{
      isRegSucess:action.isRegSucess
    });

    case SET_REG_ERROR:
    return Object.assign({},state,{
      regError:action.regError
    });

    default:
    return state;
  }
}
