import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {

    //id: string // Mongo already provides it
    @Prop({
        unique: true,
        index: true, 
    })

    name: string;

    @Prop({
        unique: true,
        index: true, 
    })
    no: number;
}

// This allows the usege of a schema for the data creation in the DB
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
