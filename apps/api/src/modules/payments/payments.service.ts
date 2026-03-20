export class PaymentsService {
  async createInvoice(userId: string, amount: number) {
    return { userId, amount, status: 'pending' };
  }
}
