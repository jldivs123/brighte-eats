import 'reflect-metadata';

import { User } from '@models/User';
import { Service } from '@models/Service';
import { ApolloServer } from '@apollo/server';

import { AppDataSource } from './data-source';

async function boostrap() {
  try {
    // initialize db
    AppDataSource.initialize();

    const schema = await buildSchema({
      resolvers: [UserResolver, ServiceResolver], // Add your resolvers here
      validate: false, // Optional: disable validation
    });

    // Create Apollo Server
    const server = new ApolloServer({
      schema,
    });

    // Start the server
    const { url } = await server.listen(4000);
  } catch (error) {
    console.error(error);
  }
}

boostrap();
