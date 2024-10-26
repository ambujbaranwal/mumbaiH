import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyBUbMORLRL21vK0OEVDYlb8o_1IrKcMf4M");
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

export async function getChatResponse(prompt: string) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting chat response:', error);
    return 'I apologize, but I encountered an error. Please try again.';
  }
}