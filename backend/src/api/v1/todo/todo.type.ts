// ------------------------- Packages ------------------------------

import { ObjectType, Field, ID } from '@nestjs/graphql'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

@ObjectType('Todo')
export class TodoType {
  @Field((type) => ID)
  id: string

  @Field()
  todo: string

  @Field()
  isActive: boolean
}
