interface Signup {
  name: string,
  email: string,
  password: string
}

interface ServerMessage {
  message: string,
  success: boolean,
  userRole?:string
}

interface Login {
  email: string,
  password: string
}

export {
  Signup,
  Login,
  ServerMessage,
}
