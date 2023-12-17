interface Signup {
  name: string,
  email: string,
  password: string
}

interface ServerResponse {
  message: string,
  success: boolean,
  userRole?:string,
  user?:User
}

interface Login {
  email: string,
  password: string
}

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  includeWhiteLabel: boolean;
  maxStoreRadiusKm: number;
  vehicleFuelType: string;
  vehicleConsumption: number;
  stores: Store[];
  role: Role;
}

interface Role {
  id: number;
  name: string;
  users: User[]; // Assuming you have a User interface defined
}

interface Store {
  id: number;
  name: string;
  users: User[]; // Assuming you have a User interface defined
}


export {
  Signup,
  Login,
  ServerResponse,
  User,
  Role,
  Store
}
