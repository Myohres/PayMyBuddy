import {Contact} from "./contact";
import {Bank} from "./bank";

export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  amount: number;
  contactList: Contact[];
  bankList: Bank[];
}
