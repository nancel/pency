import React from "react";
import {Flex, Link, Text, Image, Stack, Box, Heading, Button} from "@chakra-ui/core";
import styled from "@emotion/styled";

import LandingLayout from "~/app/layouts/LandingLayout";

const UnstyledLink = styled(Link)`
  text-decoration: none !important;
`;

const LandingScreen: React.FC = () => (
  <LandingLayout>
    <Flex backgroundColor="gray.50" height="100vh">
      <Flex
        alignItems="center"
        backgroundImage="url(./lines.svg)"
        backgroundPosition="top"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        justifyContent="center"
        position="relative"
        textAlign={{base: "center", md: "inherit"}}
        width="100%"
      >
        <Stack
          flex={{base: 1, md: 0.8}}
          justifyContent="center"
          padding={{base: 6, md: 12}}
          spacing={4}
        >
          <Heading>
            <Image position="absolute" src="/logo.png" width="200px" /> 
          </Heading>
        </Stack>
        <Box
          display={{base: "none", md: "inherit"}}
          flex={1}
          height="100%"
          position="relative"
          width="100%"
        >
          <Image
            height="100%"
            objectFit="contain"
            position="absolute"
            right={0}
            src="/iphone-top.png"
            width="100%"
            zIndex={1}
          />
          <Image height="100%" position="absolute" right={0} src="/circles-top.svg" width="100%" />
        </Box>
      </Flex>
    </Flex>
  </LandingLayout>
);

export default LandingScreen;
