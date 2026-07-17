interface SparkleGlyphProps {
  size?: number;
  className?: string;
}

/**
 * 4-point smooth-corner sparkle matching the Figma "star/simple/smoothcorner"
 * vector used on the RC-Designs floating chat button. This is a custom glyph
 * (not a Phosphor icon), so it is kept demo-local and only used for the chat
 * launcher — the DS `sparkle` icon is intentionally left unchanged.
 */
export function SparkleGlyph({ size = 24, className }: SparkleGlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 23"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M11.2223 0.166436C11.2603 -0.0551357 11.5785 -0.0551357 11.6166 0.166436L12.1276 3.14491C12.761 6.8364 15.7748 9.7297 19.6201 10.3377L22.6701 10.82C22.8952 10.8556 22.8952 11.1795 22.6701 11.2151L19.6201 11.6974C15.7748 12.3055 12.761 15.1988 12.1276 18.8902L11.6166 21.8687C11.5785 22.0903 11.2603 22.0903 11.2223 21.8687L10.7113 18.8902C10.0779 15.1988 7.06404 12.3055 3.21874 11.6974L0.168718 11.2151C-0.0562987 11.1795 -0.0562993 10.8556 0.168718 10.82L3.21874 10.3377C7.06404 9.7297 10.0779 6.8364 10.7113 3.14491L11.2223 0.166436Z" />
    </svg>
  );
}
