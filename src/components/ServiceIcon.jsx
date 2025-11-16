const stroke = '#141415'

const size = 44

const icons = {
  gallery: (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="24" height="20" rx="3" stroke={stroke} strokeWidth="2.4" />
      <circle cx="13" cy="13" r="2.8" fill={stroke} />
      <path
        d="M9 21l5.5-5 8 7 5.5-5.5"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  plan: (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="20" height="20" rx="2" stroke={stroke} strokeWidth="2.4" />
      <path
        d="M6 16h8v10M16 12h10M16 6v6"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  cube: (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 4l11 6v12l-11 6-11-6V10l11-6z"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M5 10l11 6 11-6" stroke={stroke} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M16 16v12" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  ),
  home: (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M6 14.5L16 6l10 8.5"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13.5v12h14v-12"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M14 25v-6h4v6" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  ),
}

function ServiceIcon({ name }) {
  return icons[name] ?? icons.gallery
}

export default ServiceIcon
