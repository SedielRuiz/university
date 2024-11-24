import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm"

export default class TypeOrmConfig {

    static getOrmConfig(): TypeOrmModuleOptions {

        return {
            type: 'mysql',
            host: process.env.db_host,
            port: parseInt(process.env.db_port),
            username: process.env.db_user,
            password: process.env.db_password,
            database: process.env.db_name,
            autoLoadEntities: true,
            synchronize: false,
            entities: [__dirname + "/../**/*.entity{.ts,.js}"]
        }
    }

}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [],
    useFactory: async (): Promise<TypeOrmModuleAsyncOptions> => TypeOrmConfig.getOrmConfig(),
    inject: []
}

