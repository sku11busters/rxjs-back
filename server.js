import express from "express";
import cors from "cors";
import { faker } from "@faker-js/faker";

const app = express();

app.use(cors());

app.get("/messages/unread", (req, res) => {
  const message = {
    id: faker.number.float(),
    from: faker.internet.email(),
    subject: faker.lorem.sentence(),
    received: Date.now(),
  };
  res.json({
    status: "ok",
    timestamp: Date.now(),
    messages: [message],
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
