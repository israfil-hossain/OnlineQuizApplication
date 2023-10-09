import { API } from "../config/axiosConfig";


const getControl = () => {
  return API.get("/control");
};


const ControlService = {
    getControl,
};

export default ControlService;
