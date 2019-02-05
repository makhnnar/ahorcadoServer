import React, { Component } from "react";
import { SceneView } from "@react-navigation/core";
import { Link } from "@react-navigation/web";

export default class AppView extends Component {
  render() {
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];
    return (
      <div style={{ height: "100%" }}>
        <h1>My Project</h1>
        <div
          style={{
            borderBottom: "1px solid #99b",
            padding: 20
          }}
        >
          <div
            style={{
                borderBottom: "1px solid #99b",
                padding: 20
            }}
          >
          <Link routeName={"Inicio"} navigation={navigation}>
            Inicio
          </Link>
          </div> 
          <div
            style={{
                borderBottom: "1px solid #99b",
                padding: 20
            }}
          >
          <Link routeName={"GameView"} navigation={navigation}>
            GameView
          </Link>

          </div>

          <div
            style={{
                borderBottom: "1px solid #99b",
                padding: 20
            }}
          >
          <Link routeName={"Loading"} navigation={navigation}>
            Loading
          </Link>

          </div>
        </div>
        <div>
          <SceneView
            navigation={descriptor.navigation}
            component={descriptor.getComponent()}
          />
        </div>
      </div>
    );
  }
}
