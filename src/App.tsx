import React, { useState } from "react";
import "normalize.css";
import {
  Grommet,
  ThemeType,
  Box,
  Button,
  Heading,
  Collapsible,
  ResponsiveContext,
  Layer,
} from "grommet";
import { Notification, FormClose } from "grommet-icons";

const theme: ThemeType = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "NanumGothic",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background={{ color: "brand" }}
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: 1 }}
    {...props}
  />
);

export default function App(): JSX.Element {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                사용자를 현혹시키는 제목
              </Heading>
              <Button
                icon={<Notification />}
                onClick={() => {
                  setShowSidebar(!showSidebar);
                }}
              />
            </AppBar>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                사용자를 현혹시키는 내용
              </Box>
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    사용자를 현혹시키는 알림
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    justify="center"
                  >
                    사용자를 현혹시키는 모바일 알림
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}
