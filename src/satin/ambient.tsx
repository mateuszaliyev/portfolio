import { cx } from "@/satin/classname";

export const AmbientLight = ({
  "aria-hidden": ariaHidden = true,
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    aria-hidden={ariaHidden}
    className={cx(
      "pointer-events-none absolute inset-0 z-(--z-ambient) overflow-hidden",
      className,
    )}
    {...props}
  >
    <div className="absolute top-0 left-0 h-345 w-140 translate-y-[-21.875rem] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
    <div className="absolute top-0 left-0 h-345 w-60 origin-top-left [transform:rotate(-45deg)_translate(5%,-50%)] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
    <div className="absolute top-0 left-0 h-345 w-60 origin-top-left [transform:rotate(-45deg)_translate(-180%,-70%)] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
  </div>
);
