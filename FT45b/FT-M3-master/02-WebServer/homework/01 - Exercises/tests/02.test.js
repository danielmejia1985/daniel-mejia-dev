const server = require("../server");
const request = require("supertest");
const fs = require("fs");

describe("02 | Ejercicios", () => {
  it("GET /api, debe responder con un error o con un json", async () => {
    const response = await request(server).get("/api");
    console.log(response);
    if (response.statusCode === 200) {
      expect(response.type).toBe("application/json");
      expect(JSON.parse(response.text)).toEqual(
        JSON.parse(fs.readFileSync("./utils/dogsData.json"))
      );
      // console.log(response.text);
      // console.log(typeof response.text);
    } else {
      expect(response.statusCode).toBe(404);
      expect(response.text).toBe("json not found");
    }
  });
});
