import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  set_loading_to_true,
  set_loading_to_false,
  set_response,
  mockResponse
} from "@ip-address/features";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Loading: ComponentStory<typeof Card> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set_loading_to_true());
  });

  return <Card />;
};

export const Default: ComponentStory<typeof Card> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set_response(mockResponse)); 
    dispatch(set_loading_to_false());
  });

  return <Card />;
};
