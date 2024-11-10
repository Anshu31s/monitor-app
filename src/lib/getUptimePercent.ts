export function getMonitoringPercentage(
  totalUpTimeMinutes: number,
  monitoringFrom: Date
) {
  const currentTime = new Date();
  const createdAtTime = new Date(monitoringFrom);
  const totalTimeInMinutes = (currentTime.getTime() - createdAtTime.getTime()) / (1000 * 60); 

  if (totalTimeInMinutes === 0) return 0; 
  return (totalUpTimeMinutes / totalTimeInMinutes) * 100;
}
