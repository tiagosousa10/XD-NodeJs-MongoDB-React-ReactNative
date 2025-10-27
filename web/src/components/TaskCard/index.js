import React, { useMemo } from "react";
import { format } from "date-fns";
import { Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

import typeIcons from "../../utils/typeIcons";

function TaskCard({ type, title, when, done }) {
  const date = useMemo(() => format(new Date(when), "dd/MM/yyyy"), [when]);
  const hour = useMemo(() => format(new Date(when), "HH:mm"), [when]);

  const getTypeColor = (type) => {
    const colors = {
      1: "bg-bronze-100 text-bronze-700",
      2: "bg-sage-100 text-sage-700",
      3: "bg-copper-100 text-copper-700",
      4: "bg-forest-100 text-forest-700",
      5: "bg-cream-200 text-forest-700",
    };
    return colors[type] || "bg-sage-100 text-sage-700";
  };

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
    <Card
      className={`hover:shadow-lg transition-all duration-200 cursor-pointer ${
        done ? "opacity-60 bg-sage-50" : "bg-cream-50"
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center">
              <img
                src={typeIcons[type]}
                alt="ícone da tarefa"
                className="w-6 h-6"
              />
            </div>
            <div>
              <CardTitle
                className={`text-lg ${
                  done ? "line-through text-forest-500" : "text-forest-900"
                }`}
              >
                {title}
              </CardTitle>
              <Badge
                variant="secondary"
                className={`mt-1 ${getTypeColor(type)}`}
              >
                {getTypeName(type)}
              </Badge>
            </div>
          </div>
          {done && (
            <Badge variant="default" className="bg-sage-600">
              Concluída
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center space-x-4 text-sm text-forest-600">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{hour}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
