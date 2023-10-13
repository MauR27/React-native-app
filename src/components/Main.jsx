import React from "react";
import { View } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import { Navigate, Route, Routes } from "react-router-native";
import LogInPage from "../pages/Login";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<LogInPage />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </View>
  );
};

export default Main;
