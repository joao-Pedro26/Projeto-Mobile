import { useTarefas } from "../../hooks/useTarefas";
import { Button } from "@react-navigation/elements";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Background } from "@/components/Background";

export default function App() {
  const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } =
    useTarefas();

  return (
    <Background style={styles.container}>
      <Text style={styles.titulo}>🍔 Lista de Comidas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma comida (ex: pizza)"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <Button onPress={adicionarTarefa}>Adicionar</Button>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTexto}>🍽️ {item.texto}</Text>

            <TouchableOpacity onPress={() => removerTarefa(item.id)}>
              <Text style={styles.remover}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#E65100",
  },

  inputContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#FF9800",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "#fff",
  },

  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFE0B2",
    padding: 15,
    marginBottom: 8,
    borderRadius: 10,
    elevation: 3,
  },

  itemTexto: {
    fontSize: 18,
    color: "#BF360C",
  },

  remover: {
    fontSize: 18,
  },
});
