import { Static, t } from "elysia";

export type AuthorDto = {
  id: string;
  name: string;
};

export const CreateAuthorReqDef = t.Object({
  name: t.String(),
  bio: t.String(),
  dateOfBirth: t.Date(),
  dateOfDeath: t.Optional(t.Date()),
});

export type CreateAuthorReq = Static<typeof CreateAuthorReqDef>;
