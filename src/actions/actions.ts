"use server";

interface Platform {
  platform: "psn" | "xbox" | "steam" | "global";
}
export const fetchLeaderboardData = async ({ platform }: Platform) => {
  const host = process.env.NEXT_PUBLIC_HOST;
  const res = await fetch(`${host}/api/leaderboards/${platform}`, {
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
