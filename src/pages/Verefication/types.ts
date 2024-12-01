export interface ICard {
  title: string;
  desc: string;
}

export interface IVerificationContent {
  title: string;
  button_text: string;
  link_text: string;
  link_path: string;
  inputs: Array<{
    type: string;
    placeholder: string;
    name: string;
  }>;
}
