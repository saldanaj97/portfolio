/* eslint-disable react/jsx-props-no-spreading */

'use client';

import AdminSignInButton from '~/components/auth/AdminSignInButton';

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="flex h-full w-full flex-col justify-center">
        <AdminSignInButton />
      </div>
    </div>
  );
}
