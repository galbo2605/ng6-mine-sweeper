export class Chat {
  constructor(public room: string,
              public user: string,
              public users: string[],
              public messages?: Message[]) {
  }
}

export class Message {
  constructor(public user: string,
              public message: string,
              public time: string) {
  }
}
