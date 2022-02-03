import type {operacjeInterface} from '../models/operationsPLC';
import type {paczkaInterface} from '../models/paczka'
require('dotenv').config()

class ResolverUtil{


    generatePaczkaCommandToDeleteFromPLC(toDelete : paczkaInterface):operacjeInterface{
        var operation :operacjeInterface = {};
        var indexToDelete:number = Number.parseInt(toDelete?.enumerator?.substring(6,toDelete?.enumerator?.length));
        operation.name='PLC_DELETE: '+toDelete.name;
        operation.datablock={connect:{id:process.env.API_DB_ID}};
        operation.operation='Paczki_DELETE';
        operation.payload=JSON.stringify({...toDelete,plcId:indexToDelete});
        operation.status='Pending';
        operation.timeSubmitted=Date.now().toString();
        return operation;

    }

    generatePaczkaCommandToCreateOnPLC(toAdd : paczkaInterface):operacjeInterface{
        toAdd.plcId = Number.parseInt(toAdd.enumerator.substring(6)); 
        var operation :operacjeInterface = {};
        operation.name='Paczki_CREATE: '+toAdd.name;
        operation.datablock={connect:{id:process.env.API_DB_ID}};
        operation.operation='Paczki_CREATE';
        operation.payload=JSON.stringify(toAdd);
        operation.status='Pending';
        operation.timeSubmitted=Date.now().toString();
        return operation;
    }

    generatePaczkaCommandToModifyOnPLC(toModify : paczkaInterface):operacjeInterface{
        var operation : operacjeInterface = {};
        var indexToModify:number = Number.parseInt(toModify?.enumerator?.substring(6,toModify?.enumerator?.length));
        operation.name='Paczki_UPDATE: '+toModify.name;
        operation.datablock={connect:{id:process.env.API_DB_ID}};
        operation.operation='Paczki_UPDATE';
        operation.payload=JSON.stringify({...toModify,plcId:indexToModify});
        operation.status='Pending';
        operation.timeSubmitted=Date.now().toString();
        return operation;
    }

    comparePaczkas(paczka1:paczkaInterface,paczka2:paczkaInterface):Boolean{
        var toReturn:Boolean = (
            paczka1.name==paczka2.name&&
            paczka1.lPaczek==paczka2.lPaczek&&
            paczka1.nrPaczki==paczka2.nrPaczki&&
            paczka1.nrSeryjny1==paczka2.nrSeryjny1&&
            paczka1.nrSeryjny2==paczka2.nrSeryjny2&&
            paczka1.nrSeryjny3==paczka2.nrSeryjny3&&
            paczka1.plcId==paczka2.plcId&&
            paczka1.dlugosc==paczka2.dlugosc
        );

        return toReturn;
    }

}

export default new ResolverUtil();