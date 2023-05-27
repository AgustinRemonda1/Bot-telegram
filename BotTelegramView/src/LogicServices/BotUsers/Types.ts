import { IUserType } from 'LogicServices/UserTypes/Types';

export interface IBotSubsUsers {
  userId: number;
  dni: number;
  firstName: string;
  lastName: string;
  dateSubscribe: Date;
  userType?: IUserType[];
  verified: boolean;
}

export interface IGuaraniUsers {
  guaraniUserId: number;
  dni: number;
  email: string;
  profile: string;
  phoneNumber: number;
}

export interface IBotUsers {
  botUserId?: number | null;
  userTypeId: number;
  guaraniUserId?: number | null;
  telUserId: number;
  telLastName: string;
  telFirstName: string;
  telUsername: string;
  guaraniUser?: IGuaraniUsers;
  userType: IUserType;
}
