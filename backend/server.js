require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

let isConnected = false;

async function initDB() {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
}

/**
 * LOCAL DEVELOPMENT
 * Runs only when NOT on Vercel
 */
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;

  initDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running locally on port ${PORT}`);
    });
  });
}

/**
 * VERCEL SERVERLESS EXPORT
 */
module.exports = async (req, res) => {
  await initDB();
  return app(req, res);
};
