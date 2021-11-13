import { maxDateAdult } from 'utils'
import * as yup from 'yup'
import { EMPTY, VALID } from './errors/es'

export const personalDataFields = {
	dni: 'dni',
	email: 'email',
	name: 'name',
	lastName: 'lastName',
	birthDate: 'birthDate',
	avatar: 'avatar',
	abstract: 'abstract',
}

const PersonalData = yup.object().shape({
	abstract: yup.string().max(200, VALID.abstract),
	dni: yup
		.string()
		.matches(/^\d{8}(?:[-\s]\d{4})?$/, VALID.DNI)
		.required(EMPTY.DNI),
	name: yup.string().required(EMPTY.NAME),
	lastName: yup.string().required(EMPTY.LASTNAME),
	email: yup.string().email(VALID.EMAIL).required(EMPTY.EMAIL),
	birthDate: yup.date().max(maxDateAdult(), VALID.BIRTHDATE),
	avatar: yup.object(),
})

export default PersonalData
