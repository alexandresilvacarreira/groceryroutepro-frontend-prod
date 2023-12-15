interface Signup {
  name: string,
  email: string,
  password: string
}

interface ServerMessage {
  message: string,
  success: boolean,
}

export {
  Signup,
  ServerMessage
}
