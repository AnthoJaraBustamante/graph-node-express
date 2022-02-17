import * as graphqlTools from "graphql-tools";
import * as resolvers from "./resolvers";



const typeDefs = `
    type Query {
        hello: String
        age(name:String): Int
        date: String
        tasks:[Task]
    }

    type Task {
        _id: ID
        title: String!
        description: String!
        number: Int
    } 

    type Mutation{
        createTask(input: TaskInput): [Task]
    }

    input TaskInput
    {
        title: String
        description: String
        number: Int
    }

`;

export default graphqlTools.makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers.default
});  