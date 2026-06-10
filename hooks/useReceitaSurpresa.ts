import { useState } from 'react';

export interface Receita {
    strMeal: string;
    strCategory: string;
    strArea: string;
    strMealThumb: string;
}

export function useReceitaSurpresa() {
    const [receita, setReceita] = useState<Receita | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    async function buscarReceita() {
        setLoading(true);
        try {

            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const dados = await response.json();

            if (dados.meals && dados.meals.length > 0) {
                setReceita(dados.meals[0]);
            }
        } catch (error) {
            console.error('Erro ao buscar receita:', error);
        } finally {
            setLoading(false);
        }
    }

    return {
        receita,
        loading,
        buscarReceita,
    };
}