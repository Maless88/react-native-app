import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>Benvenuto</Text>
        <Text style={styles.title}>La tua nuova app è pronta</Text>
        <Text style={styles.subtitle}>
          Personalizza la schermata iniziale, aggiungi sezioni e collega la navigazione quando sei pronto.
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
          <Text style={styles.primaryLabel}>Inizia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton} activeOpacity={0.8}>
          <Text style={styles.linkLabel}>Scopri di più</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#101018",
    paddingHorizontal: 24,
    paddingVertical: 32
  },
  hero: {
    flex: 1,
    justifyContent: "center"
  },
  eyebrow: {
    color: "#999",
    fontSize: 14,
    marginBottom: 4
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 8
  },
  subtitle: {
    color: "#ccc",
    fontSize: 15,
    lineHeight: 20
  },
  actions: {
    gap: 12,
    paddingBottom: 24
  },
  primaryButton: {
    backgroundColor: "#4f46e5",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center"
  },
  primaryLabel: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16
  },
  linkButton: {
    alignItems: "center",
    paddingVertical: 10
  },
  linkLabel: {
    color: "#a5b4fc",
    fontSize: 14,
    textDecorationLine: "underline"
  }
});
