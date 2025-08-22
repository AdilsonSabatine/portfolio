import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const assistantId = process.env.WATSON_ENVIRONMENT_ID;
    const apiKey = process.env.WATSON_API_KEY;
    const baseUrl = process.env.WATSON_BASE_URL;

    const url = `${baseUrl}/v2/assistants/${assistantId}/sessions?version=2024-08-25`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${Buffer.from(`apikey:${apiKey}`).toString('base64')}`,
            'Content-Type': 'application/json',

        },
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
}