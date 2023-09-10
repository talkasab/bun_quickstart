import { z } from "zod";
const hello = "Hello via Bun!";
console.log(hello);

const bodyPartSchema = z.object({
  radlexId: z.string(),
  description: z.string(),
  synonyms: z.array(z.string()),
});

const data = {
  radlexId: "RID1234",
  description: "Left hand",
  synonyms: ["left hand", "left palm"],
};

const cleanData = bodyPartSchema.parse(data);
console.log(cleanData);
