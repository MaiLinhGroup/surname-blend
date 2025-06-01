import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import { toGeminiSchema } from "gemini-zod";
import { CountrySchema } from "./zod-schema";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function getCountry() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:
      "Give me the legal framework and traditions around surnames for married couples in Thailand",
    config: {
      systemInstruction:
        "Imagine you are given a country and you need to give me the legal framework and traditions\
         around surnames for married couples in the country. Adhere strictly to the requested output format.",
      temperature: 0.3,
      responseMimeType: "application/json",
      responseSchema: toGeminiSchema(CountrySchema),
    },
  });
  const validationResult = CountrySchema.safeParse(
    JSON.parse(response.text ?? "{}")
  );
  if (!validationResult.success) {
    console.error("Zod validation failed:", validationResult.error.errors);
    // Combine Zod errors into a readable message
    const errorMessages = validationResult.error.errors
      .map((e) => `${e.path.join(".")}: ${e.message}`)
      .join(", ");
    throw new Error(`Invalid data received: ${errorMessages}`);
  }
  console.log(validationResult.data);
}

await getCountry();
