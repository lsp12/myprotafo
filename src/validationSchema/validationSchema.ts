import  * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup.string().email("Ingresa un email valido.").required("El email no puede estar vacio."),
    password: yup.string().required("La contraseña no puede estar vacia.")
})

export const FormWebPageSchema = yup.object().shape({
    title: yup.string().required("El titulo no puede estar vacio."),
    description: yup.string().required("La descripcion no puede estar vacia."),
    link: yup.string().required("La url no puede estar vacia."),
    
})

export const FormRegisterYup = yup.object().shape({
    email: yup.string().email("Ingresa un email valido.").required("El email no puede estar vacio."),
    password: yup.string().required("La contraseña no puede estar vacia."),
    confirPassword: yup.string().required("La contraseña no puede estar vacia.")
})

export const FormTEchonologyYup = yup.object().shape({
    technology:yup.string().required("Required field."),
        urlimage:yup.string().url().required("Required field.").nullable(),
        description:yup.string().required("Required field."),
        url:yup.string().url("Url must be a valid URL.")
})