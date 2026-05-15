import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-50">
        <header className="flex items-center justify-between">
          <h1 className="text-5xl">Prod Ready Architecture</h1>
          <nav className="text-2xl space-x-4 m-2">
            <Link to="/" className="[&.active]:font-bold">Home</Link>
            <Link to="/about"  className="[&.active]:font-bold">About</Link>
            <Link to="/components-playground" className="[&.active]:font-bold">Playground</Link>
            <Link to="/composition" className="[&.active]:font-bold">Composition</Link>
          </nav>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    )
  }
})