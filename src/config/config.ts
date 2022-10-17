import * as dotenv from "dotenv";
import {  DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";


export abstract class ConfigServer {
    constructor() {
        const nodeNameEnv = this.createPathEnv(this.nodeEnv);
        //console.log('nodeNameEnv :', nodeNameEnv);
        dotenv.config({path:nodeNameEnv});
    }

    /**
     * getEnviroment
     * Se encarga de obtener el valor del la variable de entorno.
     * @param {string} k
     * @return {*}  {(string | undefined)}
     * @memberof ConfigServer
     */
    public getEnviroment(k: string): string | undefined {
        //console.log('process.env[k] :', process.env[k]);
        //console.log('process.env[k] 2:', process.env);
        return process.env[k];
    }

    /**
     * getNumberEnv
     * Obtiene el valor de la variable entorno en numero
     * @param {string} k
     * @return {*}  {number}
     * @memberof ConfigServer
     */
    public getNumberEnv(k: string): number {
        //console.log('k : ', k);
        return Number(this.getEnviroment(k));
    }

    /**
     * nodeEnv
     * Se encarga de obtener el entorno por medio de la variable declarada. NODE_ENV
     * @readonly
     * @type {string}
     * @memberof ConfigServer
     */
    public get nodeEnv(): string {
        return this.getEnviroment("NODE_ENV")?.trim() || "";
    }

    /**
     * createPathEnv
     * Se encarga de recupeara el archivo a usar con sus valores de entorno.
     * @param {string} path
     * @return {*}  {string}
     * @memberof ConfigServer
     */
    public createPathEnv(path: string): string {
        const arrEnv: Array<string> = ["env"];

        if (path.length > 0) {
            const stringToArray = path.split(".");
            arrEnv.unshift(...stringToArray);
        }
        return "."+ arrEnv.join(".");
    }

    /**
     * Configuracion del ORM para la base de datos.
     *
     * @readonly
     * @type {DataSourceOptions}
     * @memberof ConfigServer
     */
    public get typeORMConfig(): DataSourceOptions {
        return {
            type: "mysql",
            host: this.getEnviroment("DB_HOST"),
            port: this.getNumberEnv("DB_PORT"),
            username: this.getEnviroment("DB_USER"),
            password: this.getEnviroment("DB_PASSWORD"),
            database: this.getEnviroment("DB_DATABASE"),
            // entities: [__dirname + "/../**/*.entity{.ts,.js}"], // Si queremos que busque fuera de un directorio y por nombre de archivo y extensión
            entities: [__dirname + "/../entities/*.entity{.ts,.js}"],
            migrations: [__dirname + "../../migrations/*{.ts, .js}"],
            synchronize: true,
            logging: false,
            namingStrategy: new SnakeNamingStrategy()
        }

    }

}