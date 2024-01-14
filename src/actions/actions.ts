"use server";

interface Platform {
  platform: "psn" | "xbox" | "steam" | "global";
}
export const fetchLeaderboardData = async ({ platform }: Platform) => {
  // Use an absolute URL for local development and relative URL for deployment
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? `http://localhost:${
          process.env.PORT || 3000
        }/api/leaderboards/${platform}`
      : `/api/leaderboards/${platform}`;

  const res = await fetch(apiUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 600,
    },
  });

  const global = await res.json();

  return global;
};
