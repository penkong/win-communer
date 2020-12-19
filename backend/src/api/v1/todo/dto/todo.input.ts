// ------------------------- Packages ------------------------------

import { InputType, Field } from '@nestjs/graphql'
import { MinLength, MaxLength, IsBoolean } from 'class-validator'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

@InputType()
export class CreateTodoInput {
  @MinLength(1)
  @MaxLength(60)
  @Field()
  todo: string

  @IsBoolean()
  @Field()
  isActive: boolean
}
