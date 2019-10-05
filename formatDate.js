function formatDate(userDate) {

  var date;
  var dia;
  var mes;
  var anio;
  var rdo;

  date = new Date(userDate);
  anio=date.getFullYear().toString();
 	mes=(date.getMonth()+1).toString();
  dia=date.getDate().toString();
  if(mes.length==1)mes="0"+mes;
  if(dia.length==1)dia="0"+dia;
  rdo=anio+mes+dia;

   return rdo;
}

console.log(formatDate("12/31/2014"));