import express, { Application } from 'express';
import usersRoutes from '../routes/usuarios';
import cors from 'cors';
import db from '../database/connection';

class Server {

    /* Defimos */
    private app: Application
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'
        this.dbConnection();
        //metodos iniciales
        this.middlewars()
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log("Database online");

        } catch (error) {
            throw new Error(error)
        }
    }

    middlewars() {

        this.app.use(cors())
        //lectura del body
        this.app.use(express.json())
        //carpeta publica
        this.app.use(express.static('public'))

    }

    routes() {
        this.app.use(this.apiPaths.usuarios, usersRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en puerto ' + this.port);

        })
    }
}

export default Server;