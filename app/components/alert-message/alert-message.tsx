import React from "react"
import { View, Text, StyleSheet } from "react-native"

import { color, fontSizes, spacing } from "@theme"
import { AlertMessageProps } from "./alert-message.props"
// import { Icon } from "@components"

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "center",
    alignSelf: "center",
  },
  // icon: {
  //   color: Colors.steel,
  // },
  message: {
    color: color.primary,
    fontSize: fontSizes.bannerText,
    marginHorizontal: spacing[3],
    marginTop: spacing[3],
    textAlign: "center",
  },
})

export const AlertMessage = (props: AlertMessageProps) => {
  const messageComponent = null
  if (props.show) {
    const { title } = props
    return (
      <View style={[styles.container, props.style]}>
        <View style={styles.contentContainer}>
          <Text allowFontScaling={false} style={styles.message}>
            {/* {icon && <Icon style={styles.icon} name={icon} size={25} color="#FFF" />}{" "} */}
            {title && title.toUpperCase()}
          </Text>
        </View>
      </View>
    )
  }

  return messageComponent
}

AlertMessage.defaultProps = { show: true }
