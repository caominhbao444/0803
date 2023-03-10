import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../../color/Color";
import ListSpot from "../ListSpot/ListSpot";
import * as Animatable from "react-native-animatable";
import { useGetUserSpotRequestQuery } from "../../features/user/userApiSlice";
import Loading from "../../pages/Loading/Loading";
const RequestSpot = ({ navigation }) => {
  const { data } = useGetUserSpotRequestQuery();
  if (!data) return <Loading />;
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data.request}
        renderItem={({ item }) => (
          <Animatable.View animation="slideInDown" duration={1000} delay={300}>
            <ListSpot
              key={item._id}
              id={item._id}
              name={item.recieverAddress}
              crypto={item.firstUnit}
              fiat={item.secondUnit}
              amount={item.amount}
              total={item.total}
              creditCard={item.senderAddress}
              status={item.status}
              date={item.date}
            />
          </Animatable.View>
        )}
      />
    </View>
  );
};

export default RequestSpot;

const styles = StyleSheet.create({});
