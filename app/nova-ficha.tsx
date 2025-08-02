import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function NovaFicha() {
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
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Montar Ficha de Treino</Text>
          <View style={styles.headerButtons}>
            <TouchableOpacity style={[styles.actionButton, styles.primaryButton]}>
              <Text style={styles.actionButtonText}>Novo Exercício</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.infoButton]}>
              <Text style={styles.actionButtonText}>Ver alunos</Text>
            </TouchableOpacity>
            
          </View>
        </View>

        {/* Formulario basico, substituir o input pelo select */}
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Nome do Aluno</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do aluno"
            placeholderTextColor="#666"
          />
        </View>

        {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'].map((dia) => (
          <View key={dia} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>{dia}</Text>
            </View>
            <View style={styles.cardBody}>
              <View style={styles.exercicioContainer}>
                <View style={styles.row}>
                  <View style={styles.col}>
                    <Text style={styles.label}>Exercício</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Nome do exercício"
                      placeholderTextColor="#666"
                    />
                  </View>
                  <View style={styles.col}>
                    <Text style={styles.label}>Séries</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Número de séries"
                      placeholderTextColor="#666"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col}>
                    <Text style={styles.label}>Repetições</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Número de repetições"
                      placeholderTextColor="#666"
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.col}>
                    <Text style={styles.label}>Grupo Muscular</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Grupo muscular"
                      placeholderTextColor="#666"
                    />
                  </View>
                </View>
                <TouchableOpacity style={styles.removerButton}>
                  <Text style={styles.removerButtonText}>Remover Exercício</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <TouchableOpacity style={styles.adicionarButton}>
                <Text style={styles.adicionarButtonText}>Adicionar Exercício</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={styles.footerButtons}>
          <TouchableOpacity style={[styles.footerButton, styles.secondaryButton]}>
            <Text style={styles.footerButtonText}>Voltar</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={[styles.footerButton, styles.primaryButton]}>
            <Text style={styles.footerButtonText}>Salvar Ficha</Text>
          </TouchableOpacity>
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
    padding: 15,
  },
  header: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  headerTitle: {
    color: '#ffc107',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    gap: 5,
    marginBottom: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  primaryButton: {
    backgroundColor: '#007bff',
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  infoButton: {
    backgroundColor: '#17a2b8',
  },
  formGroup: {
    marginBottom: 20,
  },
  formLabel: {
    color: '#ffc107',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2d2d2d',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#444',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ffc107',
    borderRadius: 5,
    marginBottom: 15,
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: '#ffc107',
    padding: 10,
  },
  cardHeaderText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardBody: {
    backgroundColor: '#2d2d2d',
    padding: 15,
  },
  cardFooter: {
    backgroundColor: '#2d2d2d',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  exercicioContainer: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  col: {
    flex: 1,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  removerButton: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  removerButtonText: {
    color: '#dc3545',
    fontSize: 14,
  },
  adicionarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  adicionarButtonText: {
    color: '#ffc107',
    fontSize: 16,
  },
  footerButtons: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 20,
  },
  footerButton: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  footerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});