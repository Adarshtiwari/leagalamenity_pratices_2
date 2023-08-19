import Signup from "../SignupComponent";
import { connect } from "react-redux";
import { setToken } from "../../service/actions/actions";

const mapStateToProps = (state) => ({
  userData: state,
});
const mapDispatchToProps = (dispatch) => ({
  setToken: (data) => dispatch(setToken(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
