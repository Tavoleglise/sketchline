export interface Client {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  location: location;
  avatar?: string;
  profession?: string;
}

export interface location {
  city: string;
  country: string;
}

export interface ClientState {
  client: Client;
  setClient: (client: Client) => void;
}
