import useClientStore from "../stores/useClientStore/useClientStore";

const useClient = () => {
  const client = useClientStore((state) => state.client);
  const { setClient } = useClientStore((state) => state);
  return { client, setClient };
};

export default useClient;
