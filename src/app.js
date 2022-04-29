import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import DatabaseMetodosDocentes from "./DAO/DatabaseMetodosDocentes.js";
import DatabaseMetodosAlunos from "./DAO/DatabaseMetodosAlunos.js";
import DatabaseMetodosCursos from "./DAO/DatabaseMetodosCursos.js";
import DatabaseMetodosTurmas from "./DAO/DatabaseMetodosTurmas.js";
import DatabaseMetodosBoletins from "./DAO/DatabaseMetodosBoletins.js";
import Docentes from "./controller/Docentes.js";
import Alunos from "./controller/Alunos.js";
import Cursos from "./controller/Cursos.js";
import Turmas from "./controller/Turmas.js";
import Boletins from "./controller/Boletins.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

DatabaseMetodosDocentes.createTable();
DatabaseMetodosAlunos.createTable();
DatabaseMetodosCursos.createTable();
DatabaseMetodosTurmas.createTable();
DatabaseMetodosBoletins.createTable();

app.listen(port, ()=>{
    console.log(`O servidor está rodando na porta ${port}`);
});

Docentes.routers(app);
Alunos.routers(app);
Cursos.routers(app);
Turmas.routers(app);
Boletins.routers(app);



