import { cva, cx, type VariantProps } from "@/satin/classname";
import { Heading } from "@/satin/typography";

export interface DescriptionListProps
  extends React.ComponentProps<"dl">,
    VariantProps<typeof descriptionList> {}

const descriptionList = cva({
  base: "flex w-full flex-wrap justify-between text-start",
  compoundVariants: [
    {
      border: true,
      className: "py-8",
      size: "lg",
    },
    {
      className: "my-7",
      margin: true,
      size: "lg",
    },
    {
      border: true,
      className: "py-4",
      size: "md",
    },
    {
      className: "my-6",
      margin: true,
      size: "md",
    },
  ],
  defaultVariants: { size: "md" },
  variants: {
    border: { true: "border-y border-gray-800" },
    margin: { true: "" },
    size: { lg: "gap-x-20 gap-y-4 text-base", md: "gap-x-16 gap-y-3 text-sm" },
  },
});

export const DescriptionItem = (props: React.ComponentProps<"div">) => (
  <div {...props} />
);

export const DescriptionList = ({
  border,
  className,
  margin,
  size,
  ...props
}: DescriptionListProps) => (
  <dl
    className={descriptionList({ border, className, margin, size })}
    {...props}
  />
);

export const DescriptionDetails = ({
  className,
  ...props
}: React.ComponentProps<"dd">) => (
  <dd className={cx("text-gray-400", className)} {...props} />
);

export const DescriptionTerm = ({
  className,
  ...props
}: React.ComponentProps<"dt">) => (
  <Heading asChild className={className} level="none">
    <dt {...props} />
  </Heading>
);
