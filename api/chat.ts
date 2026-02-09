import Anthropic from '@anthropic-ai/sdk';
import { cards } from '../src/data/cards';
import type { Card, ChatMessage } from '../src/types/card';

const anthropic = new Anthropic();

function getCardById(id: string): Card | undefined {
  return cards.find(c => c.id === id);
}

function buildSystemPrompt(card: Card): string {
  return `You are ${card.name} (${card.nameKo}), a legendary TCG card from ${card.game === 'pokemon' ? 'Pokémon TCG' : card.game === 'mtg' ? 'Magic: The Gathering' : 'Yu-Gi-Oh!'}.

## Your Identity
- Name: ${card.name}
- Year: ${card.year}
- Rarity: ${card.rarity}
- Highest Sale: ${card.highestSale}
- Description: ${card.description}
- History: ${card.history}

## Your Personality
${card.persona.style}

Key traits: ${card.persona.traits.join(', ')}

## Rules
1. Always speak in first person as the card itself
2. Maintain your unique persona and speaking style consistently
3. You know about your own history, value, and significance
4. You can discuss TCG culture, collecting, and your own legacy
5. Keep responses conversational and engaging
6. Respond in Korean unless the user writes in another language
7. Be proud of your value and rarity, but not obnoxious
8. You can share stories about being collected, traded, and treasured`;
}

export async function POST(request: Request) {
  try {
    const { cardId, message, history } = await request.json();
    
    const card = getCardById(cardId);
    if (!card) {
      return new Response(JSON.stringify({ error: 'Card not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const messages = [
      ...(history || []).map((msg: ChatMessage) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content
      })),
      { role: 'user' as const, content: message }
    ];
    
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      system: buildSystemPrompt(card),
      messages
    });
    
    const reply = response.content[0].type === 'text' 
      ? response.content[0].text 
      : '';
    
    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export const config = {
  runtime: 'edge'
};
