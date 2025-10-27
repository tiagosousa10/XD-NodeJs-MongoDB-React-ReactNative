import React, { useState, useEffect, useCallback } from "react";
import { Link, Navigate } from "react-router-dom";
import { Calendar, Clock, AlertCircle } from "lucide-react";

import api from "../../services/api";
import isConnected from "../../utils/isConnected";

//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterCard from "../../components/FilterCard";
import TaskCard from "../../components/TaskCard";

function Home() {
  const [filterActived, setFilterActived] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const loadTasks = useCallback(async () => {
    await api
      .get(`/task/filter/${filterActived}/${isConnected}`)
      .then((response) => {
        setTasks(response.data);
        console.log(response.data);
      });
  }, [filterActived]);

  function Notification() {
    setFilterActived("late");
  }

  useEffect(() => {
    loadTasks();

    if (!isConnected) {
      setRedirect(true);
    }
  }, [filterActived, loadTasks]);

  const getFilterTitle = () => {
    const titles = {
      all: "Todas as Tarefas",
      today: "Tarefas de Hoje",
      week: "Tarefas da Semana",
      month: "Tarefas do Mês",
      year: "Tarefas do Ano",
      late: "Tarefas Atrasadas",
    };
    return titles[filterActived] || "Tarefas";
  };

  const getFilterIcon = () => {
    if (filterActived === "late") return <AlertCircle className="w-5 h-5" />;
    if (filterActived === "today") return <Calendar className="w-5 h-5" />;
    return <Clock className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-bronze-100 flex flex-col">
      {redirect && <Navigate to="/qrcode" />}

      <Header clickNotification={Notification} />

      <main className="container mx-auto px-4 py-8 flex-1">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <button type="button" onClick={() => setFilterActived("all")}>
              <FilterCard title="Todos" actived={filterActived === "all"} />
            </button>
            <button type="button" onClick={() => setFilterActived("today")}>
              <FilterCard title="Hoje" actived={filterActived === "today"} />
            </button>
            <button type="button" onClick={() => setFilterActived("week")}>
              <FilterCard title="Semana" actived={filterActived === "week"} />
            </button>
            <button type="button" onClick={() => setFilterActived("month")}>
              <FilterCard title="Mês" actived={filterActived === "month"} />
            </button>
            <button type="button" onClick={() => setFilterActived("year")}>
              <FilterCard title="Ano" actived={filterActived === "year"} />
            </button>
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            {getFilterIcon()}
            <h1 className="text-3xl font-bold text-forest-900">
              {getFilterTitle()}
            </h1>
          </div>
          <p className="text-forest-600">
            {tasks.length}{" "}
            {tasks.length === 1 ? "tarefa encontrada" : "tarefas encontradas"}
          </p>
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tasks.length > 0 ? (
            tasks.map((t) => (
              <Link key={t._id} to={`/task/${t._id}`}>
                <TaskCard
                  type={t.type}
                  title={t.title}
                  when={t.when}
                  done={t.done}
                />
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="bg-cream-50 rounded-lg p-8 border border-sage-200">
                <Calendar className="w-16 h-16 text-sage-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-forest-900 mb-2">
                  Nenhuma tarefa encontrada
                </h3>
                <p className="text-forest-600 mb-4">
                  {filterActived === "all"
                    ? "Você ainda não tem tarefas cadastradas."
                    : `Não há tarefas para o filtro "${getFilterTitle()}".`}
                </p>
                <Link
                  to="/task"
                  className="inline-flex items-center px-4 py-2 bg-sage-600 text-cream-50 rounded-md hover:bg-sage-700 transition-colors"
                >
                  Criar Nova Tarefa
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
