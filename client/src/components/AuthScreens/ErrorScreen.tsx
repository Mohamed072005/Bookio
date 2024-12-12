export const ErrorScreen: React.FC<{ error: string }> = ({ error }) => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-[350px] bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-red-600">Erreur</h2>
      <p className="text-center text-red-500">{error}</p>
    </div>
  </div>
);