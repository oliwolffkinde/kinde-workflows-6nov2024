export const workflowSettings = {
    id: 'm2mTokenWorkflow',
    name: 'M2M token generation',
    trigger: 'm2m:token_generation',
    bindings: {
        console: {},
        'kinde.fetch': {},
        'kinde.m2mToken': {}
    }
};

export default async function handle(event: any) {
    console.log('Hello from M2M workflow!');
}
