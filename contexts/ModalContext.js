const { createContext, useState } = require('react')

const ModalContext = createContext({ open: false, setOpen: () => {} })

export default ModalContext
