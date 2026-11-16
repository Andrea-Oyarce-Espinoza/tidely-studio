"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { esESLocale } from "@sanity/locale-es-es";
import { postType } from "./sanity/schemaTypes/post";

export default defineConfig({
  name: "tidy-studio-blog",
  title: "Tidy Studio · Notas con sentido",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/admin",
  plugins: [
    esESLocale(),
    structureTool({
      title: "Mi blog",
      structure: (S) => S.list().title("Notas con sentido").items([
        S.listItem().title("Todas mis entradas").child(S.documentTypeList("post").title("Mis entradas")),
        S.listItem().title("Borradores").child(S.documentList().title("Borradores").filter('_type == "post" && _id in path("drafts.**")')),
        S.listItem().title("Publicadas").child(S.documentList().title("Entradas publicadas").filter('_type == "post" && !(_id in path("drafts.**")) && !(_id in path("versions.**"))')),
      ]),
    }),
  ],
  schema: { types: [postType] },
});
