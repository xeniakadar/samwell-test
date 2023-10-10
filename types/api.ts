export interface Signup {
  id: number;
  name: string;
  email: string;
  signupDate: string;
}

export interface Login {
  userId: number;
  date: string;
  device: string;
}

export interface Upgrade {
  userId: number;
  oldPlan: string;
  newPlan: string;
  upgradeDate: string;
}
