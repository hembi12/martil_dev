// src/layout/header/Logo.jsx
import { Box } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 p-1.5 sm:p-2 shadow-md">
        <Box className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-shadow-md">
        Martil.dev
      </h1>
    </div>
  );
}