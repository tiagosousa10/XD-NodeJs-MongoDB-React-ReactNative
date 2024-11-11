const TaskModel = require('../model/TaskModel')
const { isPast } = require('date-fns');



const TaskValidation = async (req,res,next) => {

  const {macaddress,type,title,description,when} =  req.body;

  if(!macaddress)
     return res.status(400).json({error: 'MACaddress é obrigatorio'})
  else if (!type)
   return res.status(400).json({error:'Tipo é obrigatorio'})
  else if (!title)
   return res.status(400).json({error:'Titulo é obrigatorio'})
  else if (!description)
   return res.status(400).json({error:'Descricao é obrigatorio'})
  else if (!when)
   return res.status(400).json({error:'Data e Hora é obrigatorio'})
  else if (isPast(new Date(when)))
   return res.status(400).json({error:'Escolha uma data e hora FUTURA!'})
  else {



    let exists ;

    if(req.params.id){
      exists = await TaskModel.findOne( // fazer uma consulta na base de dados
        { '_id': {'$ne': req.params.id}, //se ja tem algum id
          'when': {'$eq': new Date(when)}, //data
          'macaddress': {'$in': macaddress} // e macaddress
        })
  
    }else{

    exists = await TaskModel.findOne(
      {
        'when': {'$eq': new Date(when)},
        'macaddress': {'$in': macaddress}
      })

    }



      if(exists) {
        return res.status(400).json({error:'Já existe uma TAREFA nesse Horario !'})

      }

    next()
  }



  }

module.exports = TaskValidation;
