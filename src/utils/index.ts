import { Groq } from "groq-sdk";
import Instructor from "@instructor-ai/instructor"; // npm install @instructor-ai/instructor
import { z } from "zod"; // npm install zod

// Set up the Groq client with Instructor
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });
const instructor = Instructor({
  client,
  mode: "TOOLS",
});

// Define your schema with Zod
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
const CountrySchema = z.object({
  id: z.string().describe("The country's ISO 3166-1 alpha-2 code"),
  name: z.string().describe("The country's ISO 3166 name"),
  description: z
    .string()
    .describe(
      "A short summary of the legal framework and traditions around surnames for married couples in the country"
    ),
  options: z.array(CountryOptionSchema),
});

async function getCountry() {
  try {
    // Request structured data with automatic validation
    const country = await instructor.chat.completions.create({
      model: "llama-3.1-8b-instant",
      response_model: {
        name: "Country",
        schema: CountrySchema,
      },
      messages: [
        {
          role: "user",
          content:
            "Give me the legal framework and traditions around surnames for married couples in the Russian Federation",
        },
      ],
      max_retries: 2, // Instructor will retry if validation fails
      top_p: 0.8,
    });

    // No need for try/catch or manual validation - instructor handles it!
    console.log(country);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Run the example
getCountry();
