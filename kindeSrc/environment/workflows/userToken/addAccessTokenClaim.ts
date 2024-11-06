import {
    onUserTokenGeneratedEvent,
    getKindeAccessTokenHandle,
    WorkflowSettings,
    WorkflowTrigger,
  } from "@kinde/infrastructure";
  
  export const workflowSettings: WorkflowSettings = {
    id: "addAccessTokenClaim",
    trigger: WorkflowTrigger.UserTokenGeneration,
  };
  
  export default {
    async handle(event: onUserTokenGeneratedEvent) {
      const accessToken = accessTokenCustomClaims<{
        hello: string;
        ipAddress: string;
      }>();
  
      accessToken.hello = "Hello there!";
      accessToken.ipAddress = event.request.ip;
    },
  };