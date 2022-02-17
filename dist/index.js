"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const express_graphql_1 = require("express-graphql");
const schema_1 = (0, tslib_1.__importDefault)(require("./schema"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    graphiql: true,
    schema: schema_1.default
}));
app.listen(PORT, () => console.log('listening on port 3000'));
