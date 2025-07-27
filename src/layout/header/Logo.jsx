// src/layout/header/Logo.jsx
import { Box } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-300 p-1.5 sm:p-2 shadow-md">
        <Box className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
      </div>
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-100 text-shadow-md">
        Martil.dev
      </h1>
    </div>
  );
}