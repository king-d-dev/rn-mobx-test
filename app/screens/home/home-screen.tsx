import React, { FC, useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"

import sharedStyles from "@styles/shared"
import { Button, Screen } from "@components"
import { NAVIGATION_SCREENS, TEST_IDS } from "@constants"
import { NavigatorParamList } from "../../navigators"
import { useStores } from "@models"

const styles = StyleSheet.create({
  ...sharedStyles,
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(({ navigation }) => {
  const [text, setText] = useState("")
  const { incidentsStore } = useStores()
  const nextScreen = () => navigation.navigate(NAVIGATION_SCREENS.demoList.name)

  return (
    <Screen style={styles.container} preset="fixed">
      <View testID={TEST_IDS.homeScreen} style={styles.mainWrapper}>
        <Text style={styles.titleText}>Welcome to your Akadenia template react native app</Text>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="enter a multiplier"
          keyboardType="number-pad"
        />

        <View style={styles.buttonWrapper}>
          <Button
            text="Load incidents"
            loading={incidentsStore.status === "LOADING"}
            onPress={async () => {
              await incidentsStore.getIncidents(parseInt(text))
              setText("")

              nextScreen()
            }}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button text="Clear incidents" onPress={incidentsStore.clearIncidents} />
        </View>
      </View>
    </Screen>
  )
})
