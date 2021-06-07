module.exports = {
  env: {
    APP_NAME: "Z-Wallet",
    BASE_URL: "http://localhost:3004/backend4/api/v1",
  },
  async rewrites() {
    return [
      // Jadi kalau akses halaman login cukup pakai /login
      {
        source: "/login", // pengganti path pada react js
        destination: "/auth/login", // lokasi path
      },
      {
        source: "/register", // pengganti path pada react js
        destination: "/auth/register", // lokasi path
      },
      {
        source: "/haveLoggedIn", // pengganti path pada react js
        destination: "/auth/haveLoggedIn/haveLoggedIn", // lokasi path
      },
    ];
  },
};
