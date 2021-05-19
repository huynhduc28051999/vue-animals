export interface LoginInput {
  email: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  error: string | null;
  loading: boolean;
}

export interface AnimalState {
  animals: any[];
  error: string | null;
  loading: boolean;
}
