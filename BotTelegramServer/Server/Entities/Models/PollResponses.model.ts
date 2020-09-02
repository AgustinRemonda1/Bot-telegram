import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey, HasMany } from "sequelize-typescript";
import { DataTypes } from 'sequelize';
import PollResponsesInterface from '../../Interfaces/PollResponses.interface'
import PollQuestions from './PollQuestions.model'
import BotUsers from "./BotUsers.model";


@Table(
  {
    tableName: "Poll_responses",
    timestamps: true,
  }
)

class PollResponses extends Model<PollResponses> implements PollResponsesInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  poll_response_id?: number

  @ForeignKey( ()=> BotUsers)
  @Column(DataTypes.NUMBER)
  user_id!: number

  @ForeignKey(() => PollQuestions)
  @Column(DataTypes.NUMBER)
  response_id?: number;

  @Column(DataTypes.STRING)
  response!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;
  
  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasMany( ()=> BotUsers,{
    sourceKey:"user_id",
    foreignKey:"bot_user_id",
  })
  botUsers: BotUsers[]
}

export default PollResponses;