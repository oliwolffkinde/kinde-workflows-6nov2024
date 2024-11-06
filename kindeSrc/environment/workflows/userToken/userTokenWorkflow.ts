export const workflowSettings = {
    id: 'userTokensWorkflowv2',
    name: 'User token generation v2',
    trigger: 'user:tokens_generation',
    bindings: {
        console: {},
        'kinde.fetch': {},
        'kinde.idToken': {},
        'kinde.accessToken': {}
    }
};


export default async function handle(event: any) {
    console.log('Hello from user workflow!');
}
