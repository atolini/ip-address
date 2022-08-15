import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  set_loading_to_true,
  set_loading_to_false,
  set_response,
  mockResponse
} from "@ip-address/features";
import Map from "./Map";

export default {
  title: "Map",
  component: Map,
  decorators: [
    (Story) => (
      <div style={{ width: "500px", height: "500px" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Map>;

export const Loading: ComponentStory<typeof Map> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set_loading_to_true());
  });

  return <Map />;
};

export const Default: ComponentStory<typeof Map> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set_response(mockResponse)); 
    dispatch(set_loading_to_false());
  });

  return <Map />;
};

