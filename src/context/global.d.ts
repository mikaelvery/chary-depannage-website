interface Window {
  lenis?: {
    scrollTo: (
      position: number,
      options?: { duration?: number; easing?: (t: number) => number }
    ) => void;
  };
}
