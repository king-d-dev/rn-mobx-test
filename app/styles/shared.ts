import { spacing, color, fontSizes } from "@theme"
import { StyleSheet } from "react-native"

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

export default StyleSheet.create({
  backgroundImage: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  bottomDrawerContainer: {
    backgroundColor: color.background,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: spacing[3],
  },
  bottomDrawerDraggableIcon: {
    backgroundColor: color.palette.black[0],
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: spacing[5],
    // fontSize: fontSizes.h3
  },
  container: {
    backgroundColor: color.transparent,
    flex: 1,
  },
  darkLabel: {
    color: color.text,
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
  },
  mainWrapper: {
    backgroundColor: color.background,
    flex: 1,
  },
  privacyContainer: {
    alignItems: "center",
    flex: 1,
  },
  privacyImage: {
    height: "20%",
    resizeMode: "contain",
  },
  privacyLinkTitle: {
    color: color.text,
    letterSpacing: 1,
    lineHeight: 20,
    textAlign: "center",
  },
  roundButton: {
    alignItems: "center",
    flexDirection: "row",
    height: 70,
  },
  scrollableReelsWrapper: {
    alignItems: "flex-start",
    backgroundColor: color.transparent,
    margin: 0,
    paddingBottom: spacing[2],
  },
  section: {
    margin: spacing[3],
    padding: spacing[3],
  },
  spinner: {
    paddingBottom: spacing[2],
  },
  spinnerSubTitle: {
    color: color.text,
  },
  spinnerWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[5],
    width: "100%",
    height: "100%",
  },
  textLeft: {
    textAlign: "left",
  },
  titleText: {
    alignItems: "center",
    borderColor: color.transparent,
    borderWidth: 0,
    color: color.text,
    fontSize: fontSizes.h1,
    marginHorizontal: spacing[3],
    marginTop: spacing[2],
    padding: spacing[2],
    textAlign: "center",
  },
  webviewSpinner: {
    backgroundColor: color.background,
    bottom: 0,
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
})
