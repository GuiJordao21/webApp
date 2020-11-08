import { BaseCollection } from "../models/BaseCollection";

export abstract class BaseCollectionView<T, K>{
  constructor(public parent:Element, public collection: BaseCollection<T, K>) {}

  abstract renderItem(model:T, itemParent: Element):void;

  render():void{
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");

    for(let model of this.collection.models) {
      const itemParent = document.createElement("div")
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    }

    this.parent.append(templateElement.content);
  }
}