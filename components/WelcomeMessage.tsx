import { useSignal, useSignalEffect } from "@preact/signals";

type DayPeriod = "morning" | "afternoon" | "night";
const dayGreetings: Record<DayPeriod, string> = {
  morning: "Bom dia",
  afternoon: "Boa tarde",
  night: "Boa noite",
};
const dayElementSizes: Record<DayPeriod, string> = {
  morning: "w-[300px]",
  afternoon: "w-[320px]",
  night: "w-[300px]",
};

export default function Section() {
  const message = useSignal<DayPeriod | undefined>(undefined);

  useSignalEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 5 && hour < 12) {
      message.value = "morning";
    } else if (hour >= 12 && hour < 18) {
      message.value = "afternoon";
    } else {
      message.value = "night";
    }
  });

  const greetings = dayGreetings[message.value ?? "morning"];
  const elementSize = message.value ? dayElementSizes[message.value] : "h-0";

  return (
    <div className={`w-0 h-9 overflow-hidden transition-all duration-1000 ease-in-out ${elementSize}`}>
      <h1 className={`text-3xl font-bold text-white text-clip ${elementSize}`}>{greetings}, Guilherme!</h1>
    </div>
  );
}
