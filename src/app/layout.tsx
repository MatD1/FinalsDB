"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import theme from "@/theme";
import { Alert, AlertTitle, Button } from "@mui/material";
import WebVitals from "@/components/web-vitals";
import Script from "next/script";

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Steam Leaderboards", href: "/SteamLeader", icon: StarIcon },
  { text: "Xbox Leaderboards", href: "/XboxLeader", icon: ChecklistIcon },
  { text: "Playstation Leaderboards", href: "/PSNLeader", icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  { text: "Logout", icon: LogoutIcon },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <WebVitals /> */}
        <Script
          async
          src={`${process.env.NEXT_PUBLIC_WEB_VITALS_URL_NOAPI}/script.js`}
          data-website-id="99f81dac-f400-489c-a233-9dfbc6b4797c"
        />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: 2000 }}>
              <Toolbar sx={{ backgroundColor: "background.paper" }}>
                {/* <DashboardIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} /> */}
                <Typography variant="h6" color="text.primary">
                  FinalsDB |
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {LINKS.map(({ text, href, icon: Icon }) => (
                    <Link style={{ textDecoration: "none" }} href={href}>
                      <Button
                        key={text}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {text}
                      </Button>
                    </Link>
                  ))}
                </Box>
              </Toolbar>
            </AppBar>

            <Alert severity="warning" sx={{ mt: 10, mb: 2, marginX: 5 }}>
              <AlertTitle>Hello 👋</AlertTitle>
              This website is under constant construction and is constantly
              being updated! If you experience any issues try refreshing the
              page!.
            </Alert>
            <Alert severity="info" sx={{ mt: 2, mb: 2, marginX: 5 }}>
              <AlertTitle>Info Availability</AlertTitle>
              So far only a few community members have found usable data which
              we use to power this website. Until more are found or Embark
              releases an official API this website will be limited in its
              functionality.
            </Alert>
            <Alert severity="error" sx={{ mt: 2, mb: 2, marginX: 5 }}>
              <AlertTitle>Statement</AlertTitle>
              This website is not affiliated, associated or endorsed by Embark
              Studios or The Finals.
            </Alert>
            <Alert severity="error" sx={{ mt: 2, mb: 2, marginX: 5 }}>
              <AlertTitle>Leaderboard Max Players</AlertTitle>
              Currently the leaderboards only return what seems to be 10,000
              players max.
            </Alert>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: "background.default",
                mt: ["48px", "56px", "64px"],
                p: 3,
              }}
            >
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
