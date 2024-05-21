import create from "zustand";
import { Client, ClientState } from "../models/client.models";
import { getFromStorage, setToStorage } from "../utilities";

const useClientStore = create<ClientState>((set) => ({
  client: getFromStorage("client", "session", {
    username: "",
    firstname: "",
    lastname: "",
    avatarUrl: "",
    profession: "",
    email: "",
  }),

  setClient: (client: Client) =>
    set(() => {
      return { client: setToStorage("client", client, "session") };
    }),
}));

export default useClientStore;
