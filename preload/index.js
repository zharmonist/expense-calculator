"use strict";
const electron = require("electron");
const api = {
  openExternal: (url) => electron.shell.openExternal(url)
};
if (process.contextIsolated) {
  electron.contextBridge.exposeInMainWorld("electron", api);
} else {
  window.electron = api;
}
