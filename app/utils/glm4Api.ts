export async function callGLM4Api(prompt: string): Promise<string> {
  try {
    const response = await fetch('/api/glm4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error('Error calling GLM-4 API:', error);
    return 'Error: Could not get a response from the AI. Please try again.';
  }
} 