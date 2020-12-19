// ------------------------- Packages ------------------------------

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

@Entity()
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  todo: string

  @Column({ default: true })
  isActive: boolean
}
