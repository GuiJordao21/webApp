import { UserList } from "./views/UserList"
import { User, UserProps } from "./models/User"
import { BaseCollection } from "./models/BaseCollection"

const users = new BaseCollection("http://localhost:3000/users", (json: UserProps) => {
  return User.buildUser(json)
})

users.on("change", () => {
  const root = document.getElementById("root")

  if(root){
    new UserList(root, users).render();
  }
})

users.fetch();