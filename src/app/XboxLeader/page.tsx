import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchLeaderboardData } from "@/actions/actions";
import XBOXTable from "@/components/UI/Table/xbox";

export const dynamic = 'auto'

export default async function PSNLeader() {
  const xboxLeaderData = await fetchLeaderboardData({platform: "xbox"});
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Welcome! Feel free to choose from a selection of the leadersboards
            above or search your in-game name below to see your position on the
            Xbox platform leaderboard!
          </Typography>
        </div>
      </Box>
      <Box>
        <XBOXTable data={xboxLeaderData} />
      </Box>
    </>
  );
}
