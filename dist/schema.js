"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphqlTools = require("graphql-tools");

var _resolvers = require("./resolvers");

const typeDefs = `
    type Query {
        hello: String
    }
`;

var _default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolvers.resolvers
});

exports.default = _default;
//# sourceMappingURL=schema.js.map