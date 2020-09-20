import { User } from "./models/User";

const user = new User({ id: 1, age: 33, name: "Gui" });

user.events.on("change", () => {
  console.log("test");
});

user.events.trigger("change");
