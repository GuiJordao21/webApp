import { User } from "./models/user";

const user = new User({ name: "Gui", age: 26 });

user.on("change", () => {
  console.log("change 1");
});
user.on("change", () => {
  console.log("change 2");
});
user.on("save", () => {
  console.log("save 1");
});

user.trigger("save");
