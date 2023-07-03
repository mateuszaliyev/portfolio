import type { ComponentProps } from "react";
import ReactWrapBalancer from "react-wrap-balancer";

export type BalancerProps = ComponentProps<typeof ReactWrapBalancer>;

export const Balancer = ({ ratio = 0.65, ...props }: BalancerProps) => (
  <ReactWrapBalancer ratio={ratio} {...props} />
);
