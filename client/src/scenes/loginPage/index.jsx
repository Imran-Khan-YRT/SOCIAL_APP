import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");

  const alt = theme.palette.background.alt;
  const primaryLight = theme.palette.primary.light;

  return (
    <Box>
      <Box width="100%" backgroundColor={alt} p="1rem 6%" textAlign="center">
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Sociopedial
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreen ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Sociopedia, the Social media for Sociopaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
