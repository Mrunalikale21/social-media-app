import "./login.scss"

const Login = () => {
  return(
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello world</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium voluptates ex maiores nisi. Corrupti ipsa ipsam dolor quaerat? Facilis a voluptatum repellendus. Iusto maiores id, sint animi labore voluptate!</p>
          <span>Don't you have account</span>
          <button>Register</button>
        </div>

        <div className="right">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <button>Login</button>
        </form>
        </div>
       
      </div>
    </div>
  )
}

export default Login;