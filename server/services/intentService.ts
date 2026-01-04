import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export interface SearchIntent {
    location?: string;
    skills?: string[];
    isOnline?: boolean;
    isPaid?: boolean;
    includeOnline?: boolean;
}

export const parseUserIntent = async (query: string): Promise<SearchIntent> => {
    try {
        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You are a search parser. Extract structured data from the user's query.
                    Return ONLY valid JSON with these keys:
                    - location (string or null)
                    - skills (array of strings)
                    - isOnline (boolean or null)
                    - isPaid (boolean or null)
                    
                    If the user mentions a specific country or city, set 'location'.
                    If they mention 'remote' or 'online', set 'isOnline' to true.
                    If they mention 'paid' or 'prizes', set 'isPaid' to true.
                    `
                },
                {
                    role: "user",
                    content: query
                }
            ],
            model: "llama3-8b-8192",
            temperature: 0,
            response_format: { type: "json_object" }
        });

        const content = completion.choices[0]?.message?.content;
        if (!content) return {};

        const parsed = JSON.parse(content);
        
        // Logic: If location is specified, we should also include online events
        // because online events are accessible from everyone.
        if (parsed.location) {
            parsed.includeOnline = true;
        }

        return parsed;
    } catch (error) {
        console.error("Error parsing intent:", error);
        return {}; 
    }
};
