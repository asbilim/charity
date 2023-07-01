import {COLORS} from "./colors";

const SIZES = {
  // Extra small size.
  xSmall: 10,

  // Small size.
  small: 15,

  // Medium size.
  medium: 18,

  // Large size.
  large: 26,

  // Extra large size.
  xLarge: 32,

  // Extra extra large size.
  xxLarge: 40,

  xxXLarge: 48,

  xxxXLarge: 64,

  xxxxXLarge: 80,
};

const SPACING = {
  // Extra small spacing.
  xSmall: 4,

  // Small spacing.
  small: 8,

  // Medium spacing.
  medium: 16,

  // Large spacing.
  large: 24,

  // Extra large spacing.
  xLarge: 32,

  // Extra extra large spacing.
  xxLarge: 40,
};

const BORDER_RADIUS = {
  // Extra small border radius.
  xSmall: 4,

  // Small border radius.
  small: 8,

  // Medium border radius.
  medium: 16,

  // Large border radius.
  large: 32,
};

const ELEVATION = {
  // Extra small elevation.
  xSmall: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  // Small elevation.
  small: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },

  // Medium elevation.
  medium: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
};

export { SIZES, SPACING, BORDER_RADIUS, ELEVATION };
