import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import BotResponsesInterface from "../../Interfaces/BotResponses.interface";

@Table({
  tableName: "Bot_responses",
  timestamps: true,
})

class BotResponses extends Model<BotResponses>
  implements BotResponsesInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  bot_id?: number;

  @Column(DataTypes.STRING)
  response!: string;

  @Column(DataTypes.STRING)
  description!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;
}

export default BotResponses;
