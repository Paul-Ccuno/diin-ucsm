import Head from "next/head"

import Layout from "components/layout"
import LoginContainer from "components/login"
import FormLogin from "components/login/formLogin"

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <LoginContainer>
          <div className="Login">
            <FormLogin />
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
  )
}

export default Login
