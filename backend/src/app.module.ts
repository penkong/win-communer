// ------------------------- Packages ------------------------------

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'

// ------------------------ Local ----------------------------------

import configuration from '../config/configuration'
import { TodoModule } from './api/v1/todo/'

// -----------------------------------------------------------------

// docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_HOST=% -e MYSQL_ROOT_PASSWORD=root -d mysql/mysql-server:5.7

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      debug: true,
      playground: true
    }),
    TodoModule
  ],

  controllers: [],
  providers: []
})

// -----------------------------------------------------------------
export class AppModule {}
