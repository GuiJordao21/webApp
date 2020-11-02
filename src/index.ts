import { UserForm } from "./views/UserForm"
import { User } from "./models/User"

const user = User.buildUser({name: "Kleber", age:30})

const userForm = new UserForm(document.getElementById("root"), user);

userForm.render()