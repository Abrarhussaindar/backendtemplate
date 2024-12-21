const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Backend",
        description: "Docs for all the API's"
    },
    host: "localhost:8080",
    schemes: ["http"],
    tags: [
        { name: "Auth", description: "All the Api's related to Authentications" },
        { name: "User", description: "All the Api's related to user" },
        { name: "Media", description: "All the Api's related to Media" },
        { name: "Notifications", description: "All the Api's related to Notifications" },
        { name: "Payments", description: "All the Api's related to Payments" },
        { name: "Posts", description: "All the Api's related to Posts" },
        { name: "Reports", description: "All the Api's related to Reports" },
        { name: "Chat V1", description: "All the Api's related to Chat V1" },
        { name: "SuperUser", description: "All the Api's related to SuperUser" },
    ]
};

const outputFile = "./swagger-output.json";
const routes = ["./src/routes.config.js"];

swaggerAutogen(outputFile, routes, doc);
