import create from "zustand";
import { ClientState, Client } from "./models";
import { getFromStorage, setToStorage } from "../../utilities";

const useClientStore = create<ClientState>((set) => ({
  client: getFromStorage("client", "session", {
    username: "",
    firstName: "",
    lastName: "",
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
