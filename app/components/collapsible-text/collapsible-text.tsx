import React, { useState } from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"

import { color, spacing } from "@theme"
import { CollapsibleTextProps } from "./collapsible-text.props"

const styles = StyleSheet.create({
  defaultText: {
    color: color.text,
    height: 70,
    letterSpacing: 1,
    lineHeight: 20,
    textAlign: "left",
  },
  expandedText: {
    height: "auto",
  },
  readMore: {
    color: color.text,
    marginTop: spacing[3],
    textDecorationLine: "underline",
  },
})

export const CollapsibleText = (props: CollapsibleTextProps) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <Text style={[styles.defaultText, expanded && styles.expandedText]} numberOfLines={expanded ? 99 : 5}>
        {props.text}
      </Text>
      <TouchableOpacity
        onPress={() => {
          setExpanded(!expanded)
        }}>
        <Text style={styles.readMore}>Read {expanded ? "Less" : "More"}</Text>
      </TouchableOpacity>
    </>
  )
}
