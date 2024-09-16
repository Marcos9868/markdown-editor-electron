import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error()
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO
  })
} catch (error: unknown) {
  throw new Error('Simple error' + error)
}
