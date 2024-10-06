import Elysia from "elysia";
import { IFeature } from "../../core";

class HomeFeature implements IFeature {
  configure(app: Elysia): void {
    app.get("/", () => ({ name: "Book Store", version: "1.0.0" }));
  }
}

const home = new HomeFeature();

export default home;
