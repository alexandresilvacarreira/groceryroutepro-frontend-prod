import {User} from "./interfaces";

function isUser(obj: any): obj is User {
  return obj !== false && obj !== null && typeof obj === 'object' && 'name' in obj && 'currentShoppingList' in obj; // estas condições bastam
}

export {
  isUser,
}
