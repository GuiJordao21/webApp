import { BaseCollectionView } from "./BaseCollestionView"
import { UserShow } from "./UserShow"
import { User, UserProps } from "../models/User"

export class UserList extends BaseCollectionView<User, UserProps> {
  renderItem(model: User,itemParent:Element ){
    new UserShow(itemParent, model).render()
  }
}