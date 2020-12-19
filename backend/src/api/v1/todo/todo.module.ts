// ------------------------- Packages ------------------------------

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// ------------------------ Local ----------------------------------

import { TodoEntity, TodoResolver, TodoService } from '.'

// -----------------------------------------------------------------

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodoResolver, TodoService]
})
export class TodoModule {}
