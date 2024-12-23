import type IStorageProvider from './storage-provider';

export default class InMemoryStorageProvider implements IStorageProvider {
  private readonly store = new Map();

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async save(name: string, data: any) {
    this.store.set(name, data);
  }

  async get(name: string) {
    return this.store.get(name);
  }
}
