declare module 'pocketbase' {
  export default class PocketBase {
    constructor(url: string);
    collection(collectionName: string): {
      getFullList<T>(options?: { filter?: string }): Promise<T[]>;
      // Add other methods you use from PocketBase here
    };
  }
} 