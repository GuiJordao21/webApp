import { Eventing } from "./Eventing";
import { Sync } from "./Sync"
 
export interface UserProps {
  age?: number;
  id?: number;
  name?: string;
}

const rootUrl = "http://localhost:3000/user"

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  
}
