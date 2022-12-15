import React from "react"
import { View, TouchableOpacity } from "react-native"

export const DrawerButton = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer()
  }

  return (
    <View>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/* <Icon style={styles.drawerItemIcon} name="ios-menu" /> */}
      </TouchableOpacity>
    </View>
  )
}
