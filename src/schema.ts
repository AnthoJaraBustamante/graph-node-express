import * as graphqlTools from "graphql-tools";
import * as resolvers from "./resolvers";

const typeDefs = `
    type Query {
        hello: String
    }
`;

export default graphqlTools.makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers.default
}); 