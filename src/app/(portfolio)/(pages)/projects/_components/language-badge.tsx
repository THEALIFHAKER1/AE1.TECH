import { getTextColor } from "@/lib/get-text-color";
import { Badge } from "@/components/ui/badge";

import { LanguagesColorConfig } from "@/config/languages-color";

interface LanguageBadgeProps {
  language: string;
}

export default function LanguageBadge({ language }: LanguageBadgeProps) {
  const languageColor =
    LanguagesColorConfig[language as keyof typeof LanguagesColorConfig] ?? "";
  const textColor = getTextColor(languageColor, language);

  return (
    <Badge
      style={{
        backgroundColor: languageColor,
        color: `${textColor}`,
      }}
      className="rounded-sm text-[0.6rem] leading-2"
    >
      {language}
    </Badge>
  );
}
