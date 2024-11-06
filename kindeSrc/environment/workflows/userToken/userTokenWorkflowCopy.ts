export const workflowSettings = {
    id: 'userTokensWorkflowCopy',
    name: 'User token generation copy',
    trigger: 'user:tokens_generation_copy',
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
