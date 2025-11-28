import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-neutral-900 border-b border-neutral-800 p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-bold">Header Placeholder</h1>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-neutral-900 border-t border-neutral-800 p-8 mt-20">
        <div className="max-w-7xl mx-auto text-center text-neutral-400">
          <p>Footer Placeholder</p>
        </div>
      </footer>
    </div>
  );
}
