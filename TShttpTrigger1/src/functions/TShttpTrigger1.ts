import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function TShttpTrigger1(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

export async function TShttpTrigger2(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello 2, ${name}!` };
};

app.http('TShttpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: TShttpTrigger1
});

app.http('TShttpTrigger2', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: TShttpTrigger2
});
