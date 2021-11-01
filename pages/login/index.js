import Head from "next/head";

import Layout from "components/layout";
import LoginContainer from "components/login";
import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <LoginContainer>
          <div className="Login">
            <form>
              <TextField
                fullWidth
                id="email"
                label="Email"
                variant="filled"
                helperText="Enter your email"
              />
              <TextField
                fullWidth
                id="password"
                label="Password"
                variant="filled"
                helperText="Enter your password."
              />
              <Button fullWidth type="submit" variant="contained">
                Signin
              </Button>
            </form>
          </div>
        </LoginContainer>
      </Layout>
      <style jsx>{`
        .Login {
          width: 100%;
          padding: 3rem;
          box-shadow: 0 0 4px #000;
        }
        .Login form {
          display: flex;
          flex-direction: column;
        }
        /*  .Login from ~ {
          flex: none;
        } */
      `}</style>
    </>
  );
};

export default Login;
