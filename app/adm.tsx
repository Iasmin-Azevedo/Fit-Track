import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const DashboardInstrutor = () => {
  const screenWidth = Dimensions.get('window').width;
  const isSmallScreen = screenWidth < 400;

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
        {/* Alterações necessarias (verificar ficha, verificar aluno) */}
        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>Menu</Text>
          <View style={[styles.buttonsRow, isSmallScreen && styles.buttonsColumn]}>
           <Link href="/nova-ficha">
           <TouchableOpacity style={[styles.actionButton, styles.successButton]}>
              <FontAwesome name="file-text" size={16} color="#fff" />
              <Text style={styles.actionButtonText}>Nova ficha de treino</Text>
            </TouchableOpacity>
            </Link>
            <Link href="/">
            <TouchableOpacity style={[styles.actionButton, styles.primaryButton]}>
              <Ionicons name="add" size={16} color="#fff" />
              <Text style={styles.actionButtonText}>Novo Exercício</Text>
            </TouchableOpacity>
            </Link>
            <Link href="/aluno"> {/* somente para a visualização */}
            <TouchableOpacity style={[styles.actionButton, styles.infoButton]}>
              <Ionicons name="people" size={16} color="#fff" />
              <Text style={styles.actionButtonText}>Ver alunos</Text>
            </TouchableOpacity>
            </Link>
          </View>
        </View>

        {/* Acrescentar Fichas */}
        <Text style={styles.sectionTitle}>Fichas Criadas</Text>
        <View style={styles.accordionItem}>
          <View style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Ficha de Aluno Exemplo - Início: 2024-01-01</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#000" />
          </View>
          <View style={styles.accordionContent}>
            <View style={styles.diaContainer}>
              <View style={styles.diaHeader}>
                <Text style={styles.diaTexto}>Segunda</Text>
                <Text style={styles.grupoTexto}> - Peito e Bíceps</Text>
              </View>
              <View style={styles.table}>
                <View style={styles.tableHeader}>
                  <Text style={styles.headerCell}>Exercício</Text>
                  <Text style={styles.headerCell}>Grupo Muscular</Text>
                  <Text style={styles.headerCell}>Séries</Text>
                  <Text style={styles.headerCell}>Repetições</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>Supino Reto</Text>
                  <Text style={styles.tableCell}>Peitoral</Text>
                  <Text style={styles.tableCell}>3</Text>
                  <Text style={styles.tableCell}>12</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>Rosca Direta</Text>
                  <Text style={styles.tableCell}>Bíceps</Text>
                  <Text style={styles.tableCell}>3</Text>
                  <Text style={styles.tableCell}>10</Text>
                </View>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={[styles.button, styles.editarButton]}>
                <Text style={styles.buttonText}>Editar Ficha</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.excluirButton]}>
                <Text style={styles.buttonText}>Excluir Ficha</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
    padding: 15,
  },
  menuContainer: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuTitle: {
    color: '#ffc107',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  buttonsColumn: {
    flexDirection: 'column',
    gap: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    gap: 5,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  successButton: {
    backgroundColor: '#28a745',
  },
  primaryButton: {
    backgroundColor: '#007bff',
  },
  infoButton: {
    backgroundColor: '#17a2b8',
  },
  sectionTitle: {
    color: '#ffc107',
    fontSize: 18,
    marginBottom: 10,
  },
  accordionItem: {
    borderWidth: 1,
    borderColor: '#ffc107',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',
  },
  accordionHeader: {
    backgroundColor: '#ffc107',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accordionTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  accordionContent: {
    backgroundColor: '#2d2d2d',
    padding: 15,
  },
  diaContainer: {
    marginBottom: 15,
  },
  diaHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  diaTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  grupoTexto: {
    color: '#fff',
    fontSize: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 5,
    marginBottom: 15,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#ffc107',
    padding: 10,
  },
  headerCell: {
    flex: 1,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    backgroundColor: '#222',
  },
  tableCell: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  editarButton: {
    backgroundColor: '#007bff',
  },
  excluirButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DashboardInstrutor;