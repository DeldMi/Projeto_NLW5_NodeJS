import { Router } from "express";

import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "./database/repositories/SettingsRepository";


const routes = Router();

/**
 ** Tipos de parâmetros
 * 
 * Routes Params => Parâmetros de rotas 
 *-- htttp://localhost:3333/settings/1
 * 
 * Query Params => Filtros e buscas
 *-- htttp://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body params => Objetos e Array
 *-- {[Objeto],[Objetos]}
 *
 */


routes.post("/settings", async (request, response) => {
    const { chat, username } = request.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
        chat,
        username
    });

    await settingsRepository.save(settings);

    return response.json(settings);
})


export { routes };