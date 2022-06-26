
import { File } from './File';

export interface Agent{
    id_agent: Number,
        username:String,
        nom: String,
        prenom: String,
        pieceIdentite: String,
        numPieceIdentite:String,
        dateNaissance: String,
        adresse: String,
        email:String,
        password:String,
        numTel: String,
        numMatriculation:String,
        numPattente: String,
        firstAuth: Boolean,
        usersApp: [],
        agentFiles: File[],
        role: String
}