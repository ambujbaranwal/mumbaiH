import { createOpenAI } from "@ai-sdk/openai";
import { createEdgeRuntimeAPI } from "@assistant-ui/react/edge";
 
const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY ?? "",
  baseURL: "https://api.groq.com/openai/v1",
});
 
export const { POST } = createEdgeRuntimeAPI({
  model: groq("llama3-70b-8192"),
});