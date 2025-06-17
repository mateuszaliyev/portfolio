import { Platform } from "@/constants";

import { GitHubIcon } from "@/satin/icons/github";
import { LinkedInIcon } from "@/satin/icons/linkedin";

export interface PlatformIconProps extends React.ComponentProps<"svg"> {
  platform: Platform;
}

const PLATFORM_ICONS = {
  [Platform.GitHub]: GitHubIcon,
  [Platform.LinkedIn]: LinkedInIcon,
} satisfies Record<
  Platform,
  (props: React.ComponentProps<"svg">) => React.ReactNode
>;

export const PlatformIcon = ({ platform, ...props }: PlatformIconProps) => {
  const Icon = PLATFORM_ICONS[platform];
  return <Icon {...props} />;
};
