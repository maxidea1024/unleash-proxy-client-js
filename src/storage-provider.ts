export default interface IStorageProvider {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  save: (name: string, data: any) => Promise<void>;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  get: (name: string) => Promise<any>;
}
