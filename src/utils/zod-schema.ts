import { z } from "zod";

const CountryOptionSchema = z.object({
  id: z
    .string()
    .describe(
      "Prefix with the country's ISO 3166-1 alpha-2 code followed by a dash and a unique identifier, e.g. 'us-person1'"
    ),
  description: z
    .string()
    .describe(
      "The option's description, e.g. 'Person 1 takes Person 2's surname'"
    ),
});
export const CountrySchema = z.object({
  id: z.string().describe("The country's ISO 3166-1 alpha-2 code"),
  name: z.string().describe("The country's ISO 3166 name"),
  description: z
    .string()
    .describe(
      "A short summary of the legal framework and traditions around surnames for married couples in the country"
    ),
  options: z.array(CountryOptionSchema),
});
