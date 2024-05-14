// start your server here
const server = require("./api/server.js");

const port = process.env.PORT || 9000;

server.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});