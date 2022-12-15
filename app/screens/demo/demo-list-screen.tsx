import React, { useCallback, FC } from "react"
import { Image, FlatList, View, StyleSheet, ActivityIndicator } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { useFocusEffect } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Screen, Text, Wallpaper } from "@components"
import { color, spacing } from "@theme"
import { useStores } from "@models"
import { NavigatorParamList } from "../../navigators"
import { TEST_IDS } from "@constants"

import sharedStyles from "@styles/shared"

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
          ListHeaderComponent={() => <Text>TOTAL INCIDENTS IS: {incidentsStore.incidents.length}</Text>}
          contentContainerStyle={styles.flatList}
          data={incidentsStore.incidents}
          keyExtractor={(item) => String(item.id)}
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
