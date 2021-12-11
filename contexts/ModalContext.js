import { createContext } from 'react'

const ModalContext = createContext({
	open: false,
	setOpen: () => {},
	data: null,
	setData: () => {},
})

export default ModalContext
