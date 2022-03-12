import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Flex } from "@chakra-ui/react";

export const Header = () => {
  return (
    <ContentWrapper>
      <HeaderWrapper>
        <Flex width="15rem" justifyContent="flex-start">
          <ul>
            <Link passHref={true} href="/setup">
              <li>Setup</li>
            </Link>
            <a href="#how-to">
              <li>How to</li>
            </a>
          </ul>
        </Flex>
        <Link passHref={true} href="/">
          <Logo src="/logo.svg" alt="logo" width={85} height={85} />
        </Link>
        <Flex width="15rem" justifyContent="flex-end">
          <ul>
            <a>
              <li>Login</li>
            </a>
          </ul>
        </Flex>
      </HeaderWrapper>
    </ContentWrapper>
  );
};

const Logo = styled(Image)`
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  margin: 0 1rem;
  align-items: center;
  max-width: 70rem;
  width: 100%;
  justify-content: space-between;

  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    gap: 1.1rem;
    padding: 0;

    li {
      cursor: pointer;

      &:hover {
        color: grey;
        text-decoration: underline;
      }
    }
  }
`;
