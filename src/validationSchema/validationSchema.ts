import  * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup.string().email("ingresa un email valido").required("el email no puede estar vacio"),
    password: yup.string().required("la contraseña no puede estar vacia")
})

export const FormWebPageSchema = yup.object().shape({
    title: yup.string().required("el titulo no puede estar vacio"),
    description: yup.string().required("la descripcion no puede estar vacia"),
    link: yup.string().required("la url no puede estar vacia"),
    
})

export const FormRegisterYup = yup.object().shape({
    email: yup.string().email("ingresa un email valido").required("el email no puede estar vacio"),
    password: yup.string().required("la contraseña no puede estar vacia"),
    confirPassword: yup.string().required("la contraseña no puede estar vacia")
})

export const FormTEchonologyYup = yup.object().shape({
    technology:yup.string().required("required field"),
        urlimage:yup.string().url().required("required field"),
        description:yup.string().required("required field"),
        url:yup.string().url("url must be a valid URL")
})