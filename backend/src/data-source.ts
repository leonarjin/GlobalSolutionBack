import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Tasks } from "./entity/Tasks"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "babar.db.elephantsql.com",
    port: 5432,
    username: "qlwitakk",
    password: "TcUQ-UPV8xE3_bZZXthrqTmGnJALhlUY",
    database: "qlwitakk",
    synchronize: true,
    logging: false,
    entities: [User,Tasks],
    migrations: [],
    subscribers: [],
})
