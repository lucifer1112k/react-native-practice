import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

function FeedNavigator(props) {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Listings"
        component={ListingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
