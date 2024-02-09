#!/usr/bin/env jest
const app = require("../app");
const supertest = require("supertest");

const api = supertest(app);

describe("API", () => {
  test("returns the correct data format", async () => {
    await api.get('/api/v1/devs')
        .expect(200)
        .expect("content-type", /json/);
  });
});
