import { loginForm } from "./forms/loginForm";
const forms={
    loginForm
}

export const getFormFields=(formName)=>{
return forms[formName];
}


