import { getTextColor } from '@/lib/get-text-color';
import { Badge } from '@/components/ui/badge';

import { LanguagesColorConfig } from '@/config/languages-color';

interface LanguageBadgeProps {
  language: string;
}

export default function LanguageBadge({ language }: LanguageBadgeProps) {
  return (
    <Badge
      style={{
        backgroundColor:
          LanguagesColorConfig[language as keyof typeof LanguagesColorConfig],
        color: `${getTextColor(
          LanguagesColorConfig[language as keyof typeof LanguagesColorConfig]
        )}`,
      }}
      className='mx-1 rounded-sm'
    >
      {language}
    </Badge>
  );
}
