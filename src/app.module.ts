import { join } from 'path'; // It comes from node
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './common/config/env.config';
import { JoiValidationSchema } from './common/config/joi.validation';


@Module({
  imports: [

    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema
    }),

    // there is only one root in the whole app (forRoot)
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }),
    // Mongo configuration, uses the same port than the DB port
    
    MongooseModule.forRoot(process.env.MONGODB), 
    PokemonModule, 
    CommonModule, 
    SeedModule,

  ],
})
export class AppModule {}
