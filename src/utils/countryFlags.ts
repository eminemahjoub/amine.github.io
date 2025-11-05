// Country code to flag emoji mapping
const countryFlags: Record<string, string> = {
  // Common countries
  TN: "🇹🇳", // Tunisia
  FR: "🇫🇷", // France
  US: "🇺🇸", // United States
  GB: "🇬🇧", // United Kingdom
  DE: "🇩🇪", // Germany
  IT: "🇮🇹", // Italy
  ES: "🇪🇸", // Spain
  NL: "🇳🇱", // Netherlands
  BE: "🇧🇪", // Belgium
  CH: "🇨🇭", // Switzerland
  CA: "🇨🇦", // Canada
  AU: "🇦🇺", // Australia
  JP: "🇯🇵", // Japan
  CN: "🇨🇳", // China
  IN: "🇮🇳", // India
  BR: "🇧🇷", // Brazil
  MX: "🇲🇽", // Mexico
  AR: "🇦🇷", // Argentina
  ZA: "🇿🇦", // South Africa
  EG: "🇪🇬", // Egypt
  AE: "🇦🇪", // United Arab Emirates
  SA: "🇸🇦", // Saudi Arabia
  // Add more as needed
  "REMOTE": "🌐", // Remote work
  "GLOBAL": "🌍", // Global/Multiple countries
};

/**
 * Get country flag emoji from country code (ISO 3166-1 alpha-2)
 * @param countryCode - ISO country code (e.g., "TN", "FR", "US")
 * @returns Flag emoji or 🌐 for remote/unknown
 */
export function getCountryFlag(countryCode: string | undefined | null): string {
  if (!countryCode) return "🌐";
  const upperCode = countryCode.toUpperCase().trim();
  const flag = countryFlags[upperCode];
  
  // Debug: log if flag is not found
  if (!flag) {
    console.warn(`Country flag not found for code: ${upperCode}`);
    return "🌐";
  }
  
  return flag;
}

/**
 * Get country name from country code
 * @param countryCode - ISO country code
 * @returns Country name or "Remote" for remote work
 */
export function getCountryName(countryCode: string | undefined | null): string {
  if (!countryCode) return "Remote";
  const upperCode = countryCode.toUpperCase();
  
  const countryNames: Record<string, string> = {
    TN: "Tunisia",
    FR: "France",
    US: "United States",
    GB: "United Kingdom",
    DE: "Germany",
    IT: "Italy",
    ES: "Spain",
    NL: "Netherlands",
    BE: "Belgium",
    CH: "Switzerland",
    CA: "Canada",
    AU: "Australia",
    JP: "Japan",
    CN: "China",
    IN: "India",
    BR: "Brazil",
    MX: "Mexico",
    AR: "Argentina",
    ZA: "South Africa",
    EG: "Egypt",
    AE: "United Arab Emirates",
    SA: "Saudi Arabia",
    REMOTE: "Remote",
    GLOBAL: "Global",
  };
  
  return countryNames[upperCode] || upperCode;
}

