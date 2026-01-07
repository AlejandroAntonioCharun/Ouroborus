import { Outlet } from "react-router-dom";

import FloatingChat from "../pages/UI/message/message";
import FloatMusicYoutube from "../pages/UI/Music/musica";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Rutas hijas */}
      <Outlet />

      {/* Chat flotante GLOBAL */}
      <FloatingChat />

      <FloatMusicYoutube />
    </div>
  );
};

export default MainLayout;
