import { useState } from "react"

import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  VisibilityOff,
  Visibility,
} from "@mui/material"

const FormLogin = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  })

  const handleChangeFormLogin = (prop) => (e) => {
    setFormLogin({
      ...formLogin,
      [prop]: e.target.value,
    })
  }

  const handleSubmitFormLogin = (e) => {
    e.preventDefault()

    console.log(formLogin)
  }

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmitFormLogin}>
      <TextField
        fullWidth
        id="email"
        label="Email"
        size="small"
        variant="filled"
        helperText="Enter your email"
        onChange={handleChangeFormLogin("email")}
      />
      <TextField
        fullWidth
        id="password"
        label="Password"
        size="small"
        type="password"
        variant="filled"
        helperText="Enter your password."
        onChange={handleChangeFormLogin("password")}
      />
      <Button fullWidth type="submit" variant="contained">
        Signin
      </Button>
    </form>
  )
}

export default FormLogin
