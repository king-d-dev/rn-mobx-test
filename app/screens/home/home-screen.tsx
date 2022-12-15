import React, { FC } from "react"
import { StyleSheet, Text, View } from "react-native"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"

import sharedStyles from "@styles/shared"
import { Button, Screen } from "@components"
import { NAVIGATION_SCREENS, TEST_IDS } from "@constants"
import { NavigatorParamList } from "../../navigators"
import { useStores } from "@models"

const styles = StyleSheet.create({
  ...sharedStyles,
})

let count = 0
export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(({ navigation }) => {
  const { incidentsStore } = useStores()
  const nextScreen = () => navigation.navigate(NAVIGATION_SCREENS.demoList.name)

  console.log("RENDERING HOEM", count++)

  return (
    <Screen style={styles.container} preset="fixed">
      <View testID={TEST_IDS.homeScreen} style={styles.mainWrapper}>
        <Text style={styles.titleText}>Welcome to your Akadenia template react native app</Text>
        <View style={styles.buttonWrapper}>
          <Button
            text="Load incidents"
            loading={incidentsStore.status === "LOADING"}
            onPress={async () => {
              incidentsStore.getIncidents()
              nextScreen()
            }}
          />
        </View>
      </View>
    </Screen>
  )
})
