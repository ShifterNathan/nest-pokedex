import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [ 
    ConfigModule,
    // This creates the references to the schema created on the pokemon.entity 
    MongooseModule.forFeature([
      {
      name: Pokemon.name, // The name comes from the Document  
      schema: PokemonSchema,
      }
    ])
  ],
  exports: [
    MongooseModule
  ]
})
export class PokemonModule {}
