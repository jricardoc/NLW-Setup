/**
 * Metódo HTTP:
 * Get -> Sempre que for buscar uma informação
 * Post -> Rota que vai criar algo
 * Put -> Atualizar um recurso por completo
 * Patch -> Atualizar uma informação específica de um recurso
 * Delete -> Quando for deletar um recurso dentro do backend
 */

import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from "@prisma/client"

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()

    return habits
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
})