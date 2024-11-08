import type IStorageProvider from './storage-provider';

export default class LocalStorageProvider implements IStorageProvider {
    private prefix: string;

    constructor(name = 'unleash:repository') {
        this.prefix = name;
    }

    public async save(name: string, data: any) {
        const repo = JSON.stringify(data);
        const key = `${this.prefix}:${name}`;
        try {
            window.localStorage.setItem(key, repo);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    public get(name: string) {
        try {
            const key = `${this.prefix}:${name}`;
            const data = window.localStorage.getItem(key);
            return data ? JSON.parse(data) : undefined;
        } catch (error: unknown) {
            console.error(error);
        }
    }
}
