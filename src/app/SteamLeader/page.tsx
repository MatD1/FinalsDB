import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchGlobalLeaderboard, fetchSteamLeaderboard } from "@/actions/actions";
import SteamTable from "@/components/UI/Table/steam";

export default async function SteamLeader() {
  const globalLeaderboardData = await fetchSteamLeaderboard();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Welcome! Feel free to choose from a selection of the leadersboards
            above or search your in-game name below to see your position on the
            Steam platform leaderboard!
          </Typography>
        </div>
      </Box>
      <Box>
        <SteamTable data={globalLeaderboardData} />
      </Box>
    </>
  );
}
