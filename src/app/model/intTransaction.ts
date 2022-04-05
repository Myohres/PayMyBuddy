import {User} from "./user";

export interface IntTransaction {
  id: number;
  sender: User;
  recipient: User;
  amount : number;
  description : string
}
