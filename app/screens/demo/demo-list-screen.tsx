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
  const {
    characterStore: { loadCharacters, characters, status, errorMessage },
  } = useStores()

  useFocusEffect(
    useCallback(() => {
      async function fetchData() {
        await loadCharacters()
      }

      fetchData()
    }, [loadCharacters]),
  )

  return (
    <View testID={TEST_IDS.demoListScreen} style={styles.mainContainer}>
      <Wallpaper />
      {status === "pending" && <ActivityIndicator />}
      {status === "error" && <Text>Error occured while attempting to query characters ${errorMessage}</Text>}
      <Screen style={styles.container} preset="fixed">
        <FlatList
          contentContainerStyle={styles.flatList}
          data={characters}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.listText}>
                {item.name} ({item.status})
              </Text>
            </View>
          )}
        />
      </Screen>
    </View>
  )
})
