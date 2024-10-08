import { Elysia } from "elysia";
import { IFeature } from "../../core";
import { create, getAll } from "./handlers";

class AuthorsFeature implements IFeature {
  configure(app: Elysia): void {
    app.group("/authors", (g) => {
      g.get("/", getAll.handler);
      g.post("/", create.handler, create.config);

      return g;
    });
  }
}

const authors = new AuthorsFeature();

export default authors;
