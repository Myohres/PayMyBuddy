import {User} from "./user";
import {Bank} from "./bank";

export interface ExtTransaction {
  id: number;
  user: User;
  bank: Bank;
  amount : number;
  description : string
}
