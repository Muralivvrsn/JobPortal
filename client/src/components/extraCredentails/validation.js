
export function validEmail(email){
  let error = "";
  if (email === "" || email === null) {
    error = "Input field can't be empty";
  } else {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      error= "Invalid email";
    }
  }
  return error;
}

export function validName(name){
  let error = "";
  if (name === "" || name === null) {
    error = "Input filed can't be empty";
  }
  return error;
}

export function validPassword(password){
  let error = "";
  if (password === "" || password === null) {
    error = "Input value can't be empty";
  } else {
    if (password.length <= 5) {
      error = "password must be greater than 5 characters";
    } 
  }
  return error;
}

export function validConfirmPassword(psw,pwd){
  let error = "";
  if(pwd==="" || pwd===null){
    error = "Input value can't be empty";
  }
  else{
    if (psw !== pwd) {
      error = "passowrd doesn't match";
    }
  }
  return error;
}