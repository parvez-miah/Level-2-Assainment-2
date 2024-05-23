import mongoose from "mongoose";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://devparvezmiah:krfToKuq8Y9IPh9d@level-2.15kzghp.mongodb.net/?retryWrites=true&w=majority&appName=Level-2" ||
        "mongodb://127.0.0.1: 27017"
    );
    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

app.listen(5000, () => {
  console.log(`Example app listening on port ${5000}`);
});

main();
