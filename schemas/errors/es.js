// Validaciones de campos requeridos o vacios
export const EMPTY = {
	DNI: 'El DNI es requerido',
	EMAIL: 'El correo electrónico es requerido',
	PASSWORD: 'La contraseña es requerida',
	CONFIRMPASSWORD: 'La confirmación de la contraseña es requerida',
	NAME: 'El nombre es requerido',
	LASTNAME: 'El apellido es requerido',
}

// Validaciones de campos con ...
export const VALID = {
	DNI: 'Ingrese un DNI válido',
	EMAIL: 'Ingrese un correo electrónico válido',
	PASSWORD: 'La contraseña debe ser mayor a 8 caracteres',
	CONFIRMPASSWORD: 'Debe coincidir con la contraseña',
	BIRTHDATE: 'Debes ser mayor a 18 años',
	ABSTRACT: 'Su resumen debe contener menos de 200 caracteres',
}
