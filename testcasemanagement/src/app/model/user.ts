import {Media} from './media';
import {Profile} from './profile';

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
  cover: Media;
  // phoneNumber: string;
  authorities: Array<any>;
  profile: Profile;
  roles: Array<any>;
  constructor() {
    this.avatar = new Media();
    this.cover = new Media();
  }
}
