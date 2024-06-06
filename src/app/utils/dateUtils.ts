export function convertStringToDate(dateString: string) {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day); // Subtrai 1 do mês porque os meses em JavaScript são baseados em zero
}