import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../Features/store";
import ThemeWrapper from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </Provider>
  );
}

export default MyApp;
