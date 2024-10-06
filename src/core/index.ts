import { Elysia } from "elysia";

export interface IFeature {
  configure(app: Elysia): void;
}
