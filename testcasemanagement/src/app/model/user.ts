import {Media} from './media';

export class User {
  id: number;
  email: string;
  password: string;
  role: string;
  status: string;
  avatar: Media;
  constructor() {
    this.avatar = new Media();
  }
}
