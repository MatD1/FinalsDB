import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchPSNLeaderboard } from "@/actions/actions";
import PSNTable from "@/components/UI/Table/psn";

export default async function PSNLeader() {
  const globalLeaderboardData = await fetchPSNLeaderboard();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Welcome! Feel free to choose from a selection of the leadersboards
            above or search your in-game name below to see your position on the
            Playstation platform leaderboard!
          </Typography>
        </div>
      </Box>
      <Box>
        <PSNTable data={globalLeaderboardData} />
      </Box>
    </>
  );
}
