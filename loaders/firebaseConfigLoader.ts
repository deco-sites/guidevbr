/**
 * @title Configurações de Cliente Firebase
 * @description Configurações de Cliente Firebase
 * @hideOption true
 */
export interface FirebaseConfigLoader {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
  adminEmailName: string;
}

export interface Props {
  /** @title Chave da API Firebase */
  apiKey: string;
  /** @title Domínio de autenticação */
  authDomain: string;
  /** @title ID do projeto */
  projectId: string;
  /** @title Url do Bucket de Armazenamento */
  storageBucket: string;
  /** @title ID do remetente do Cloud Messaging */
  messagingSenderId: string;
  /** @title ID do aplicativo */
  appId: string;
  /** @title ID de medição do Analytics */
  measurementId: string;
  /** @title Nome do email do administrador */
  adminEmailName: string;
}
/**
 * @title Configurações de Cliente Firebase
 */
export default function FirebaseConfigLoader(props: Props): FirebaseConfigLoader {
  return props;
}
