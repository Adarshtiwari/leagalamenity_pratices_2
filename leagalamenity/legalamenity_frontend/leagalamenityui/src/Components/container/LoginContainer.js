import Login from "../LoginComponent";
import { connect } from "react-redux";
import { setToken } from "../../service/actions/actions";

const mapStateToProps = (state) => ({
  userData: state,
});
const mapDispatchToProps = (dispatch) => ({
  setToken: (data) => dispatch(setToken(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
