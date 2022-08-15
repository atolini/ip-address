import React, { useEffect, useState } from "react";
import { Container, Section, Line } from "./Card.styles";
import { Title, Paragraph } from "@ip-address/design";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Card: React.FC = () => {
  const [width, setWidth] = useState<number>(0);
  const res = useSelector((state: RootState) => state.global.response);

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
      <Section>
        <Title>ip address</Title>
        <Paragraph>
        {res !== null? res.ip : <Skeleton count={2} width={"130px"} />}
        </Paragraph>
      </Section>
      {width > 1124 ? <Line /> : null}
      <Section>
        <Title>location</Title>
        <Paragraph>
        {res !== null? `${res.location.city}, ${res.location.region}`  : <Skeleton count={2} width={"130px"} />}
        </Paragraph>
      </Section>
      {width > 1124 ? <Line /> : null}
      <Section>
        <Title>timezone</Title>
        <Paragraph>
        {res !== null? `UTC ${res.location.timezone}` : <Skeleton count={2} width={"130px"} />}
        </Paragraph>
      </Section>
      {width > 1124 ? <Line /> : null}
      <Section>
        <Title>isp</Title>
        <Paragraph>
        {res !== null? res.isp : <Skeleton count={2} width={"130px"} />}
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Card;


