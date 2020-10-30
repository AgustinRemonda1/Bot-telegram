import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GlobalStateInterface } from "../../../Interfaces/GlobalState.interface";
import BotCommands from "../../../Store/Actions/BotCommands.action";
import UserTypesAction from "../../../Store/Actions/UserTypes.action";
import GetCommands from './GetCommands.component';

const actionCreators = Object.assign({}, BotCommands.actionCreators, UserTypesAction.actionCreators);

const mapStateToProps = (state: GlobalStateInterface) => ({
  fetching: state.botCommands.fetchingStatus,
  botCommands: state.botCommands.botCommands,
  total: state.botCommands.total,
  sucess: state.botCommands.sucess,
  userTypes: state.userTypes.userTypes,
  botCommandSelected: state.botCommands.botCommandSelected
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GetCommands);