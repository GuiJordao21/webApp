import { BaseCollection } from "./models/BaseCollection";
import { User, UserProps } from "./models/User";

const collection = new BaseCollection<User, UserProps>(
  "http://localhost:3000/users",
  (json: UserProps) => User.buildUser(json)
)

collection.on("change", ()=>{
  console.log(collection.models);
})

collection.fetch()