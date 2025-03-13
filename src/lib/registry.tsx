"use client";

import GlobalStyles from "@/components/styles/GlobalStyles";
import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

type Props = {
  children: React.ReactNode;
};

export default function StyledComponentsRegistry({ children }: Props) {
  const [styledComponentStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentStyleSheet.getStyleElement();
    styledComponentStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentStyleSheet.instance}>
      <GlobalStyles />
      {children}
    </StyleSheetManager>
  );
}
