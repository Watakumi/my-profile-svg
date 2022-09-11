type Size = "small" | "base" | "large";
type Option = {
  [key in Size]: {
    readonly width: number;
    readonly height: number;
    readonly fontSize: number;
    readonly lineHeight: number;
  };
};
type ReadOnlyOption = Readonly<Option>;
export const Options: ReadOnlyOption = {
  small: {
    width: 300,
    height: 100,
    fontSize: 42,
    lineHeight: 42,
  },
  base: {
    width: 340,
    height: 175,
    fontSize: 50,
    lineHeight: 50,
  },
  large: {
    width: 500,
    height: 180,
    fontSize: 75,
    lineHeight: 75,
  },
};

export function fetchOption(sizeName: string) {
  if (sizeName in Options) {
    return Options[sizeName as Size];
  }
  return Options.base;
}
