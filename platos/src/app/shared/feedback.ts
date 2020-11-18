export interface Feedback {
  first: string;
  lastname: string;
  telnum: string;
  email: string;
  agree: boolean;
  conatactType: string;
  message: string;
}

export const ContactType = ['None', 'Tel', 'Email'];
