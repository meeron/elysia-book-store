import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import homeFeature from "./features/home";

export class Server {
  private _app: Elysia;

  constructor() {
    this._app = new Elysia();
    this._app.use(swagger());
  }

  public configure() {
    homeFeature.configure(this._app);
  }

  public run() {
    this._app.listen(process.env.ELYSIA_BS_PORT ?? 3000);
    console.info(
      `Server is running at ${this._app.server?.hostname}:${this._app.server?.port}`
    );
  }

  // Used in testing only
  public handle(req: Request) {
    return this._app.handle(req);
  }
}
