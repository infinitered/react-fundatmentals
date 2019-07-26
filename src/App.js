import React from "react"
import { createSwitchNavigator } from "@react-navigation/core"
import { createBrowserApp } from "@react-navigation/web"
import {
  CampDetailsScreen,
  CampListScreen,
  FeedScreen,
  SignInScreen,
  SignUpScreen,
} from "./screens"
import "./App.css"

const createPlaceholderScreen = text => () => <h1>{text} placeholder</h1>

const AppNavigator = createSwitchNavigator({
  camps: CampListScreen,
  camp: CampDetailsScreen,
  signIn: SignInScreen,
  signUp: SignUpScreen,
  feed: FeedScreen,
  cart: createPlaceholderScreen("cart"),
  purchases: createPlaceholderScreen("purchases"),
})

export default createBrowserApp(AppNavigator)
