export type Client = {
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  profession?: string;
  email: string;
};

export type ClientState = {
  client: Client;
  setClient: (client: Client) => void;
};
