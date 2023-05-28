import { API } from "../config/axiosConfig";


const getSlider = () => {
  return API.get("/slider");
};


const SliderService = {
  getSlider,
};

export default SliderService;
