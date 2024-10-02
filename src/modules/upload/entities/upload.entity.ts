import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("uploads")
export class Upload {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 1000})
    imageUrl: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
