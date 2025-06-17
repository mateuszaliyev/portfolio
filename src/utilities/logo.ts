import { LogoColorScheme, Logo as LogoType } from "@/constants";

import type { Logo } from "@/server/database/schema";

type LogoPickerOptions = {
  order?: { colorScheme?: LogoColorScheme[]; type?: LogoType[] };
};

export const createLogoPicker = (options?: LogoPickerOptions) => {
  const order = {
    colorScheme: options?.order?.colorScheme
      ? new Map<LogoColorScheme, number>(
          options.order.colorScheme.map((colorScheme, index) => [
            colorScheme,
            index,
          ]),
        )
      : undefined,
    type: options?.order?.type
      ? new Map<LogoType, number>(
          options.order.type.map((type, index) => [type, index]),
        )
      : undefined,
  };

  const getColorSchemeOrder = (logo?: Logo) =>
    logo?.colorScheme
      ? (order.colorScheme?.get(logo.colorScheme) ?? Infinity)
      : Infinity;

  const getTypeOrder = (logo?: Logo) =>
    logo ? (order.type?.get(logo.type) ?? Infinity) : Infinity;

  return (logos: Logo[]) => {
    let output = logos[0];

    if (!order.colorScheme && !order.type) return output;

    let outputOrder = {
      colorScheme: getColorSchemeOrder(output),
      type: getTypeOrder(output),
    };

    for (const input of logos) {
      if (!outputOrder.colorScheme && !outputOrder.type) break;

      const inputOrder = {
        colorScheme: getColorSchemeOrder(input),
        type: getTypeOrder(input),
      };

      if (
        inputOrder.type < outputOrder.type ||
        (inputOrder.type === outputOrder.type &&
          inputOrder.colorScheme < outputOrder.colorScheme)
      ) {
        output = input;
        outputOrder = inputOrder;
      }
    }

    return output;
  };
};
