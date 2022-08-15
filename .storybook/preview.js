import { GlobalStyle } from "@ip-address/design";
import { initialize, mswDecorator } from 'msw-storybook-addon';
import Rect from "react";
import { store } from "@ip-address/features";
import { Provider } from "react-redux";

initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <div style={{ backgroundColor: "#d3d3d3", padding: "15px" }}>
        <GlobalStyle/>
        <Story />
      </div>
    </Provider>
  ),
  mswDecorator
];
