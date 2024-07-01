export interface UserInterface {
  image: string;
  username: string | null;
}

export interface IMenuConfig {
  icon: string;
  name: string;
  route: string;
  permissions?: string[];
}

export interface IEvent {
  currentTarget: Element | null;
}
