//Workaround for: Augmentations for the global scope can only be directly nested in external modules or ambient module declarations
export {}

declare global {
  interface Window { _paq: Tracker; }
}
