import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { User } from "./entity/User"
import { Tasks } from "./entity/Tasks"
import { Problems } from "./entity/Problems"
import "dotenv/config"

const getDBConfig = (json: any) => {
    const newObj = {};

    for (const prop in json){
        if (!prop.startsWith("DB_")){
            continue;
        }
        const newProp = prop.substring(prop.indexOf("_") + 1).toLowerCase();
        newObj[newProp] = json[prop];
    }

    return newObj;
}
const config = getDBConfig(process.env) as DataSourceOptions;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "babar.db.elephantsql.com",
    port: 5432,
    username: "qlwitakk",
    password: "TcUQ-UPV8xE3_bZZXthrqTmGnJALhlUY",
    database: "qlwitakk",
    synchronize: true,
    logging: false,
    entities: [User,Tasks,Problems],
    migrations: [],
    subscribers: [],
})
