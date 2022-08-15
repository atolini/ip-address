import { ComponentStory, ComponentMeta } from "@storybook/react";
import Search from "./Search";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  set_loading_to_true,
  set_loading_to_false,
} from "@ip-address/features";

export default {
  title: "Search",
  component: Search,
} as ComponentMeta<typeof Search>;

export const Loading: ComponentStory<typeof Search> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set_loading_to_true());
  });

  return <Search />;
};

export const Default: ComponentStory<typeof Search> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set_loading_to_false());
  });

  return <Search />;
};
