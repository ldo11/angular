import {Media} from './media';

export class User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  display: string;
  email: string;
  password: string;
  status: string;
  avatar: Media;
  constructor() {
    this.avatar = new Media();
  }
}
