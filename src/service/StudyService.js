import { API } from "../config/axiosConfig";


const getStudy = () => {
  return API.get("/study");
};

const singleStudy = (id) =>{
    return API.get(`/study/${id}`);
}


const StudyService = {
    getStudy,
    singleStudy,
};

export default StudyService;
