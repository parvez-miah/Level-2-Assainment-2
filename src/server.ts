import mongoose from "mongoose";
import app from "./app";
import config from "../app/config";
async function main() {
  try {
    await mongoose.connect(config.DATABASE_URL as string);
    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

app.listen(config.PORT, () => {
  console.log(`Example app listening on port ${config.PORT}`);
});

main();
