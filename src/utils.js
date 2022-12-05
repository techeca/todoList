export function generateDate(){
  const newDate = new Date()
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  return `${months[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`
}
