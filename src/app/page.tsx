import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import LeaderBoardTable from "../components/UI/Table/global";
import { fetchLeaderboardData } from "@/actions/actions";

export const metadata = {
  title: "FinalsDB",
  description: "A place for gamers of The Finals to check up on stats & more!",
};

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const globalLeaderData = await fetchLeaderboardData({ platform: "global" });
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
        <LeaderBoardTable data={globalLeaderData} />
      </Box>
    </>
  );
}
