import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import ghost from "../assets/ghost.gif"; 

// Styled gradient background
const HeroContainer = styled(Box)({
  padding: "4rem 2rem",
  textAlign: "center",
  position: "relative",
  minHeight: "50vh",
  fontFamily: "'Press Start 2P', cursive",
  margin: "2rem 0",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  flexWrap: "wrap",
});

// Left text box
const TextBox = styled(Box)({
  maxWidth: "500px",
  textAlign: "left",
  color: "#EEEEEE",
});

// Hero image styling
const HeroImage = styled("img")({
  width: "300px",
  maxWidth: "100%",
  borderRadius: "8px",
});


export default function HeroSection() {
  return (
    <HeroContainer>
      {/* LEFT: GIF */}
      <HeroImage
        component="img"
        src={ghost} 
        alt="Kitty in Cup"
        sx={{
          width: "300px",
          marginBottom: "2rem",
        }}
      />

      {/* Title */}
      <TextBox>
        <Typography
          variant="h4"
          sx={{
            fontSize: "38px",
            fontFamily: "'Press Start 2P', cursive",
            color: "#f48fb1",
          }}
        >
          ABOUT ME{" "}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: "#EEEEEE",
            fontSize: "16px",
            maxWidth: "500px",
            margin: "1.5rem auto",
            fontFamily: "'Press Start 2P', sans-serif",
            lineHeight: 1.8,
          }}
        >
          <strong>Name:</strong> Lovely Heart V. Pintes <br /><br />
          <strong>Course/Year:</strong> BS Information System, 3rd Year <br /><br />
          <strong>Fun Fact:</strong> I can make a model and animate it in 3D
          software.
        </Typography>
      </TextBox>

      
    </HeroContainer>
  );
}
