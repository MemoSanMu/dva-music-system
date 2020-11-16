import HomePage from "./subPage/Index";
import { connect } from "dva";

export default connect(({ app, loading }) => ({ app, loading }))(HomePage);
