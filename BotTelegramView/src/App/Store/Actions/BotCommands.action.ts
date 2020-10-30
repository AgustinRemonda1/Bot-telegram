import BotCommands from "../../Interfaces/BotComands.interface";
import builderAsyncActions from "../../Utils/BuilderAsyncActions.utils";

const { actionsTypes, actionCreators } = builderAsyncActions([
  {
    name: 'getBotCommands',
    endpoint: '/bot-commands/all',
    method: 'GET'
  },
  {
    name: 'deleteBotCommand',
    endpoint: '/bot-commands/:param_1',
    method: 'DELETE'
  }
])

const syncActions = {
  clearBotCommandsStates: 'clear-bot-commands-states',
  selectBotCommand: 'select-bot-command'
}

const syncActionCreators = {
  selectBotCommand: (payload: BotCommands | null) => {
    return {
      type: syncActions.selectBotCommand,
      payload
    }
  },
  clearBotCommandsStates: () => {
    return{
      type: syncActions.clearBotCommandsStates
    }
  }
}

export default {
  actionsTypes: Object.assign(actionsTypes, syncActions),
  actionCreators: Object.assign(actionCreators, syncActionCreators)
}