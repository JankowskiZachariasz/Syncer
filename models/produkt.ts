import { Schema, model, Types } from 'mongoose';

export interface produktInterface{
  
    enumerator:String,
    name:String,
    type:String,
    lPaczek:Number,
    nrPaczki:Number,
    nrSeryjny1:Number,
    nrSeryjny2:Number,
    nrSeryjny3:Number,
    plcId:Number,
    dlugosc:Number,
  
  
};

var produktSchema = new Schema<produktInterface>({

    enumerator:{type: String , required: false},
    name:{type: String , required: false},
    type:{type: String , required: false},
    lPaczek:{type: Number, required: false},
    nrPaczki:{type: Number, required: false},
    nrSeryjny1:{type: Number, required: false},
    nrSeryjny2:{type: Number, required: false},
    nrSeryjny3:{type: Number, required: false},
    plcId:{type: Number, required: false},
    dlugosc:{type: Number, required: false},
  
});


var produkt = model('produkt', produktSchema);

export default produkt;
