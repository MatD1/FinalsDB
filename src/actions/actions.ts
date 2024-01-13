"use server"

export const fetchGlobalLeaderboard = async () => {
  const res = await fetch(
    `https://embark-discovery-leaderboard.storage.googleapis.com/leaderboard-crossplay-discovery-live.json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 600
      }
    }
  );

  const global = await res.json();

  return global;
};


export const fetchPSNLeaderboard = async () => {
  const res = await fetch(
    `https://storage.googleapis.com/embark-discovery-leaderboard/leaderboard-psn-discovery-live.json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 600
      }
    }
  );

  const global = await res.json();

  return global;
};

export const fetchXboxLeaderboard = async () => {
  const res = await fetch(
    `https://storage.googleapis.com/embark-discovery-leaderboard/leaderboard-xbox-discovery-live.json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 600
      }
    }
  );

  const global = await res.json();

  return global;
};

export const fetchSteamLeaderboard = async () => {
  const res = await fetch(
    `https://storage.googleapis.com/embark-discovery-leaderboard/leaderboard-steam-discovery-live.json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 600
      }
    }
  );

  const global = await res.json();

  return global;
};