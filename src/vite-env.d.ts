/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PUBLIC_SANITY_PROJECT_ID: string;
  readonly VITE_PUBLIC_SANITY_DATASET: string;
  readonly VITE_PUBLIC_SANITY_API_VERSION: string;
  readonly VITE_PUBLIC_SANITY_CDN: boolean;

  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_ID: string;

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
