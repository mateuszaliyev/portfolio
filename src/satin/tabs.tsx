"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import {
  Content,
  Root,
  type TabsContentProps,
  type TabsProps,
  type TabsTriggerProps,
} from "@radix-ui/react-tabs";

import { Button, type ButtonProps } from "@/satin/button";
import { cx } from "@/satin/classname";

export { TabsList, TabsTrigger } from "@radix-ui/react-tabs";

interface TabsButtonProps extends Omit<ButtonProps, "value"> {
  active: ButtonProps;
  value: TabsTriggerProps["value"];
}

type TabsContext = {
  setValue: NonNullable<TabsProps["onValueChange"]>;
  value: TabsProps["value"];
};

const TabsContext = createContext<TabsContext | undefined>(undefined);

const useTabs = () => {
  const context = useContext(TabsContext);

  if (!context) throw new Error("`useTabs` must be used within `<Tabs />`");

  return context;
};

export const Tabs = ({
  defaultValue,
  onValueChange,
  value: externalValue,
  ...props
}: TabsProps) => {
  const [internalValue, setInternalValue] =
    useState<typeof externalValue>(defaultValue);

  const value = useMemo(
    () => externalValue ?? internalValue,
    [externalValue, internalValue],
  );

  const handleValueChange = useCallback<NonNullable<typeof onValueChange>>(
    (value) => {
      setInternalValue(value);
      onValueChange?.(value);
    },
    [onValueChange],
  );

  return (
    <TabsContext value={{ setValue: handleValueChange, value }}>
      <Root onValueChange={handleValueChange} value={value} {...props} />
    </TabsContext>
  );
};

export const TabsButton = ({ active, value, ...props }: TabsButtonProps) => {
  const { value: currentValue } = useTabs();
  return <Button {...props} {...(currentValue === value ? active : {})} />;
};

export const TabsContent = ({ className, ...props }: TabsContentProps) => (
  <Content className={cx("outline-none", className)} {...props} />
);
