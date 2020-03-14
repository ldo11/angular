import {Media} from './media';

export class User {
  _id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  avatar: Media;
  constructor() {
    this.avatar = new Media();
  }
}
