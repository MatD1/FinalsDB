import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchGlobalLeaderboard } from "@/actions/actions";
import LeaderBoardTable from "../components/UI/Table/global";

export default async function HomePage() {
  const globalLeaderboardData = await fetchGlobalLeaderboard();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome! Feel free to choose from a selection of the leadersboards
            above or search your in-game name below to see your position on the
            all platforms leaderboard!
          </Typography>
        </div>
      </Box>
      <Box>
        <LeaderBoardTable data={globalLeaderboardData} />
      </Box>
    </>
  );
}
