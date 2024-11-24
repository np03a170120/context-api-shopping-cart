import { createRootRoute } from "@tanstack/react-router";

import Navbar from "../components/Navbar";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navbar />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
