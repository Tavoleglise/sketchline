import create from "zustand";

type Client = {
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  profession?: string;
};

type ClientState = {
  client: Client;
  setClient: (client: Client) => void;
};

const useClientStore = create<ClientState>((set) => ({
  client: {
    username: "Tavoleglise",
    firstName: "Gustavo",
    lastName: "Leglise",
    avatar: "",
    profession: "Software Engineer",
  },

  setClient: (client: Client) => set(() => ({ client })),
}));

export default useClientStore;
