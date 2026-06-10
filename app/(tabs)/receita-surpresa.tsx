import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import { Background } from "@/components/Background";
import { useReceitaSurpresa } from "@/hooks/useReceitaSurpresa";

export default function ReceitaSurpresa() {
  const { receita, loading, buscarReceita } = useReceitaSurpresa();

  return (
    <Background style={styles.container}>
      <Text style={styles.titulo}>🍽️ Receita Surpresa</Text>

      <View style={styles.card}>
        {loading ? (
          <ActivityIndicator size="large" color="#E65100" />
        ) : receita ? (
          <>
            <Text style={styles.textoInstrucao}>Que tal preparar hoje:</Text>
            
            <Text style={styles.resultadoTexto}>{receita.strMeal}</Text>
            <Text style={styles.categoriaTexto}>
              {receita.strCategory} • {receita.strArea}
            </Text>

            {receita.strMealThumb && (
              <Image 
                source={{ uri: receita.strMealThumb }} 
                style={styles.imagemComida} 
              />
            )}
          </>
        ) : (
          <Text style={styles.textoInstrucao}>
            Sem ideias para a refeição? Clique no botão abaixo para descobrir uma receita mundial!
          </Text>
        )}
      </View>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={buscarReceita} 
        disabled={loading} 
      >
        <Text style={styles.botaoTexto}>
          {loading ? "Buscando..." : "Sortear Receita"}
        </Text>
      </TouchableOpacity>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#E65100",
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFE0B2",
    padding: 30,
    borderRadius: 20,
    elevation: 5, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 40,
    width: "100%",
    alignItems: "center",
    minHeight: 250,
    justifyContent: "center",
  },
  textoInstrucao: {
    fontSize: 16,
    color: "#BF360C",
    marginBottom: 10,
    textAlign: "center",
  },
  resultadoTexto: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#E65100",
    textAlign: "center",
    marginBottom: 5,
  },
  categoriaTexto: {
    fontSize: 14,
    color: "#BF360C",
    fontWeight: "500",
    marginBottom: 15,
  },
  imagemComida: {
    width: 140,
    height: 140,
    borderRadius: 70, // Deixa a imagem redonda
    borderWidth: 3,
    borderColor: "#FF9800",
    marginTop: 10,
  },
  botao: {
    backgroundColor: "#FF9800",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
  },
  botaoTexto: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});