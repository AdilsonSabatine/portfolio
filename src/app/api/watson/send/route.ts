import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const assistantId = process.env.WATSON_ENVIRONMENT_ID;
    const apiKey = process.env.WATSON_API_KEY;
    const baseUrl = process.env.WATSON_BASE_URL;

    const { text, sessionId } = await req.json();

    const url = `${baseUrl}/v2/assistants/${assistantId}/sessions/${sessionId}/message?version=2024-08-25`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${Buffer.from(`apikey:${apiKey}`).toString('base64')}`,
        },
        body: JSON.stringify({
            input: { text: text }
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        return NextResponse.json({ error }, { status: response.status });
    }

    const data = await response.json();

    console.log("Watson response:", JSON.stringify(data));


    return NextResponse.json(data);
}