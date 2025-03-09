/// <reference types="vite/client" />

interface ImportMetaEnv{
    readonly VITE_producto_entero_url: string
    readonly VITE_Cart__service_url : string

}

interface ImportMeta{
    readonly env: ImportMetaEnv;
}