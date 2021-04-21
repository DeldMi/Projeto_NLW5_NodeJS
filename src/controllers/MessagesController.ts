import { Request, Response } from 'express';

import { MessagesService } from '../services/MessagesService';


class MessagesController {

    async create(request: Request, response: Response) {
        const { admin_id, text, user_id } = request.body;

        const messagesService = new MessagesService();

        const messages = await messagesService.create({
            admin_id,
            text,
            user_id,
        });

        return response.json(messages);

    }
}

export { MessagesController };