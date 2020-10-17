import { BaseModel } from "./BaseModel";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";

 
export interface UserProps {
  age?: number;
  id?: number;
  name?: string;
}

const rootUrl = "http://localhost:3000/users"

export class User extends BaseModel<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }
}
