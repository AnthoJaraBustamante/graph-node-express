"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphqlTools = (0, tslib_1.__importStar)(require("graphql-tools"));
const resolvers = (0, tslib_1.__importStar)(require("./resolvers"));
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
exports.default = graphqlTools.makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers.default
});
