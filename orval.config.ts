import { defineConfig } from "orval";

export default defineConfig({
    backend: {
        input: {
            target: './backend/openapi.yaml'
        },
        output: {
            target: './src/generated/backend/api.ts',
            client: 'react-query',
            schemas: './src/generated/backend/model',
            mode: 'tags-split',
            baseUrl: process.env.NEXT_PUBLIC_API_URL,
            clean: true,
            prettier: true
        }
    }
})