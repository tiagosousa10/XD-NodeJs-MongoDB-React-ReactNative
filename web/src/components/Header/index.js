import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Home, PlusCircle, Smartphone, LogOut } from "lucide-react";

import api from "../../services/api";
import isConnected from "../../utils/isConnected";

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  useEffect(() => {
    lateVerify();
  }, []);

  async function Logout() {
    localStorage.removeItem("@todo/macaddress");
    window.location.reload();
  }

  return (
    <header className="bg-cream-50 border-b border-sage-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-sage-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-cream-50 font-bold text-lg">T</span>
            </div>
            <h1 className="text-xl font-bold text-forest-900">TodoApp</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Início */}
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-2 rounded-md text-forest-700 hover:bg-sage-100 hover:text-sage-800 transition-all duration-200 font-medium"
            >
              <Home className="w-4 h-4" />
              <span>Início</span>
            </Link>

            {/* Separador */}
            <div className="w-px h-6 bg-sage-300 mx-2"></div>

            {/* Nova Tarefa */}
            <Link
              to="/task"
              className="flex items-center space-x-2 px-4 py-2 rounded-md text-forest-700 hover:bg-sage-100 hover:text-sage-800 transition-all duration-200 font-medium"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Nova Tarefa</span>
            </Link>

            {/* Separador */}
            <div className="w-px h-6 bg-sage-300 mx-2"></div>

            {/* Sincronizar ou Sair */}
            {!isConnected ? (
              <Link
                to="/qrcode"
                className="flex items-center space-x-2 px-4 py-2 rounded-md text-forest-700 hover:bg-sage-100 hover:text-sage-800 transition-all duration-200 font-medium"
              >
                <Smartphone className="w-4 h-4" />
                <span>Sincronizar</span>
              </Link>
            ) : (
              <button
                onClick={Logout}
                className="flex items-center space-x-2 px-4 py-2 rounded-md text-forest-700 hover:bg-copper-100 hover:text-copper-800 transition-all duration-200 font-medium border border-sage-200 hover:border-copper-300"
              >
                <LogOut className="w-4 h-4" />
                <span>Sair</span>
              </button>
            )}

            {/* Notificações */}
            {lateCount > 0 && (
              <>
                <div className="w-px h-6 bg-sage-300 mx-2"></div>
                <button
                  onClick={clickNotification}
                  className="relative flex items-center space-x-2 px-4 py-2 rounded-md text-forest-700 hover:bg-bronze-100 hover:text-bronze-800 transition-all duration-200 font-medium"
                >
                  <Bell className="w-4 h-4" />
                  <span>Notificações</span>
                  <div className="absolute -top-1 -right-1 h-5 w-5 bg-copper-600 text-cream-50 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                    {lateCount}
                  </div>
                </button>
              </>
            )}
          </nav>

          {/* Navigation - Mobile */}
          <nav className="flex md:hidden items-center space-x-2">
            <Link
              to="/"
              className="p-2 rounded-md text-forest-700 hover:bg-sage-100 transition-colors"
            >
              <Home className="w-5 h-5" />
            </Link>
            <Link
              to="/task"
              className="p-2 rounded-md text-forest-700 hover:bg-sage-100 transition-colors"
            >
              <PlusCircle className="w-5 h-5" />
            </Link>
            {!isConnected ? (
              <Link
                to="/qrcode"
                className="p-2 rounded-md text-forest-700 hover:bg-sage-100 transition-colors"
              >
                <Smartphone className="w-5 h-5" />
              </Link>
            ) : (
              <button
                onClick={Logout}
                className="p-2 rounded-md text-forest-700 hover:bg-copper-100 transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            )}
            {lateCount > 0 && (
              <button
                onClick={clickNotification}
                className="relative p-2 rounded-md text-forest-700 hover:bg-bronze-100 transition-colors"
              >
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-copper-600 text-cream-50 rounded-full flex items-center justify-center text-xs font-bold">
                  {lateCount}
                </div>
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
