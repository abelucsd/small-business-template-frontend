import LoginForm from "./LoginForm"

const Login = () => {
  return (
    <div className="page-container">
      <h1 className="ml-4 mr-4 md:ml-0 md:mr-0">Login</h1>
      {/* Content */}      
      <div className="flex flex-col ml-4 mr-4 md:mt-12 md:mx-auto 
        md:bg-white md:p-16 md:shadow-sm">
        <LoginForm />
      </div>
    </div>
  )
};

export default Login;