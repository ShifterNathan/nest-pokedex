import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [ // This creates the references to the schema created on the pokemon.entity 
    MongooseModule.forFeature([{
      name: Pokemon.name, // The name comes from the Document  
      schema: PokemonSchema,
    }])
  ]
})
export class PokemonModule {}
