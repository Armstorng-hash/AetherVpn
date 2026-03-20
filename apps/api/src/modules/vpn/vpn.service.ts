export class VpnService {
  async createClientConfig(userId: string) {
    return { userId, config: '' };
  }
}
