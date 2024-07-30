import * as Yup from 'yup';

const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email é obrigatório')
    .email('Email inválido'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

export default signInValidationSchema;
