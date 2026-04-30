import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Background } from "@/components/Background";

const PlaceholderImage = require("@/assets/images/back-ground.png");

// Lista de opções que a roleta pode sortear
const opcoesDeComida = [
  "Pizza 🍕",
  "Hambúrguer 🍔",
  "Sushi 🍣",
  "Tacos 🌮",
  "Churrasco 🥩",
  "Macarrão 🍝",
  "Açaí 🫐",
  "Cachorro Quente 🌭",
  "Salada 🥗",
  "Comida Japonesa 🍱",
  "SUA MÃE 🍽️",
];

export default function Roleta() {
  const [comidaSorteada, setComidaSorteada] = useState<string | null>(null);

  const animacaoSorteio = () => {
    // Simula uma animação de sorteio (pode ser melhorada com bibliotecas de animação)
    let numeroSorteado = Math.floor(Math.random() * 10) + 5;
    for (let i = 0; i < numeroSorteado; i++) {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * opcoesDeComida.length);
        setComidaSorteada(opcoesDeComida[randomIndex]);
      }, i * 200); // A cada 200ms, muda a comida sorteada
    }
  };
  const sortearComida = () => {
    animacaoSorteio();
    // Gera um número aleatório baseado no tamanho da lista
    const randomIndex = Math.floor(Math.random() * opcoesDeComida.length);
    setComidaSorteada(opcoesDeComida[randomIndex]);
  };

  return (
    <Background style={styles.container}>
      <Text style={styles.titulo}>🎲 O que comer?</Text>

      <View style={styles.card}>
        <Text style={styles.textoInstrucao}>
          {comidaSorteada
            ? "A roleta escolheu:"
            : "Sem ideias para a refeição?"}
        </Text>

        <Text style={styles.resultadoTexto}>
          {comidaSorteada ? comidaSorteada : "🤔 Clique para sortear!"}
        </Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={sortearComida}>
        <Text style={styles.botaoTexto}>Sortear Comida</Text>
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

  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#E65100",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#FFE0B2",
    padding: 40,
    borderRadius: 20,
    elevation: 5, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 40,
    width: "100%",
    alignItems: "center",
    minHeight: 180,
    justifyContent: "center",
  },
  textoInstrucao: {
    fontSize: 16,
    color: "#BF360C",
    marginBottom: 10,
  },
  resultadoTexto: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#E65100",
    textAlign: "center",
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
