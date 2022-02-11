"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _schema = _interopRequireDefault(require("./schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
puerto = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.json({
    message: "Hello World"
  });
});
app.use('/graphql', (0, _expressGraphql.graphqlHTTP)({
  graphiql: true,
  schema: _schema.default
}));
app.listen(puerto, () => console.log('listening on port 3000'));
//# sourceMappingURL=index.js.map