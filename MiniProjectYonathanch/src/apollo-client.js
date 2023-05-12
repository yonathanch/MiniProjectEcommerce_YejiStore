import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new  ApolloClient({
    uri: 'https://workable-grizzly-45.hasura.app/v1/graphql', //base url API
    cache: new InMemoryCache, //setting menambahkan cache
    headers:{
        'x-hasura-admin-secret': 'RRxPKhJFi3Fs4CQ8aepa4K6BP8QIcMHHX49ky2eqmVo77zmUaafhZYoafFwbkkWp'

    }
})

export default client