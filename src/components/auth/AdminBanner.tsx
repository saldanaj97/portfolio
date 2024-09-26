import { User } from '@supabase/supabase-js';
import SignOutButton from './SignOutButton';

export function AdminBanner({ user }: { user: User }) {
  if (!user) return null;

  return (
    <div className="absolute left-0 right-0 top-0 flex items-center justify-between bg-yellow-200 px-4 py-2">
      <div className="w-1/3" /> {/* Empty div for left side spacing */}
      <div className="text-2xl font-bold text-black">ADMIN VIEW</div>
      <div className="w-1/3 text-right">
        <SignOutButton user={user} />
      </div>
    </div>
  );
}
