// ------------------------- Packages ------------------------------

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

// ------------------------ Local ----------------------------------

import configuration from '../config/configuration'
import { TodoModule } from './api/v1/todo/'

// -----------------------------------------------------------------

// docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_HOST=% -e MYSQL_ROOT_PASSWORD=root -d mysql/mysql-server:5.7
// docker exec -it mysql mysql -u root -p
// enter password
// CREATE DATABASE (if not extist ...) communer;
// must see line below
// Query OK, 1 row affected

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'public')
    }),
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true
    }),
    TodoModule
  ],

  controllers: [],
  providers: []
})

// -----------------------------------------------------------------
export class AppModule {}
