// import OpenAI from 'openai';

// // Initialize OpenAI with your API key
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // Function to generate personalized insights based on user data
// export async function generateInsight(
//   userData: {
//     name: string;
//     zodiacSign?: string;
//     personalityType?: string;
//     interests?: string[];
//     questions?: string[];
//   }
// ) {
//   try {
//     // Construct a prompt based on user data
//     const promptText = constructInsightPrompt(userData);
    
//     // Call the OpenAI API
//     const response = await openai.chat.completions.create({
//       model: "gpt-4", // or whichever model you prefer
//       messages: [
//         {
//           role: "system",
//           content: "You are an insightful guide helping people discover more about themselves. Provide thoughtful, personalized insights that inspire self-reflection and growth."
//         },
//         {
//           role: "user",
//           content: promptText
//         }
//       ],
//       temperature: 0.7,
//       max_tokens: 500,
//     });

//     return {
//       insight: response.choices[0].message.content,
//       source: "gpt-4",
//       timestamp: new Date().toISOString(),
//     };
//   } catch (error) {
//     console.error('Error generating AI insight:', error);
//     throw new Error('Failed to generate insight');
//   }
// }

// // Helper function to construct a personalized prompt
// function constructInsightPrompt(userData: any): string {
//   const { name, zodiacSign, personalityType, interests, questions } = userData;
  
//   let prompt = `Generate a personalized insight for ${name}.`;
  
//   if (zodiacSign) {
//     prompt += ` Their zodiac sign is ${zodiacSign}.`;
//   }
  
//   if (personalityType) {
//     prompt += ` Their personality type is ${personalityType}.`;
//   }
  
//   if (interests && interests.length > 0) {
//     prompt += ` They're interested in ${interests.join(', ')}.`;
//   }
  
//   if (questions && questions.length > 0) {
//     prompt += ` They've asked about: "${questions.join('" and "')}"`;
//   }
  
//   prompt += ` Based on this information, provide a thoughtful insight that helps them understand themselves better. Include references to relevant frameworks (like Greek mythology, modern psychology, or spiritual traditions) where appropriate. Make the insight personal, meaningful, and actionable.`;
  
//   return prompt;
// }

// export default openai;