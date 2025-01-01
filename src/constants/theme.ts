// src/constants/theme.ts
import { Theme } from "@react-navigation/native";
import { Platform } from "react-native";
import COLORS from "./color";

const DEFAULT_THEME: Theme & {
  components: {
    button: {
      backgroundColor: string;
      borderRadius: number;
      padding: number;
      justifyContent: string;
      alignItems: string;
    };
    input: {
      backgroundColor: string;
      textColor: string;
      borderColor: string;
      borderRadius: number;
      padding: number;
    };
  };
} = {
  dark: false,
  colors: {
    primary: COLORS.primary,
    background: COLORS.background,
    card: "#FFFFFF",
    text: "#000000",
    border: COLORS.border,
    notification: COLORS.white,
  },
  fonts: Platform.select({
    ios: {
      regular: {
        fontFamily: "System",
        fontWeight: "400",
      },
      medium: {
        fontFamily: "System",
        fontWeight: "500",
      },
      bold: {
        fontFamily: "System",
        fontWeight: "600",
      },
      heavy: {
        fontFamily: "System",
        fontWeight: "700",
      },
    },
    default: {
      regular: {
        fontFamily: "sans-serif",
        fontWeight: "normal",
      },
      medium: {
        fontFamily: "sans-serif-medium",
        fontWeight: "normal",
      },
      bold: {
        fontFamily: "sans-serif",
        fontWeight: "600",
      },
      heavy: {
        fontFamily: "sans-serif",
        fontWeight: "700",
      },
    },
  }),
  components: {
    button: {
      backgroundColor: COLORS.primary,
      borderRadius: 16,
      padding: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      backgroundColor: COLORS.white,
      textColor: COLORS.input_placeholder_gray,
      borderColor: COLORS.primaryLight,
      borderRadius: 8,
      padding: 16,
    },
  },
};

export default DEFAULT_THEME;
