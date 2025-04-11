export interface User {
  name: string;
  email: string;
  sub: string;
}

export class UserFunctions implements User {
  name: string;
  email: string;
  sub: string;
  constructor(public user: User) {
    this.name = user.name;
    this.email = user.email;
    this.sub = user.sub;
  }
}
