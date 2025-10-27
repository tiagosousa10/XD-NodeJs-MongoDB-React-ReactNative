import React, { useState, useEffect, useCallback } from "react";
import { Navigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { Calendar, Clock, Trash2, CheckCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Checkbox } from "../../components/ui/checkbox";

//  utils
import api from "../../services/api";
import isConnected from "../../utils/isConnected";

//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TypeIcons from "../../utils/typeIcons";

function Task() {
  const [redirect, setRedirect] = useState();
  const [type, setType] = useState(); //TIPO da TAREFA
  // const [taskId, setTaskId] = useState(); //--id da TAREFA
  const [done, setDone] = useState(false); //-- Se está FEITA ou NAO
  const [title, setTitle] = useState();
  const [description, setDescription] = useState(); //
  const [date, setDate] = useState();
  const [hour, setHour] = useState();

  const { id } = useParams(); // -- loadTaskDetails -- MANEIRA ATUALIZADA

  const loadTaskDetails = useCallback(async () => {
    await api.get(`/task/${id}`).then((response) => {
      setType(response.data.type);
      setDone(response.data.done);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setDate(format(new Date(response.data.when), "yyyy-MM-dd"));
      setHour(format(new Date(response.data.when), "HH:mm"));
    });
  }, [id]);

  async function Save() {
    //validaçao dos dados
    if (!title) return alert("Informe o Titulo da Tarefa!");
    else if (!description) return alert("Informe a Descriçao!");
    else if (!type) return alert("Informe o Tipo!");
    else if (!date) return alert("Informe a Data");
    else if (!hour) return alert("Informe a Hora!");

    if (id) {
      // se tiver um id vindo dos parametros vou utilizar o PUT para ATUALIZAR , se quiser
      await api
        .put(`/task/${id}`, {
          macaddress: isConnected,
          type,
          title,
          description,
          when: `${date}T${hour}:00.000`,
        })
        .then(() => {
          setRedirect(true);
        })
        .catch((e) => {
          alert("Nao foi possivel ATUALIZAR TAREFA", e);
        });
    } else {
      //crio uma tarefa com o POST
      await api
        .post(`/task`, {
          macaddress: isConnected,
          type,
          title,
          description,
          when: `${date}T${hour}:00.000`,
        })
        .then(() => {
          setRedirect(true);
        })
        .catch((e) => {
          alert("Nao foi possivel CRIAR TAREFA", e);
        });
    }
  }

  async function Remove() {
    const res = window.confirm("Deseja realmente remover a tarefa?");
    if (res === true) {
      await api
        .delete(`/task/${id}`)
        .then(() => setRedirect(true))
        .catch((e) => {
          alert("Não foi Possivel Excluir!");
        });
    }
  }

  useEffect(() => {
    if (!isConnected) {
      setRedirect(true);
    }

    if (id) {
      loadTaskDetails();
    }
  }, [id, loadTaskDetails]);

  const getTypeName = (type) => {
    const names = {
      1: "Trabalho",
      2: "Estudo",
      3: "Esporte",
      4: "Comida",
      5: "Viagem",
    };
    return names[type] || "Outros";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-bronze-100 flex flex-col">
      {redirect && <Navigate to="/" />}

      <Header />

      <main className="container mx-auto px-4 py-8 flex-1">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-forest-900">
              {id ? "Editar Tarefa" : "Nova Tarefa"}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Type Selection */}
            <div className="space-y-3">
              <Label className="text-base font-medium text-forest-900">
                Tipo da Tarefa
              </Label>
              <div className="grid grid-cols-5 gap-3">
                {TypeIcons.map(
                  (icon, index) =>
                    index > 0 && (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setType(index)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          type === index
                            ? "border-sage-600 bg-sage-50"
                            : "border-sage-200 bg-cream-50 hover:border-sage-300"
                        }`}
                      >
                        <img
                          src={icon}
                          alt={`tipo ${index}`}
                          className={`w-8 h-8 mx-auto ${
                            type && type !== index ? "opacity-50" : ""
                          }`}
                        />
                        <p className="text-xs mt-1 text-center text-forest-700">
                          {getTypeName(index)}
                        </p>
                      </button>
                    )
                )}
              </div>
            </div>

            {/* Title Input */}
            <div className="space-y-2">
              <Label
                htmlFor="title"
                className="text-base font-medium text-forest-900"
              >
                Título
              </Label>
              <Input
                id="title"
                type="text"
                placeholder="Título da tarefa"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Description Textarea */}
            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-base font-medium text-forest-900"
              >
                Descrição
              </Label>
              <Textarea
                id="description"
                rows={4}
                placeholder="Detalhes da tarefa"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="date"
                  className="text-base font-medium text-forest-900 flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Data</span>
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="time"
                  className="text-base font-medium text-forest-900 flex items-center space-x-2"
                >
                  <Clock className="w-4 h-4" />
                  <span>Hora</span>
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            {/* Done Checkbox */}
            <div className="flex items-center space-x-3">
              <Checkbox
                id="done"
                checked={done}
                onCheckedChange={(checked) => setDone(checked)}
              />
              <Label
                htmlFor="done"
                className="text-base font-medium text-forest-900 flex items-center space-x-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Tarefa Concluída</span>
              </Label>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                onClick={Save}
                className="flex-1 flex items-center justify-center space-x-2"
              >
                <span>Salvar</span>
              </Button>

              {id && (
                <Button
                  variant="destructive"
                  onClick={Remove}
                  className="flex items-center justify-center space-x-2"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Excluir</span>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}

export default Task;
