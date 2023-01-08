import React from "react";
import * as stories from "@devsoutinho/sknui/storybook/native";
import { Box, Text, Touchable } from "@devsoutinho/sknui/native";

type Stories = keyof typeof stories;

function reducer(state: any, action: any) {
  console.warn("state", state.disabled);

  // TODO: Solve Keys first and types latter
  if (action.type === "boolean") {
    return {
      ...state,
      [action.key]: !state[action.key],
    }
  }

  return state;
}


export function StorybookComponentScreen(props: RootStackStorybookComponentScreenProps) {
  const componentName = props.route.params.componentName;
  const { Component, controls } = stories[componentName as Stories];
  const [propsInState, dispatch] = React.useReducer(reducer, controls.props);
  const ComponentToBeRendered = Component as React.ComponentType<any>;

  const entries = Object.entries(controls.props).map(([key, value]) => {
    if (key === "styleSheet") {
      return {
        name: key,
        type: key,
      }
    }

    return {
      name: key,
      type: typeof value,
    }
  });

  const controlComponents = entries.map(({ name, type }) => {
    if (name === "children") return null;

    return (
      <Touchable
        onTap={() => {
          dispatch({ key: name, type: type })
        }}
        styleSheet={{
          marginBottom: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Text key={name}>
            Name: {name}
          </Text>
        </Box>
        <Box>
          <Text key={name}>
            Type: {type}
          </Text>
        </Box>
      </Touchable>
    )
  });

  return (
    <Box
      styleSheet={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Box
        styleSheet={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ComponentToBeRendered {...propsInState} />
      </Box>
      <Box
        styleSheet={{
          flex: 1,
        }}
      >
        <Box
          styleSheet={{
            padding: 20,
          }}
        >
          {controlComponents}
        </Box>
      </Box>
    </Box>
  );
}
