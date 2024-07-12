import { useSignal, useSignalEffect } from "@preact/signals";
import { useCallback } from "preact/hooks";

type Status = "loading" | "success" | "error";
type StatusColors = Record<Status, [string, string]>;
const statusColors: StatusColors = {
  loading: ["bg-yellow-400", "bg-yellow-500"],
  success: ["bg-green-400", "bg-green-500"],
  error: ["bg-red-400", "bg-red-500"],
};
type StatusText = Record<Status, string>;
const statusText: StatusText = {
  loading: "Carregando status...",
  success: "Todos os sistemas estão operacionais.",
  error: "Estamos enfrentando problemas técnicos. Clique para mais informações.",
};

type SystemStatusService = {
  name: string;
  status: "OK" | "DOWN";
  statusPage: string;
}[];

export interface Props {
  services: SystemStatusService;
}

export default function SystemStatus({ services }: Props) {
  const openedModal = useSignal<boolean>(false);

  const showModal = useCallback(() => {
    openedModal.value = true;
  }, []);
  const closeModal = useCallback(() => {
    openedModal.value = false;
  }, []);

  const status = services.length === 0 ? "loading" : services.some((service) => service.status === "DOWN") ? "error" : "success";

  const [bgColor, ringColor] = statusColors[status];
  const text = statusText[status];

  useSignalEffect(() => {});
  const message =
    status === "error"
      ? ` Os serviços: ${services
          .filter((service) => service.status === "DOWN")
          .map((service) => service.name)
          .join(", ")} estão com problemas. Clique para mais informações.`
      : status === "success"
      ? "Todos os sistemas estão operacionais."
      : "Carregando status...";
  const startPing = status === "error";
  const sortedDownServices = services.sort((a, b) => {
    if (a.status === "DOWN" && b.status === "DOWN") {
      return 0;
    }
    if (a.status === "DOWN") {
      return -1;
    }
    return 1;
  });

  return (
    <>
      <div className="animate-fade-in flex gap-4 items-center cursor-pointer" onClick={showModal}>
        <div className="tooltip" data-tip={message}>
          <span class="relative flex h-3 w-3">
            <span class={`${startPing && "animate-ping"} absolute inline-flex h-full w-full rounded-full ${ringColor} opacity-75 transition-colors duration-1000 ease-in-out`}></span>
            <span class={`relative inline-flex rounded-full h-3 w-3 ${bgColor} transition-colors duration-1000 ease-in-out`}></span>
          </span>
        </div>
        <span className="text-white font-medium">{text}</span>
      </div>
      <dialog className="modal bg-stone-500 bg-opacity-25" open={openedModal.value}>
        <div className="modal-box bg-stone-900">
          <h3 className="font-bold text-lg text-white">Sistema de Status!</h3>
          <p className="py-4">
            {sortedDownServices.map((service) => (
              <div className="flex items-center gap-2">
                <span className={`text-white  px-2 py-1 rounded-full`}>{service.name}:</span>
                <a href={service.statusPage} target="_blank" rel="noreferrer" className={service.status === "DOWN" ? "text-red-200" : "text-green-200"}>
                  {service.status}
                </a>
              </div>
            ))}
            {sortedDownServices.length === 0 && <span className="text-white">Carregando status...</span>}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-neutral" onClick={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
