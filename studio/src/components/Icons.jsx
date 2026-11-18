export function Heart({ filled = false }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={filled ? "is-filled" : ""}>
      <path
        d="M12 20.2s-6.8-4.2-6.8-8.7A3.7 3.7 0 0 1 12 9.2a3.7 3.7 0 0 1 6.8 2.3c0 4.5-6.8 8.7-6.8 8.7z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Bubble() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5.2 6.2h13.6v8.6H8.4L5.2 17.6V6.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
