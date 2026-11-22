export type Theme = "light" | "dark";

const STORAGE_KEY = "pcpartfinder.theme";


export function getStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

export function getPreferredTheme(): Theme {
  const stored = getStoredTheme();

  if (stored) {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Applies a theme without persisting it. */
export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

/** Applies and persists a theme. */
export function setTheme(theme: Theme) {
  applyTheme(theme);

  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
  }
}

export function toggleTheme(): Theme {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(next);
  return next;
}
