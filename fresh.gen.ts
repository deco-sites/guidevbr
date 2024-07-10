// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $LoginButton from "./islands/LoginButton.tsx";
import * as $SystemStatus from "./islands/SystemStatus.tsx";
import * as $WelcomeMessage from "./islands/WelcomeMessage.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/LoginButton.tsx": $LoginButton,
    "./islands/SystemStatus.tsx": $SystemStatus,
    "./islands/WelcomeMessage.tsx": $WelcomeMessage,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
