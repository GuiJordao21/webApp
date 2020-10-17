import { User } from "./models/User";

const user = new User({id: 3, name:"Aqui estamos novamente em mais um dia", age: 123})

user.on("save", ()=> {
  console.log(user);
})

user.save()