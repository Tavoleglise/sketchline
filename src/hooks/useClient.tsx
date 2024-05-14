import useClientStore from "../stores/useClientStore";

const useClient = () => {
  const { username, lastName, firstName, profession } = useClientStore(
    (state) => state.client
  );
  return { username, lastName, firstName, profession };
};

export default useClient;
