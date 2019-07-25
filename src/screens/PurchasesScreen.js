import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import { Button, Footer, NavBar, Screen, Tile } from "../components"

export const PurchasesScreen = ({ navigation }) => {
  const { token, reset } = useContext(AppContext)
  const [purchases, setPurchases] = useState([])

  const doSignOut = () => {
    reset()
    navigation.navigate("camps")
  }

  const fetchPurchases = async () => {
    const resp = await fetch("https://campminder-training-api.herokuapp.com/purchases", {
      headers: {
        Authorization: token
      }
    })

    if (resp.ok) {
      const json = await resp.json()
      // to combine nested arrays into one purchases array
      const flatPurchases = json.map(r => r.purchasedPosts).flat()
      setPurchases(flatPurchases)
    } else {
      alert("Unable to fetch purchases.")
    }
  }

  useEffect(() => { fetchPurchases() }, [])

  return (
    <Screen footer={
      <Footer>
        <Button onClick={doSignOut}>Sign Out</Button>
      </Footer>
    }>
      <NavBar />
      <div className="posts content">
        {purchases.map(p => (
          <Tile key={p.id} title={p.title} imageUrl={p.imageUrl} />
        ))}
      </div>
    </Screen>
  );
}