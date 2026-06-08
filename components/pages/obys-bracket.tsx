type ObysBracketProps = {
  className?: string;
};

export function ObysBracket({ className = "" }: ObysBracketProps) {
  return (
    <div className={`obys-lab-bracket ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 96 220" preserveAspectRatio="none" focusable="false">
        <path
          fill="currentColor"
          d="M16 0h80v40H66c-28 0-49 31-49 70s21 70 49 70h30v40H16L0 204V16L16 0Z"
        />
      </svg>
      <svg viewBox="0 0 96 220" preserveAspectRatio="none" focusable="false">
        <path
          fill="currentColor"
          d="M16 0h80v40H66c-28 0-49 31-49 70s21 70 49 70h30v40H16L0 204V16L16 0Z"
        />
      </svg>
    </div>
  );
}
