import { Secret } from "apps/website/loaders/secret.ts";

/**
 * @title Configurações de Previsão do Tempo com AccuWeather
 * @hideOption true
 */
export interface WeatherResponseLoader {
  currentWeather: string;
  temperature: number;
  rainPossibility: number;
  rainTimes: string[];
  tomorrowWeather: string;
}

export interface Props {
  /** @title Chave da API Firebase */
  apiKey: Secret;
  /** @title Chave de Localização */
  /** @description Obtenha em: https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/geoposition/search*/
  locationKey: string;
}
/**
 * @titleConfigurações de Previsão do Tempo com AccuWeather
 */
export default function FirebaseConfigLoader(props: Props): FirebaseConfigLoader {
  return props;
}
