import dva from "dva";
import createLoading from "dva-loading";
import "@/style/index.css";
import "@/style/normalize.css";
import "@/utils/rem";
import RouterConfig from "@/routes";
import { createBrowserHistory as createHistory } from "history";
import { login, topList, topListDetail, SongPlayDetailStore } from "@/models";
import vhCheck from "vh-check";
vhCheck("browser-address-bar");

// 1. Initialize
const App = dva({
  history: createHistory()
});

App.use(createLoading());

// 2. Plugins
// App.use({});

// 3. models
App.model(login);
App.model(topList);
App.model(topListDetail);
App.model(SongPlayDetailStore);

// 4. Router
App.router(RouterConfig);

// 5. Start
App.start("#root");

export default App;
