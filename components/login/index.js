const LoginContainer = ({ children }) => {
  return (
    <div className="Login-container">
      {children}
      <style jsx>{`
        .Login-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          padding-top: 2rem;
          width: calc(100vw - 30%);
        }
      `}</style>
    </div>
  );
};

export default LoginContainer;
