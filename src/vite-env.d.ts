/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PAYPAL_URL?: string;
  readonly VITE_ETRANSFER_EMAIL?: string;
  readonly VITE_CRYPTO_ADDRESS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
