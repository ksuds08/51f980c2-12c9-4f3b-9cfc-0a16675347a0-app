// Auto-generated index.ts for Pages Functions routing
import type { Request } from 'itty-router';

import { UserAuthenticationSystemHandler } from './UserAuthenticationSystem';
import { AIMarketResearchModuleHandler } from './AIMarketResearchModule';
import { BusinessPlanGeneratorHandler } from './BusinessPlanGenerator';

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/api/UserAuthenticationSystem") return UserAuthenticationSystemHandler(request);
  if (path === "/api/AIMarketResearchModule") return AIMarketResearchModuleHandler(request);
  if (path === "/api/BusinessPlanGenerator") return BusinessPlanGeneratorHandler(request);

  return new Response("Not found", { status: 404 });
}
