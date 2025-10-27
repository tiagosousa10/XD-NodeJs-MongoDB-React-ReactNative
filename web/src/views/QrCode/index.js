import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import {
  Smartphone,
  QrCode as QrCodeIcon,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useNavigate } from "react-router-dom";

//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function QrCode() {
  const [mac, setMac] = useState();
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  async function SaveMac() {
    //guardar no localStorage
    if (!mac) {
      alert("Precisas de informar o numero do QRCODE através do Telemovel");
    } else {
      localStorage.setItem("@todo/macaddress", mac);
      navigate("/");
      setRedirect(true);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-bronze-100 flex flex-col">
      {redirect && <Navigate to="/" />}

      <Header />

      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-sage-600 rounded-lg flex items-center justify-center">
                  <QrCodeIcon className="w-6 h-6 text-cream-50" />
                </div>
                <CardTitle className="text-2xl text-forest-900">
                  Sincronização
                </CardTitle>
              </div>
              <p className="text-forest-600">
                Capture o QR Code com seu smartphone para sincronizar suas
                tarefas
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* QR Code Section */}
              <div className="text-center space-y-4">
                <div className="bg-cream-50 rounded-lg p-8 border border-sage-200 inline-block">
                  <QRCodeSVG value="getmacaddress" size={280} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-forest-900">
                    Como sincronizar:
                  </h3>
                  <div className="space-y-2 text-sm text-forest-600">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="w-6 h-6 bg-sage-600 text-cream-50 rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </span>
                      <span>Abra o app TodoApp no seu smartphone</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="w-6 h-6 bg-sage-600 text-cream-50 rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </span>
                      <span>Escaneie este QR Code</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="w-6 h-6 bg-sage-600 text-cream-50 rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </span>
                      <span>Digite o código abaixo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Input Section */}
              <div className="space-y-4">
                <div className="text-center">
                  <Label
                    htmlFor="mac"
                    className="text-base font-medium text-forest-900 flex items-center justify-center space-x-2"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Código de Sincronização</span>
                  </Label>
                  <p className="text-sm text-forest-600 mt-1">
                    Digite os números que apareceram no seu smartphone
                  </p>
                </div>

                <div className="space-y-3">
                  <Input
                    id="mac"
                    type="text"
                    placeholder="Digite o código aqui..."
                    value={mac}
                    onChange={(e) => setMac(e.target.value)}
                    className="text-center text-lg font-mono tracking-wider"
                  />

                  <Button
                    onClick={SaveMac}
                    className="w-full flex items-center justify-center space-x-2"
                    disabled={!mac}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Sincronizar Dispositivos</span>
                  </Button>
                </div>
              </div>

              {/* Help Section */}
              <div className="bg-sage-50 rounded-lg p-4 border border-sage-200">
                <h4 className="font-semibold text-forest-900 mb-2 flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Precisa de ajuda?</span>
                </h4>
                <p className="text-sm text-forest-600">
                  Certifique-se de que o app TodoApp está instalado no seu
                  smartphone e que ambos os dispositivos estão conectados à
                  internet.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default QrCode;
