import { BaseDocument, User as BaseUser } from '@makes-apps/lib';

export interface User extends BaseDocument, BaseUser {
  yahoo_email: string;
  first_name: string;
  last_name: string;
}
