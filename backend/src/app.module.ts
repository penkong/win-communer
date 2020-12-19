// ------------------------- Packages ------------------------------

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

// ------------------------ Local ----------------------------------

import configuration from '../config/configuration'

// -----------------------------------------------------------------

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    // docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_HOST=% -e MYSQL_ROOT_PASSWORD=root -d mysql/mysql-server:5.7
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      // database: 'communer',
      entities: [],
      synchronize: true,
      retryAttempts: 10
    })
  ],

  controllers: [],
  providers: []
})

// -----------------------------------------------------------------
export class AppModule {}
