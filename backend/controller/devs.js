#!/usr/bin/env node
const devRouter = require("express").Router();
const fs = require("fs");


devRouter.get("/", (request, response) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      console.log("error", err);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
    const devsData = JSON.parse(data);
    return response.json(devsData);
  });
});

module.exports = devRouter;
