import { Outlet } from 'react-router';

export function MainLayout() {
  return (
    <div className="bg-background h-screen overflow-hidden py-8">
      <Outlet />
    </div>
  );
}
