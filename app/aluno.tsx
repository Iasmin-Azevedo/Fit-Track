import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function DashboardAluno() {
  const [mostrarHistorico, setMostrarHistorico] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navbarContent}>
          <Image 
            source={require('../assets/images/ginastica.png')} 
            style={styles.logo} 
          />
          <Text style={styles.navbarTitle}>FitTrak</Text>
        </View>
      </View>

      <ScrollView style={styles.mainContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Histórico de Medidas</Text>
        <TouchableOpacity 
          style={styles.toggleButton}
          onPress={() => setMostrarHistorico(!mostrarHistorico)}
        >
          <Ionicons 
            name={mostrarHistorico ? "chevron-up" : "chevron-down"} 
            size={24} 
            color="#ffc107" 
          />
        </TouchableOpacity>
      </View>
      
      {/* Renderização do histórico de medidas */}
      {mostrarHistorico && (
        <View>
          <View style={styles.card}>
            <Text style={styles.medidasText}>01/01 - Peso: 70kg, Cintura: 80cm, Quadril: 90cm, Tórax: 95cm</Text>
            <Text style={styles.medidasText}>01/02 - Peso: 71kg, Cintura: 81cm, Quadril: 91cm, Tórax: 96cm</Text>
            <Text style={styles.medidasText}>01/03 - Peso: 72kg, Cintura: 82cm, Quadril: 92cm, Tórax: 97cm</Text>
          </View>
          <TouchableOpacity style={styles.registrarButton}>
            <Text style={styles.registrarButtonText}>Registre novas medidas</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
        </View>
      )}

        <Text style={styles.sectionTitle}>Ficha de Treino</Text>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Segunda-feira - Treino A</Text>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.exercicioItem}>
              <View style={styles.exercicioInfo}>
                <Text style={styles.exercicioNome}>Supino Reto</Text>
                <Text style={styles.exercicioGrupo}>Peitoral</Text>
              </View>
              <View style={styles.exercicioSeries}>
                <Text style={styles.seriesText}>3 x 12</Text>
              </View>
            </View>
            <View style={styles.exercicioItem}>
              <View style={styles.exercicioInfo}>
                <Text style={styles.exercicioNome}>Rosca Direta</Text>
                <Text style={styles.exercicioGrupo}>Bíceps</Text>
              </View>
              <View style={styles.exercicioSeries}>
                <Text style={styles.seriesText}>3 x 10</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  navbar: {
    backgroundColor: '#222',
    padding: 15,
    elevation: 3,
  },
  navbarContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  navbarTitle: {
    color: '#ffc107',
    fontSize: 24,
    fontWeight: 'bold',
  },
  mainContainer: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#ffc107',
    fontSize: 20,
    fontWeight: 'bold',
  },
  toggleButton: {
    padding: 5,
  },
  medidasText: {
    color: '#fff',
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 20,
  },
  registrarButton: {
    backgroundColor: '#ffc107',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    gap: 10,
  },
  registrarButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#222',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
    padding: 10,
  },
  cardHeader: {
    backgroundColor: '#ffc107',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardHeaderText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardBody: {
    padding: 10,
  },
  exercicioItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  exercicioInfo: {
    flex: 1,
  },
  exercicioNome: {
    color: '#ffc107',
    fontSize: 16,
    fontWeight: 'bold',
  },
  exercicioGrupo: {
    color: '#aaa',
    fontSize: 14,
  },
  exercicioSeries: {
    backgroundColor: '#ffc107',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  seriesText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
