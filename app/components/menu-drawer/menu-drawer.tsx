import React from "react"
import { View, Text, TouchableOpacity, Linking, Platform, StyleSheet, SafeAreaView } from "react-native"
import Constants from "expo-constants"
import Share from "react-native-share"
// import * as StoreReview from "react-native-store-review"
import { CommonActions } from "@react-navigation/native"
// import crashlytics from "@react-native-firebase/crashlytics"

import { getCurrentRouteName } from "@utils/navigation"
import { spacing, color, fontSizes } from "@theme"
import { ShareOptions } from "react-native-share/lib/typescript/types"
import { CONTACT_US_EMAIL, NAVIGATION_SCREENS, NAVIGATION_ACTIONS } from "@constants"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  drawerItem: {
    alignItems: "center",
    flexDirection: "row",
    padding: spacing[5],
  },
  drawerItemTitle: {
    color: color.text,
    fontSize: fontSizes.h2,
  },
  drawerItemsContainer: {
    flex: 4,
    width: "100%",
  },
  footer: {
    padding: spacing[5],
  },
  footerItem: {
    color: color.primary,
    paddingLeft: spacing[3] + spacing[2],
  },
  // headerCloseIcon: {
  //   color: Colors.steel,
  //   fontSize: 34,
  // },
  headerContainer: {
    paddingVertical: spacing[5],
  },
  headerItem: {
    paddingLeft: spacing[3] + spacing[2],
  },
})

export const MenuDrawer = (props: any) => {
  const url = "akadenia.com"
  const title = "Akadenia"
  const message = "A client focused software agency"
  const icon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDctMDZUMDg6NTU6MDgtMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA5LTI3VDEwOjUwOjI5LTA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA5LTI3VDEwOjUwOjI5LTA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExOTU5ZWJkLTNhMzktNGRmNC1hMjcxLTA4YTY2MjA1OTFhZSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjcwM2ZkNzUzLTRlYjQtMGY0ZC04MDU1LTFhOGIwYTYxZDI4NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjI3NWU1ZWZjLTllYWUtNDFlMS04MzAwLWQ1MDMzNTQwZDFmZiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Mjc1ZTVlZmMtOWVhZS00MWUxLTgzMDAtZDUwMzM1NDBkMWZmIiBzdEV2dDp3aGVuPSIyMDIwLTA3LTA2VDA4OjU1OjA4LTA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTE5NTllYmQtM2EzOS00ZGY0LWEyNzEtMDhhNjYyMDU5MWFlIiBzdEV2dDp3aGVuPSIyMDIwLTA5LTI3VDEwOjUwOjI5LTA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7bpxPHAAAXcklEQVR42u1dC3QV9Zn/A0kgQN6v+5r3zL0z995AniTBBAiQSAJJQEB5RHAF0YpdXQHxKN3tWt3tWl+1Z+0RpLitWytq1bra0t1FRRQfdY8P2rVW0ypq5WmDyPac7vrt9/3vTcg7Nw9yH5k553fuZDLzzX++32/+j+/7zwxbuXIl64nW1lbW0NDAPJLBsvI87MKGJrZ8xSqWleNiimYyh0thF61Zx6rmLWSiaDCnbLCSimrWun4jK3DpTPMFWaCwNEdUfDWKbl6meQO3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"

  // message?: string;
  // title: string;
  // url?: string;
  // urls?: string[];
  // type?: string;
  // subject?: string;
  // email?: string;
  // recipient?: string;
  // excludedActivityTypes?: ActivityType[];
  // failOnCancel?: boolean;
  // showAppsToView?: boolean;
  // filename?: string;
  // filenames?: string[];
  // saveToFiles?: boolean;
  // activityItemSources?: ActivityItemSource[];
  // TODO: replace this library with expo-share
  // @ts-ignore
  const shareOptions: ShareOptions = Platform.select({
    ios: {
      activityItemSources: [
        {
          title,
          // For sharing url with custom title.
          placeholderItem: { type: "url", content: url },
          item: {
            default: { type: "url", content: url },
          },
          subject: {
            default: title,
          },
          linkMetadata: { originalUrl: url, url, title },
        },
        {
          // For sharing text.
          title,
          placeholderItem: { type: "text", content: message },
          item: {
            default: { type: "text", content: message },
            message: null, // Specify no text to share via Messages app.
          },
          linkMetadata: {
            // For showing app icon on share preview.
            title,
          },
        },
        {
          // For using custom icon instead of default text icon at share preview when sharing with message.
          title,
          placeholderItem: {
            type: "url",
            content: icon,
          },
          item: {
            default: {
              type: "text",
              content: `${message} ${url}`,
            },
          },
          linkMetadata: {
            title: message,
            icon,
          },
        },
      ],
    },
    default: {
      title,
      subject: title,
      message: `${message} ${url}`,
    },
  })

  const menuItems = [
    {
      title: "Home",
      iconName: "home-outline",
      screenToNavigate: NAVIGATION_SCREENS.home,
    },
    {
      title: "FAQs",
      iconName: "help-circle-outline",
      screenToNavigate: NAVIGATION_SCREENS.faq,
    },
    {
      title: "Contact Us",
      iconName: "mail-outline",
      screenToNavigate: NAVIGATION_SCREENS.contactUs,
    },
    {
      title: "Share",
      iconName: "share-outline",
      screenToNavigate: NAVIGATION_SCREENS.share,
    },
    {
      title: "Write a Review",
      iconName: "star-outline",
      screenToNavigate: NAVIGATION_SCREENS.review,
    },
  ]

  // if (authStore.isSignedIn()) {
  //   menuItems = R.insert(
  //     1,
  //     {
  //       title: "My Account",
  //       iconName: "person-outline",
  //       screenToNavigate: NAVIGATION_SCREENS.myAccount,
  //     },
  //     menuItems,
  //   )

  // menuItems.push({
  //   title: "Log Out",
  //   iconName: "log-out-outline",
  //   screenToNavigate: NAVIGATION_SCREENS.logout,
  // })
  // } else {
  // menuItems = R.insert(
  //   1,
  //   {
  //     title: "Log In",
  //     iconName: "person-outline",
  //     screenToNavigate: NAVIGATION_SCREENS.login,
  //   },
  //   menuItems,
  // )
  // }

  const handleClick = async (_index: number, screenToNavigate: string) => {
    props.navigation.toggleDrawer()

    switch (screenToNavigate) {
      case NAVIGATION_ACTIONS.logout:
        props.navigation.reset({ index: 0, routes: [{ name: NAVIGATION_SCREENS.home }] })
        break
      case NAVIGATION_ACTIONS.share:
        try {
          await Share.open(shareOptions)
        } catch (ex) {
          // crashlytics().recordError(ex, "ShareMenu")
        }
        break
      case NAVIGATION_ACTIONS.contactUs:
        try {
          const contactUsLink = `mailto:${CONTACT_US_EMAIL}`
          if (await Linking.canOpenURL(contactUsLink)) {
            await Linking.openURL(contactUsLink)
          }
        } catch (ex) {
          // crashlytics().recordError(ex, "ContactUsMenu")
        }
        break
      case NAVIGATION_ACTIONS.review:
        // StoreReview.requestReview()
        break
      case NAVIGATION_ACTIONS.faq: {
        const currentRoutName = getCurrentRouteName(props.navigation.state)

        if (currentRoutName === screenToNavigate) {
          const resetAction = CommonActions.reset({
            index: 0,
            routes: [{ name: screenToNavigate }],
          })

          props.navigation.dispatch(resetAction)
        } else {
          props.navigation.reset({ index: 0, routes: [{ name: screenToNavigate }] })
        }
        break
      }
      default:
        props.navigation.navigate(screenToNavigate)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerItem}
          onPress={() => {
            props.navigation.toggleDrawer()
          }}>
          {/* <Icon style={styles.headerCloseIcon} name="close-outline" /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.drawerItemsContainer}>
        {menuItems.map((item, key) => (
          <TouchableOpacity
            style={styles.drawerItem}
            key={item.title}
            onPress={async () => {
              await handleClick(key, item.screenToNavigate.path)
            }}>
            {/* {item.iconName && <Icon style={styles.drawerItemIcon} name={item.iconName} />} */}
            <Text style={styles.drawerItemTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerItem}>
          Version {Constants.nativeAppVersion}.{Constants.nativeBuildVersion}
        </Text>
      </View>
    </SafeAreaView>
  )
}
