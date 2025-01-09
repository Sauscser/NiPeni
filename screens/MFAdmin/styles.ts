import {StyleSheet, Dimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'; // Ensure you have expo-linear-gradient installed

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  adminImage: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  clientsView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    overflow: 'hidden',
  },
  gradientHeader: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  salesText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  viewForClientsAndTitle: {
    padding: 16,
  },
  viewForClientsCategories: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e58d29',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  salesPressableText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3b5998',
    marginBottom: 8,
  },
  viewForClientsAndTitleMFNdogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  viewForClientsPressables: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  ClientsPressables: {
    backgroundColor: '#e58d29',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  clientsPressableText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  acEarningsView: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  viewForAcEarningsPressables: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  earningsAcPressables: {
    backgroundColor: '#3b5998',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  earningsAcPressableText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
