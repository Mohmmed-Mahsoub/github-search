import React, { useContext } from "react";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import Item from "./item";
import { Context } from "../contexts/context";
const UserInfo = () => {
  const test = useContext(Context);
  console.log(test);
  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: 55,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: 66,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: 77,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "gists",
      value: 88,
      color: "yellow",
    },
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map((item, index) => {
          return <Item key={index} {...item} />;
        })}
      </Wrapper>
    </section>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
`;
export default UserInfo;
