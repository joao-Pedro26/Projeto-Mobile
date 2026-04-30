import { useState } from 'react'; // Importamos o useState para gerenciar a imagem
import { Text, StyleSheet, View, Alert } from 'react-native';
import { Background } from '@/components/Background';
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker'; // 1. Importação do ImagePicker

export default function Home() {
    // Estado para guardar a URI da imagem selecionada (opcional, mas útil)
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // 2. Implementação da função pickImageAsync conforme a imagem enviada
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'], // Na versão mais recente do Expo, usa-se string literal ou MediaTypeOptions
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            console.log(result);
            setSelectedImage(result.assets[0].uri); // Armazena a URI da imagem
        } else {
            Alert.alert('Aviso', 'Você não selecionou nenhuma imagem.');
        }
    };

    return (
        <Background style={styles.container}> 

            <Text style={styles.titulo}>🍕 Bem-vindo!</Text>

            <Text style={styles.texto}>
                Organize suas comidas favoritas de forma simples 😋
            </Text>

            <View style={styles.footerContainer}>
                {/* 3. Conectando a função ao onPress do seu componente Button */}
                <Button 
                    theme="primary" 
                    label="Escolher uma foto" 
                    onPress={pickImageAsync} 
                />
            </View>

        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#E65100',
        marginBottom: 20,
    },
    texto: {
        fontSize: 18,
        textAlign: 'center',
        color: '#BF360C',
        marginTop: 15,
        marginBottom: 20, 
    },
    footerContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});