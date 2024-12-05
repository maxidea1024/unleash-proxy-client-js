import type IStorageProvider from './storage-provider';

export default class LocalStorageProvider implements IStorageProvider {
  private readonly prefix: string;

  constructor(name = 'ganpa:repository') {
    this.prefix = name;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async save(name: string, data: any) {
    const jsonData = JSON.stringify(data);
    const key = `${this.prefix}:${name}`;
    try {
      window.localStorage.setItem(key, jsonData);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  get(name: string) {
    try {
      const key = `${this.prefix}:${name}`;
      const data = window.localStorage.getItem(key);
      return data ? JSON.parse(data) : undefined;
    } catch (error: unknown) {
      console.error(error);
    }
  }
}
