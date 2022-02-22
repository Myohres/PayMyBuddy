import {User} from "./user";

export interface Transaction {
  id: number;
  sender: User;
  recipient: User;
  amount : number;
  description : string
}
