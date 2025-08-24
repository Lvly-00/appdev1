import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Section container
const SectionContainer = styled(Box)({
  padding: "4rem 2rem",
  textAlign: "center",
  color: "#EEEEEE",
});

// Paragraph style
const Paragraph = styled(Typography)({
  fontSize: "16px",
  lineHeight: 2,
  maxWidth: "800px",
  margin: "0 auto",
  color: "#ccc",
  fontFamily: "'Press Start 2P', sans-serif",
});

export default function WhyLearnReactSection() {
  return (
    <SectionContainer>
      <Typography
        variant="h4"
        sx={{
          fontSize: "32px",
          marginBottom: "2rem",
          color: "#f48fb1",
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        WHY I WANT TO LEARN REACT
      </Typography>

      <Paragraph>
        I want to learn React because it allows me to build modern, interactive
        user interfaces using reusable components. It's powerful, in-demand, and
        gives me the tools to bring my creative ideas to life while leveling up
        my development skills.
      </Paragraph>
    </SectionContainer>
  );
}
