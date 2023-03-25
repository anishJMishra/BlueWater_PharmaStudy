import {createVendiaClient} from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://c87kv67orl.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://q73de36kyi.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey:`8C6RbPfpgewwRsW2GNXib7XedCFQr4j2tN4D9iJ8zAfH`, 
  });

  console.log('Vendia client:', client);

const {entities} = client;

const useJaneHopkins = () =>{
    console.log('Entities:', entities);
    return {entities};
};

export default useJaneHopkins;