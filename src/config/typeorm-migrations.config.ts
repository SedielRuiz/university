import { DataSource } from "typeorm"
export default new DataSource({
    type: 'mysql',
    host: 'university-mysql',
    port: 3306,
    username: 'root',
    password: '123456789',
    database: 'university',
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: ['src/domain/migrations/*{.ts,.js}']
})

