import { Box, Button, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import configData from "../../config";

export const EndMessage = () => {
  return (
    <Box
      sx={{
        p: 5,
        bgcolor: (theme) => theme.palette["success"].light,
        color: (theme) => theme.palette["success"].darker,
        borderRadius: 2,
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={11}>
          <img src="/static/illustrations/dashboard-card.png" alt="dashboard" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body" pb={2}>
            Keep track of shared expenses and settle your corresponding balances
            in a convenient and personalized way.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "white", // Set button background to white
              color: "black", // Set text color to black
              borderColor: "black", // Border color as black
              "&:hover": {
                backgroundColor: "grey.300", // Change background on hover
                borderColor: "black", // Keep border color black on hover
              },
            }}
            component={RouterLink}
            to={configData.USER_GROUPS_URL}
          >
            View Groups
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
