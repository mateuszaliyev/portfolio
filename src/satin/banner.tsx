import { cva, type VariantProps } from "@/satin/classname";

export interface BannerProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof banner> {}

const banner = cva({
  base: "inline-flex rounded-full border border-gray-800 bg-gray-900 px-6 py-3 text-sm text-gray-300",
  variants: { clickable: { true: "" } },
});

export const Banner = ({ className, clickable, ...props }: BannerProps) => (
  <span className={banner({ className, clickable })} {...props} />
);
