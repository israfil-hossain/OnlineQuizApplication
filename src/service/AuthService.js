import { toast } from "react-toastify";
import { API } from "../config/axiosConfig";

const signin = (values) => {
  return API.post("/login", values);
};
const signup =(values)=>{
  return API.post("/users/adduser",values);
}

const forgotPassword = (values)=>{
  return API.post("/auth/forgot-password",values);
}
const resetPassword = (token,values)=>{
  return API.post(`/auth/reset-password/${token}`,values)
}
const handleLogout=()=> {
  API.delete("/logout")
    .then((response)=>{
        localStorage.removeItem("token");
        toast.success("Logout Successfully!");
        return window.location.replace("/login"); 
    })
    .catch((err)=>{
      toast.error("Something is Wrong,");
      console.log("Err => ", err);  
    })
};


const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

const AuthService = {
  signin,
  getCurrentUser,
  handleLogout,
  signup,
  forgotPassword, 
  resetPassword,
};
export default AuthService;
