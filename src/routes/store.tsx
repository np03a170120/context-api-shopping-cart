import { createFileRoute } from "@tanstack/react-router";
import Store from "../pages/Store";

export const Route = createFileRoute("/store")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Store />
    </>
  );
}
