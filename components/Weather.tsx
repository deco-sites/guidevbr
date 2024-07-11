export default function Weather() {
  return (
    <div className="text-white">
      <h2 className="text-xl font-semibold">Previsão do Tempo para Hoje:</h2>
      <ul className="list-disc list-inside mt-4">
        <li>Temperatura: 25ºC</li>
        <li>Possibilidade de Chuva: 10%</li>
        <li>Horários com Chuva: 14:00, 3:00 </li>
        <li>Clima Amanhã:</li>
      </ul>
      <p>
        Saiba mais em{" "}
        <a href="" className="underline hover:text-gray-400">
          weather.com
        </a>
      </p>
    </div>
  );
}
