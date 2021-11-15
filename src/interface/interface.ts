export interface Itecnology {
  image: any;
  title: string;
}

export interface Iopen {
  open: string;
}

export interface IProject {
  id?: string;
  title: string;
  description: string;
  link: string[];
  item: string[];
}

export interface IProjectState {
  loading: boolean;
  projects: IProject[];
}

export interface IAuth {
  authenticated: boolean;
  user: {};
}

export interface IUser {
  email: string;
  createdAt: number;
}

export interface IFormTechonology {
  id?: string;
  technology: string;
  urlimage: string;
  description: string;
  url?: string;
}

export interface ITechnologyState {
  save: boolean;
  technology: IFormTechonology[];
  loading: boolean;
}
