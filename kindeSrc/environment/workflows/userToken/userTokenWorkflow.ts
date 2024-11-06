export const workflowSettings = {
    id: 'userTokensWorkflow',
    name: 'User token generation',
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
