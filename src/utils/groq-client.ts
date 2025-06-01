import "dotenv/config";
import { Groq } from "groq-sdk";
import Instructor from "@instructor-ai/instructor";
import { CountrySchema } from "./zod-schema";

// Set up the Groq client with Instructor
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });
const instructor = Instructor({
  client,
  mode: "TOOLS",
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

await getCountry();
