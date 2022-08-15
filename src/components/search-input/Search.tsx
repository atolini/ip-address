import React, { useState, useEffect } from "react";
import { Input, Button, Container } from "./Search.styles";
import { ReactComponent as Icon } from "./path.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store"; 
import { Search as searchFeature } from "@ip-address/features";
import { Oval } from "react-loader-spinner";

const Search: React.FC = () => {
  const status = useSelector((state: RootState) => state.global.loading);
  const [value, setValue] = useState("");
  const [width, setWidth] = useState<number>(0);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => { 
    if(e.code === "Enter"){
      searchCallBack(); 
    }
  }

  const searchCallBack = () => { 
    if (value) { 
      searchFeature(value); 
    }
  }

  const getTheWidth = () => {
    setWidth(() => document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getTheWidth);
    return () => {
      window.removeEventListener("resize", getTheWidth);
    };
  }, []);

  useEffect(() => {
    getTheWidth();
  }, []);

  return (
    <Container>

      {width > 1024 ? (
        <Input
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={handleChange}
          value={value}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <Input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={value}
          onKeyPress={handleKeyPress}
        />
      )}

      <Button onClick={searchCallBack}>
        {status ? <Oval height="18" width="18" color="white" /> : <Icon />}
      </Button>
    </Container>
  );
};

export default Search;
