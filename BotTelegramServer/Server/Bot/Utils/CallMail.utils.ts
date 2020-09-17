import { removeSensitiveCase } from "./RemoveSensitiveCase.utils"
import { TelegrafContext } from "telegraf/typings/context";
import CommandInterface from "../Interfaces/Command.interface";

export const callMail = (callMail:any, text: string, commands: CommandInterface[], ctx: TelegrafContext, isAnCommand?: boolean) => {
  const isAnEmail = text.includes('@');
  const sendMail = (mailCommand, ctx) => {
    mailCommand && mailCommand.response(ctx, Boolean(text))
    return null
  }

  const findCommandOrHear = (text, command) => {
    return isAnCommand ? 
      removeSensitiveCase(text) === removeSensitiveCase(command.command)
    : 
      removeSensitiveCase(text) === removeSensitiveCase(command.message)
  }

  if(isAnEmail){
    return sendMail(callMail, ctx)
  } else {
    return commands.find(
      command => removeSensitiveCase(text).includes('mail') && findCommandOrHear(text, command)
    )
  }
}