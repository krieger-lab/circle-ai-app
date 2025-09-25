export async function orchestrateMessage(circle, message) {
  const responses = [];
  for (const agent of circle.agents) {
    const reply = `[${agent.name}] analizó el mensaje y propone: "${message} → posible respuesta generada por IA simulada."`;
    responses.push({
      agentId: agent.id,
      name: agent.name,
      avatar: agent.avatar,
      text: reply
    });
  }
  return responses;
}