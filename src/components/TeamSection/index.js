import React, { useState } from "react";
import { Container, HeadingDiv, NameH4 } from "./../reusable";
import {
  TeamWrapper,
  IconDiv,
  Member,
  MemberCard,
  MemberImg,
  MemberSocialMedia,
  MembersWrapper,
  SocialMediaIcon,
  MemberP,
} from "./TeamSecElements";
import { FaFacebookF as FaFacebook, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

function TeamSection() {
  const [target, setTarget] = useState(null);

  function onHover(e) {
    setTarget(e.target);
  }

  function onOut() {
    setTarget(null);
  }

  return (
    <Container>
      <TeamWrapper>
        <HeadingDiv h1Label="Our Creative Team" h5Label="Meet Our Team" />
        <MembersWrapper>
          <Member>
            <MemberImg
              id="1"
              onMouseOver={onHover}
              onMouseOut={onOut}
              src={require("../../images/team-memeber/member1.jpg").default}
            />
            <MemberCard id="1" target={target}>
              <NameH4>Name placeholder</NameH4>
              <MemberP>some paragraph</MemberP>
              <MemberSocialMedia>
                <IconDiv>
                  <SocialMediaIcon Icon={FaFacebook} />
                </IconDiv>
                <IconDiv>
                  <SocialMediaIcon Icon={AiOutlineInstagram} />
                </IconDiv>
                <IconDiv>
                  <SocialMediaIcon Icon={FaTwitter} />
                </IconDiv>
              </MemberSocialMedia>
            </MemberCard>
          </Member>
          <Member>
            <MemberImg
              id="2"
              onMouseOver={onHover}
              onMouseOut={onOut}
              src={require("../../images/team-memeber/member2.jpg").default}
            />
            <MemberCard id="2" target={target}>
              <NameH4>Name placeholder</NameH4>
              <MemberP>some paragraph</MemberP>
              <MemberSocialMedia>
                <IconDiv>
                  <SocialMediaIcon Icon={FaFacebook} />
                </IconDiv>
                <IconDiv>
                  <SocialMediaIcon Icon={AiOutlineInstagram} />
                </IconDiv>
                <IconDiv>
                  <SocialMediaIcon Icon={FaTwitter} />
                </IconDiv>
              </MemberSocialMedia>
            </MemberCard>
          </Member>
          <Member>
            <MemberImg
              id="3"
              onMouseOver={onHover}
              onMouseOut={onOut}
              src={require("../../images/team-memeber/member3.jpg").default}
            />
            <MemberCard id="3" target={target}>
              <NameH4>Name placeholder</NameH4>
              <MemberP>some paragraph</MemberP>
              <MemberSocialMedia>
                <IconDiv>
                  <SocialMediaIcon Icon={FaFacebook} />
                </IconDiv>
                <IconDiv>
                  <SocialMediaIcon Icon={AiOutlineInstagram} />
                </IconDiv>
                <IconDiv>
                  <SocialMediaIcon Icon={FaTwitter} />
                </IconDiv>
              </MemberSocialMedia>
            </MemberCard>
          </Member>
          <Member>
            <MemberImg
              id="4"
              onMouseOver={onHover}
              onMouseOut={onOut}
              src={require("../../images/team-memeber/member4.jpg").default}
            />
            <MemberCard id="4" target={target}>
              <NameH4>Name placeholder</NameH4>
              <MemberP>some paragraph</MemberP>
              <MemberSocialMedia>
                <IconDiv>
                  <SocialMediaIcon Icon={FaFacebook} />
                </IconDiv>
                <IconDiv>
                  <SocialMediaIcon Icon={AiOutlineInstagram} />
                </IconDiv>
                <IconDiv>
                  <SocialMediaIcon Icon={FaTwitter} />
                </IconDiv>
              </MemberSocialMedia>
            </MemberCard>
          </Member>
        </MembersWrapper>
      </TeamWrapper>
    </Container>
  );
}

export default TeamSection;
