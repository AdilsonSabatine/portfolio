import { useState } from "react";

type Message = { text: string; isUser?: boolean; data?: any };

export function useChatbot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const sendMessage = async (text: string) => {
        if (text.trim() === "") return;

        let tempSessionId = sessionId;

        if (sessionId === null) {
            const response = await fetch('/api/watson/session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();

            tempSessionId = data.session_id;
            setSessionId(data.session_id);
        }

        setMessages([...messages, { text, isUser: true }]);
        setLoading(true);

        try {
            const response = await fetch('/api/watson/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sessionId: tempSessionId, text }),
            });

            const data = await response.json();

            const watsonMessage = data.output?.generic?.find((g: any) => g.response_type === "text")?.text;

            setMessages((prev) => [...prev, { text: watsonMessage, isUser: false, data }]);

            setLoading(false);
        } catch (error) {
            console.error("Error sending message to Watson:", error);
            setMessages((prev) => [...prev, { text: "Error communicating with chatbot.", isUser: false }]);
        }
    };

    return { messages, sendMessage, loading };
}
