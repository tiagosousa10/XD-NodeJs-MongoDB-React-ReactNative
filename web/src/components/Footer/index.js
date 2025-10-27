import React from "react";
import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-50 py-8 h-full">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-lg font-medium">ToDO</span>
          <Heart className="w-5 h-5 text-bronze-400" />
          <span className="text-lg font-medium">Organizando a sua vida!</span>
        </div>
        <p className="text-sm text-cream-200 mt-2">
          Feito com carinho para ajudar você a ser mais produtivo
        </p>
      </div>
    </footer>
  );
}

export default Footer;
