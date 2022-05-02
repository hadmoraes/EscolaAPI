import {openDb} from './configDB.js';
import {createTable} from './controler/pessoa.js';
import {insertAluno} from './controler/pessoa.js';
import {updateAluno} from './controler/pessoa.js';
import {selectAlunos} from './controler/pessoa.js';
import {selectAluno} from './controler/pessoa.js';
import {deleteAluno} from './controler/pessoa.js';
import express from 'express';


const app = express();
app.use(express.json());

createTable();
openDb();


app.listen(3000, () => console.log ("Api Rodando..."));