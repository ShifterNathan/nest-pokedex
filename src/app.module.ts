import { join } from 'path'; // It comes from node
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';


@Module({
  imports: [

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }),
    // Mongo configuration, uses the same port than the DB port
    // there is only one root in the whole app (forRoot)
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon '), 

    PokemonModule, CommonModule,

  ],
})
export class AppModule {}
