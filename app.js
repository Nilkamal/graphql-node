const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");
const app = express(); //Initialize Express or create server

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log(`I'm Listening on port ${4000}`);
}); // Open port 4000 to response to the request
