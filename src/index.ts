import { User } from "./models/User";

const user = new User({id: 3})
console.log(user)
user.fetch()
user.on("change", ()=> {
  console.log(user);
})
