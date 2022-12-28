import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import {
  ApolloClient,
  InMemoryCache,
  // useMutation,
  // useQuery,
  gql,
} from "@apollo/client";

export const createApolloClient = () => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: "wss://knucklebones.hasura.app/v1/graphql",
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            "x-hasura-admin-secret": `APV5wpDbuZe9MLHIQLBeXy126LzerVSuuDsZTt2z2IfTnBtZwJvA8kMqEgGsZrEj`,
          },
        },
      },
    }),
    cache: new InMemoryCache(),
  });
};

export const createApolloClientWithSubscription = () => {
  const subscriptionClient = new SubscriptionClient(
    "wss://knucklebones.hasura.app/v1/graphql",
    {
      reconnect: true,
      connectionParams: {
        headers: {
          "x-hasura-admin-secret": `APV5wpDbuZe9MLHIQLBeXy126LzerVSuuDsZTt2z2IfTnBtZwJvA8kMqEgGsZrEj`,
        },
      },
    }
  );

  subscriptionClient.onConnected(() => {
    console.log("onConnected");
  });
  //subClient.onReconnected(() => { console.log("onReconnected") });
  //subClient.onReconnecting(() => { console.log("onReconnecting") });
  //subClient.onDisconnected(() => { console.log("onDisconnected") });
  //subClient.onError(error => { console.log("onError", error.message) });


  const wsLink = new WebSocketLink(subscriptionClient);

  const client = new ApolloClient({
    link: wsLink,
    cache: new InMemoryCache(),
  });

  return client;
};

export const SET_PLAYER_ONE_CONNECTED = gql`
  mutation ($todo: String!, $isPublic: Boolean!) {
    insert_todos(objects: { title: $todo, is_public: $isPublic }) {
      affected_rows
      returning {
        id
        title
        created_at
        is_completed
      }
    }
  }
`;

export const setPlayerOneConnected = () => {};

export const createGame = () => {};

export const updateGame = () => {};

export const rollDice = () => {};
