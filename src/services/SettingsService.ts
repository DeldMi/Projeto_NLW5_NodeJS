import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";


interface ISettingsCreate {
    chat: boolean;
    username: string;

}

class SettingsService {
    async create({ chat, username }: ISettingsCreate) {
        const settingsRepository = getCustomRepository(SettingsRepository);

        const userAlreadyExists = await settingsRepository.findOne({
            username
        });

        if (userAlreadyExists) {
            throw new Error("O usuário ja existe!")
        }

        const setting = settingsRepository.create({
            chat,
            username,
        });

        await settingsRepository.save(setting);

        return setting;

    }
}

export { SettingsService };