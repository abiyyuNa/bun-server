import { Elysia } from "elysia";
import { Logestic } from "logestic";

export const logs = new Elysia().use(Logestic.preset("common"));
