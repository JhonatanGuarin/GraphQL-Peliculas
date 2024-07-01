import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers.js";
import typeDefs from "./typeDefs.js";

// Creación del servidor Apollo con introspection y playground habilitados
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,  // Habilita introspection en producción
    playground: true,     // Habilita playground en producción
});

// Connect to database
import('./drivers/connect-db.js');

// Inicio del servidor
async function startServer() {
    const { url } = await startStandaloneServer(server, {
        listen: { port: process.env.PORT || 3600 }  // Usa el puerto de la variable de entorno PORT o 3600
    });

    console.log(`🚀 Servidor listo en ${url}`);
}

startServer().catch(error => {
    console.error('Error al iniciar el servidor:', error);
});
