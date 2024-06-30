import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers.js";
import typeDefs from "./Typedefs.js";


// Creación del servidor Apollo
const server = new ApolloServer({
    typeDefs,
    resolvers
});

//Connect to database
import('./drivers/connect-db.js')


// Inicio del servidor
async function startServer() {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 3600 }
    });

    console.log(`🚀 Servidor listo en ${url}`);
}

startServer().catch(error => {
    console.error('Error al iniciar el servidor:', error);
});