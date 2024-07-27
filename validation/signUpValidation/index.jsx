import * as Yup from 'yup';

const signUpValidationSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Nome é obrigatório')
    .min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: Yup.string()
    .required('Email é obrigatório')
    .email('Email inválido'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

export default signUpValidationSchema;
