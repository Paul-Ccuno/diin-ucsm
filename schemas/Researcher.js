import { EMPTY, VALID } from 'errors/es'
import * as yup from 'yup'

export const researcherFields = {
	dni: 'dni',
	email: 'email',
	password: 'password',
	confirmPassword: 'confirmPassword',
	name: 'name',
	lastName: 'lastName',
	birthDate: 'birthDate',
	avatar: 'avatar',
	abstract: 'abstract',
}

const currentDate = new Date()

const Researcher = yup.object().shape({
	dni: yup
		.string()
		.matches(/^\d{8}(?:[-\s]\d{4})?$/, EMPTY.DNI)
		.required(VALID.DNI),
	email: yup.string().email(VALID.EMAIL).required(EMPTY.EMAIL),
	password: yup.string().required(EMPTY.PASSWORD).min(8, VALID.PASSWORD),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], VALID.CONFIRMPASSWORD)
		.required(EMPTY.CONFIRMPASSWORD),
	name: yup.string().required(EMPTY.NAME),
	lastName: yup.string().required(EMPTY.LASTNAME),
	birthDate: yup
		.date()
		.max(
			new Date(currentDate - 1000 * 60 * 60 * 24 * 360 * 18),
			VALID.BIRTHDATE
		),
	avatar: yup.object(),
	abstract: yup.string(),
})

export default Researcher
