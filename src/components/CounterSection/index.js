import React from "react";
import {
  CounterContainer,
  Bottom,
  BottomP,
  CardBox,
  H3,
  Item,
  TextContainer,
  Top,
  CreateIcon,
  CountUpItem,
  CountUpWrapper,
  CounterP,
} from "./CounterSecElements";
import { Container } from "./../reusable";
import { H1 } from "./../reusable";
import { Btn } from "./../Button";
import { GiStethoscope } from "react-icons/gi";
import { BiHealth, BiAward } from "react-icons/bi";
import { RiHeartAddLine, RiCustomerService2Line } from "react-icons/ri";
import { BsPersonPlus } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RenderCounter } from "./counter";
import { IconContext } from "react-icons";

function ConterSection() {
  return (
    <CounterContainer>
      <Container>
        <CardBox>
          <Top>
            <H1>Praesent tempor dictum tellus ut molestie</H1>
            <Btn style={{ justifySelf: "center" }}>Get Quote</Btn>
          </Top>
          <Bottom>
            <Item>
              <CreateIcon margin Icon={GiStethoscope} />
              <TextContainer>
                <H3>Therapiya</H3>
                <BottomP>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                  do eiusmo
                </BottomP>
              </TextContainer>
            </Item>
            <Item>
              <CreateIcon margin Icon={BiHealth} />
              <TextContainer>
                <H3>Dentistry</H3>
                <BottomP>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                  do eiusmo
                </BottomP>
              </TextContainer>
            </Item>
            <Item>
              <CreateIcon margin Icon={RiHeartAddLine} />
              <TextContainer>
                <H3>Virusology</H3>
                <BottomP>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                  do eiusmo
                </BottomP>
              </TextContainer>
            </Item>
          </Bottom>
        </CardBox>
        <IconContext.Provider value={{ color: "#fff" }}>
          <CountUpWrapper>
            <CountUpItem>
              <CreateIcon Icon={RiCustomerService2Line} />
              <RenderCounter endTime={3500} />
              <CounterP>Happy Customers</CounterP>
            </CountUpItem>
            <CountUpItem>
              <CreateIcon Icon={AiOutlineFundProjectionScreen} />
              <RenderCounter endTime={541} />
              <CounterP>Project Done</CounterP>
            </CountUpItem>
            <CountUpItem>
              <CreateIcon Icon={BiAward} />
              <RenderCounter endTime={40} />
              <CounterP>Awards Win</CounterP>
            </CountUpItem>
            <CountUpItem>
              <CreateIcon Icon={BsPersonPlus} />
              <RenderCounter endTime={678} />
              <CounterP>Clients Work</CounterP>
            </CountUpItem>
          </CountUpWrapper>
        </IconContext.Provider>
      </Container>
    </CounterContainer>
  );
}

export default ConterSection;
