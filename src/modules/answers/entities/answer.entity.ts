import { Alternatives } from "@/modules/alternatives/entities/alternative.entity";
import { DefaultEntity } from "@/modules/common/shared/entities";
import { Questions } from "@/modules/questions/entities/question.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Answers extends DefaultEntity {
    @Column({ nullable: true })
    answer: string

    @Column({ nullable: false })
    question_id: string

    @ManyToOne(() => Questions, (questions) => questions.id)
    @JoinColumn({ name: 'question_id' })
    question: Questions

    @Column({ nullable: true })
    alternative_id: string

    @ManyToOne(() => Alternatives, (alternatives) => alternatives.id)
    @JoinColumn({ name: 'question_id' })
    alternative: Alternatives

}
