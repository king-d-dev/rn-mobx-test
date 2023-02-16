import React, { FC } from "react"
import { Image, FlatList, View, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { Screen, Text, Wallpaper } from "@components"
import { color, spacing } from "@theme"
import { useStores } from "@models"
import { NavigatorParamList } from "../../navigators"
import { TEST_IDS } from "@constants"

import sharedStyles from "@styles/shared"
import { uuidv4 } from "@utils"

const styles = StyleSheet.create({
  ...sharedStyles,
  flatList: {
    paddingHorizontal: spacing[4],
  },
  image: {
    borderRadius: 35,
    height: 65,
    width: 65,
  },
  listContainer: {
    alignItems: "center",
    flexDirection: "row",
    padding: spacing[3],
  },
  listText: {
    color: color.text,
    marginLeft: spacing[3],
  },
})

export const DemoListScreen: FC<StackScreenProps<NavigatorParamList, "demoList">> = observer(() => {
  const { incidentsStore } = useStores()

  return (
    <View testID={TEST_IDS.demoListScreen} style={styles.mainContainer}>
      <Wallpaper />
      <Screen style={styles.container} preset="fixed">
        <FlatList
          ListHeaderComponent={() => (
            <View>
              <Text>TOTAL INCIDENTS IS: {incidentsStore.incidents.length}</Text>
              <Text>INCIDENTS LOADED FROM: {incidentsStore.api.config.url}</Text>
            </View>
          )}
          contentContainerStyle={styles.flatList}
          data={incidentsStore.incidents}
          keyExtractor={() => uuidv4()}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.listText}>
                {item.name} ({item.visibility})
              </Text>
            </View>
          )}
        />
      </Screen>
    </View>
  )
})
