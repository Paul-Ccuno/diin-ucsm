import * as yup from 'yup'

const currentDate = new Date()

const Researcher = yup.object().shape({
	dni: yup
		.string()
		.matches(/^\d{8}(?:[-\s]\d{4})?$/, 'Ingrese un DNI válido')
		.required('El DNI es requerido'),
	email: yup
		.string()
		.email('Ingrese un correo electrónico válido')
		.required('El correo electrónico es requerido'),
	password: yup.string().required('La contraseña es requerida'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Debe coincidir con la contraseña')
		.required('La confirmaci´ón de la contraseña es requerida'),
	name: yup.string().required('El nombre es requerido'),
	lastName: yup.string().required('El apellido es requerido'),
	birthDate: yup
		.date()
		.max(new Date(currentDate - 1000 * 60 * 60 * 24 * 360 * 18)),
	avatar: yup.object(),
	abstract: yup.string(),
})

export default Researcher
