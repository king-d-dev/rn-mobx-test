import * as SecureStore from "expo-secure-store"

export async function isAvailable(): Promise<boolean> {
  return await SecureStore.isAvailableAsync()
}

export async function set(key: string, value: string, options?: SecureStore.SecureStoreOptions) {
  await SecureStore.setItemAsync(key, value, options)
}

export async function get(key: string): Promise<string> {
  return await SecureStore.getItemAsync(key)
}

export async function remove(key: string, options?: SecureStore.SecureStoreOptions) {
  await SecureStore.deleteItemAsync(key, options)
}
