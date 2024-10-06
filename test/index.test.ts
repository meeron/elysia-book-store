import { describe, expect, it } from "bun:test";
import { Server } from "../src/sever";

describe("Home", () => {
  const server = new Server();
  server.configure();

  it("return proper response", async () => {
    // Arrange
    const req = new Request("http://localhost/");

    // Act
    const res = await server.handle(req);

    // Assert

    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.name).toBe("Book Store");
    expect(data.version).toBe("1.0.0");
  });
});
