import { object, string } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ValidationFormSchema = object({
  full_name: string().label("Full Name").required(),
  work_email: string().email().label("Work Email").required(),
  phone_number: string()
    .matches(phoneRegExp, "Phone number is not valid")
    .label("Phone Number")
    .required(),
  company_name: string().label("Company Name").required(),
  job_title: string().label("Job Title").required(),
  current_system: string().label("Current System").required(),
}).required();

export default ValidationFormSchema;
