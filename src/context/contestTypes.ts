import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}
  
export type LoginResponse = {
  _id: string;
  idUser: string;
  typeUser: string;
  access_token: string;
  refresh_token: string;
};

export type LoginAccess = {
  email: string;
  senha: string;
};

type User = "Mentor" | "Aluno" | "Admin";

export type UserData = {
  _id: string;
  nome: string;
  email: string;
  telefone: string;
  typeUser: User;
  status: string;
  cidade: string;
  uf: string;
  cpf: string;
  mentoriasAtivas: string[];
  fotos: string;
};

export type LoggedUser = {
  _id: string;
  usuario: string;
  email: string;
  funcao: string;
  urlImage: string;
};

export interface CachedUser {
  name: string;
  refresh_token: string;
}

export interface IToken {
  exp: number;
}
