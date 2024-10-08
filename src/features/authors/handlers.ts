import { Context, t } from "elysia";
import { db } from "../../data";
import { AuthorDto, CreateAuthorReq, CreateAuthorReqDef } from "./models";

export const getAll = {
  async handler() {
    const entities = await db.author.findMany({
      orderBy: { name: "asc" },
    });

    return entities.map(
      (e) =>
        <AuthorDto>{
          id: e.id,
          name: e.name,
        }
    );
  },
};

export const create = {
  async handler(ctx: Context) {
    const body = <CreateAuthorReq>ctx.body;

    const entity = await db.author.create({
      data: {
        name: body.name,
        bio: body.bio,
        date_of_birth: body.dateOfBirth,
        date_of_death: body.dateOfDeath,
      },
    });

    ctx.set.status = 201;
    return <AuthorDto>{
      name: entity.name,
    };
  },
  config: {
    body: CreateAuthorReqDef,
  },
};
