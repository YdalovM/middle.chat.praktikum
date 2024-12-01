import { IVerificationContent } from "./types";

export const VERIFICATION_INPUTS_LOGIN = [
  {
    type: "text",
    placeholder: "Логин",
    name: "login",
  },
  {
    type: "password",
    placeholder: "Пароль",
    name: "password",
  },
];

export const VERIFICATION_INPUTS_REGISTER = [
  {
    type: "text",
    placeholder: "Логин",
    name: "login",
  },
  {
    type: "password",
    placeholder: "Пароль",
    name: "password",
  },
];

export const VERIFICATION_CONTENT: Record<string, IVerificationContent> = {
  "/login": {
    title: "Вход",
    button_text: "Зарегистрироваться",
    link_text: "Нет аккаунта?",
    link_path: "/register",
    inputs: VERIFICATION_INPUTS_LOGIN,
  },
  "/register": {
    title: "Регистрация",
    button_text: "Авторизоваться",
    link_text: "Войти",
    link_path: "/login",
    inputs: VERIFICATION_INPUTS_REGISTER,
  },
};
