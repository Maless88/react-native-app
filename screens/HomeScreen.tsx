import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function HomeScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>Benvenuto</Text>
        <Text style={styles.title}>La tua nuova app ? pronta</Text>
        <Text style={styles.subtitle}>
          Personalizza la schermata iniziale, aggiungi sezioni e collega la navigazione quando sei pronto.
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
            <Text style={styles.primaryLabel}>Inizia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton} activeOpacity={0.8}>
            <Text style={styles.linkLabel}>Scopri di più?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  hero: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  eyebrow: {
    color: "#93c5fd",
    letterSpacing: 1,
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  title: {
    color: "#e2e8f0",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },
  subtitle: {
    color: "#cbd5e1",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 22,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
  },
  primaryLabel: {
    color: "#e2e8f0",
    fontWeight: "600",
    fontSize: 15,
  },
  linkButton: {
    paddingHorizontal: 4,
    paddingVertical: 10,
  },
  linkLabel: {
    color: "#93c5fd",
    fontWeight: "600",
    fontSize: 15,
  },
});

export default HomeScreen;
