import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  adminImage: {
    width: '100%',
    height: "100%",
    resizeMode: 'cover',
    top:"1%",
   
  },

  clientsView: {
    backgroundColor: '#e58d29',
    width:"100%",
    height: "30%",
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop:12
  },


  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    width: '70%',
    marginLeft: 25,
    top: 5,
  },
  loanFriendButton: {
    backgroundColor: '#064bfb',
    height: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 100,
    zIndex: 10,
  },

  chamaLoanAndCreditSalesButton: {
    backgroundColor: 'white',
    height: 60,
    borderRadius: 30,
    marginHorizontal: 30,
    width: Dimensions.get('screen').width - 60,
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,
  },

  ChamaLoanAndCreditSalesText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  loanAFriendText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  viewForPressables: {
    backgroundColor: 'green',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: 200,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  viewForSalesPressables: {
    backgroundColor: 'green',
    marginHorizontal: 4,
    width: Dimensions.get('screen').width - 8,
    height: 170,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  SalesPressables: {
    backgroundColor: '#72ebd8',
    marginHorizontal: 20,
    width: Dimensions.get('screen').width - 40,
    height: 60,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    
  },

  salesPressableText: {
    color: 'white',
    fontSize: 13,
    
  },

  viewForSalesText: {
    color: 'white',
    fontSize: 20,
    marginTop: 1,
    height: 50,
  },

  salesText: {
    fontSize: 20,
    color: "blue",
    marginBottom:"1.5%"
  },

  viewForClientsPressables: {
    backgroundColor: 'pink',
    
    height: "100%",
    borderRadius: 4,
    
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: "100%",
    
  },

  viewForClientsCategories: {
    backgroundColor: '#e58d29',
    marginTop:"5%",
    marginBottom:"5%",
    height: "100%",
    borderRadius: 4,
    
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: "33%"
  },

  viewForClientsCategoriesLnSt: {
    backgroundColor: '#e58d29',
    marginTop:"4%",
    marginBottom:"4%",
    height: "100%",
    borderRadius: 4,
    marginLeft:"10%",
    marginRight:"10%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: "33%"
  },

  viewForClientsAndTitleLnSt: {
    backgroundColor: '#e58d29',
    width:"100%",
    height: "50%",
    borderRadius: 4,
   
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  

  viewForClientsAndTitleMFNdogo: {
    backgroundColor: 'pink',
    width:"100%",
    height: "100%",
    borderRadius: 4,
  
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },

  viewForClientsAndTitle: {
    backgroundColor: '#e58d29',
    width:"100%",
    height: "50%",
    borderRadius: 4,
   
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  
  clientsView1: {
    backgroundColor: '#e58d29',
    width:"100%",
    height: "21%",
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop:2
  },
  

  ClientsPressables: {
    backgroundColor: '#72ebd8',
    width:"45%",
    marginLeft:"1%",
    marginRight:"1%",
    height: "90%",
    borderRadius: 4,
  
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    
  },

  ClientsPressables2: {
    backgroundColor: '#72ebd8',
    width:"45%",
    marginLeft:"1%",
    marginRight:"1%",
    height: "90%",
    borderRadius: 4,
  
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    
  },


  clientsPressableText: {
    color: 'black',
    fontSize: 10,
    marginTop: 1,
  },

  acEarningsView: {
    backgroundColor: '#e58d29',
    marginHorizontal: 5,
    width: Dimensions.get('screen').width - 10,
    height: 95,
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: "2%",
    marginBottom: "99%",
  },

  acEarningsView2: {
    backgroundColor: '#e58d29',
    marginHorizontal: 5,
    width: Dimensions.get('screen').width - 10,
    height: "17%",
    borderRadius: 2,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: "4%",
  },


  viewForAcEarningsPressables: {
    backgroundColor: '#e58d29',
    marginHorizontal: 5,
    width: Dimensions.get('screen').width - 10,
    height: "60%",
    borderRadius: 2,
    marginTop: "0.5%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  earningsAcPressables: {
    backgroundColor: '#72ebd8',
    
    height: "70%",
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width:"40%",
    marginHorizontal: "10%"
    
    
  },

  earningsAcPressableText: {
    color: 'black',
    fontSize: 15,
    marginTop: 1,
  },
});
export default styles;