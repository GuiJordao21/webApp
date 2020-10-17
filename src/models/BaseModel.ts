import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  set(update:T):void;
  getAll():T;
  get<K extends keyof T>(key: K): T[K];
}

interface ApiSync<T> {
  fetch(id:number):AxiosPromise;
  save(data: T):AxiosPromise;
}

interface Events {
  on(eventName:string, callback: () => void): void;
  trigger(eventName: string):void;
}

interface HasId {
  id?:number;
}

export class BaseModel<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: ApiSync<T>
  ){}

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  get get() {
    return this.attributes.get
  }

  set(update: T):void {
    this.attributes.set(update);
    this.trigger("change")
  }

  fetch():void {
    const id = this.attributes.get("id");
    console.log(id)
    if(typeof id !== "number"){
      throw new Error("Cannot fetch without an id")
    }

    this.sync.fetch(id).then((response: AxiosResponse):void => {
      this.set(response.data)
    })
  }

  save():void {
    this.sync.save(this.attributes.getAll())
    .then((response: AxiosResponse):void => {
      this.trigger("save");
    })
    .catch(() => {
      this.trigger("error")
    })
  }
}