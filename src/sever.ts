import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import { IFeature } from "./core";

export class Server {
  private _app: Elysia;

  constructor() {
    this._app = new Elysia();
    this._app.use(swagger());
  }

  public configure(features: IFeature[]) {
    features.forEach((f) => f.configure(this._app));
  }

  public run() {
    this._app.listen(process.env.ELYSIA_BS_PORT ?? 3000);
    console.info(
      `Server is running at ${this._app.server?.hostname}:${this._app.server?.port}`
    );
  }
}
