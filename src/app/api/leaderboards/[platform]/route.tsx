import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: any }) {
  const platform = context.params.platform;
  console.log("web-api-v1, /api/leaderboard/", platform);

  let url = "";
  switch (platform) {
    case "steam":
      url =
        "https://storage.googleapis.com/embark-discovery-leaderboard/leaderboard-steam-discovery-live.json";
      break;
    case "xbox":
      url =
        "https://storage.googleapis.com/embark-discovery-leaderboard/leaderboard-xbox-discovery-live.json";
      break;
    case "psn":
      url =
        "https://storage.googleapis.com/embark-discovery-leaderboard/leaderboard-psn-discovery-live.json";
      break;
    case "global":
      url =
        "https://storage.googleapis.com/embark-discovery-leaderboard/leaderboard-crossplay-discovery-live.json";
      break;
    default:
      url =
        "https://storage.googleapis.com/embark-discovery-leaderboard/leaderboard-crossplay-discovery-live.json";
  }

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 600,
    },
  });

  const global = await res.json();

  return new NextResponse(JSON.stringify(global));
}
