export class UserService {
  async findOrCreateByTelegramId(telegramId: string) {
    return { telegramId };
  }
}
