interface Signup {
  name: string,
  email: string,
  password: string
}

interface ServerMessage {
  message: string,
  success: boolean,
}

interface Login {
  email: string,
  password: string,
}

export {
  Signup,
  ServerMessage,
  Login
}
