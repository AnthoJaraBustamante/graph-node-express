import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema

}));

app.listen(PORT, () => console.log('listening on port 3000'));
