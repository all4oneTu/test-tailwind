import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    uri: "https://eupen.stepzen.net/api/eager-joey/__graphql",
    headers: {
        Authorization: `qpikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
    },
    cache: new InMemoryCache(),
});

export default client;