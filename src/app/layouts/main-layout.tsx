import { Outlet } from 'react-router';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-[#E5E5E5]">
      <Outlet />
    </div>
  );
}
