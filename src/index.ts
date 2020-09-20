import { User } from "./models/user";

const user = new User({ name: "Gui", age: 26 });

user.set({ name: "new name" });

console.log(user.get("name"));
console.log(user.get("age"));
