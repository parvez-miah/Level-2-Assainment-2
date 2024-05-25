import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});

main();
