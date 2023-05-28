import { object, string } from 'yup';

const passwordValidationSchema = object({
   
    password: string().required("Password is Required").min(6),
   
})

export default passwordValidationSchema; 