import { useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  mockResponse,
  store,
  reset_to_initial_state,
} from "@ip-address/features";
import { rest } from "msw";
import App from "./App";

export default {
  title: "App",
  component: App,
} as ComponentMeta<typeof App>;

export const Success: ComponentStory<typeof App> = () => {
  useEffect(() => {
    localStorage.clear();
    store.dispatch(reset_to_initial_state());
  }, []);
  return <App />;
};
Success.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_5QeDwfNrsg6wZ0XI5vXTtC80A95vc",
        async (req, res, ctx) => {
          return res(ctx.json(mockResponse), ctx.status(200), ctx.delay(5000));
        }
      ),
    ],
  },
};

export const Error: ComponentStory<typeof App> = () => {
  useEffect(() => {
    localStorage.clear();
    store.dispatch(reset_to_initial_state());
  }, []);
  return <App />;
};
Error.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_5QeDwfNrsg6wZ0XI5vXTtC80A95vc",
        async (req, res, ctx) => {
          return res(ctx.status(403), ctx.delay(5000));
        }
      ),
    ],
  },
};
