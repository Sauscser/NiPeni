import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MFAdmin from '../../screens/MFAdmin'
import KFNdogo from "../../screens/MFNdogo"
import Homeie from "../../screens/HomeScrn"
import RegisterKFKubwaAcForm from '../../screens/MFKubwa/RegisterMFKubwa';
import CreateAcForm from '../../screens/MyAcc/CreateAc';


import BuyFltForm from "../../screens/MFNdogo/Float/BuyFloat";
import DpstMny from "../../screens/MyAcc/DepositMny";
import CrtAdmn from "../../screens/MFAdmin/RegAdmin";
import SettnsHm from "../../screens/Settings/SettingsHome";
import MFAdm from "../../screens/MFAdmin";
import MFKubwa from '../../screens/MFKubwa'

import MFKbw from "../../screens/MFKubwa";
import MFN from "../../screens/MFNdogo";
import AdvcHm from "../../screens/Advocate/AdvocateHm";
import AdvHm from "../../screens/Advocate/AdvocateHm";
import AdvReg from "../../screens/Advocate/AdvReg";
import DActivtMFN from "../../screens/MFNdogo/DeactivateMFNdogo";
import DActivtMFK from "../../screens/MFKubwa/DeActRegMFK/DeactivateMFNdogo";
import DActivtMFUsr from "../../screens/MyAcc/DeActivtUsr/DeactivateMFNdogo";
import DActivtMFAdv from "../../screens/Advocate/DeactivtAdv/DeactivateMFAdmin/DeactivateMFNdogo";
import SMGvCovLon from "../../screens/MyAcc/Loans/GiveLoan/SM/PalPal";
import SMASendNonCovLns from "../../screens/MyAcc/Loans/GiveLoan/SM/BizPal";
import SMAWthdrwForm from '../../screens/MyAcc/WithdrwFunds';
import SendNonLn from "../../screens/MyAcc/SendNonLons";
import RepayCovLns from "../../screens/MyAcc/Loans/RepayLoan/SM/CovLons";
import RepayNonCovLns from "../../screens/MyAcc/Loans/RepayLoan/SM/NonCovLns";
import BListSMLneeCov from "../../screens/MyAcc/Loans/BList/SMLoanee/Cov";
import BListSMLneeNonCov from "../../screens/MyAcc/Loans/BList/SMLoanee/NonCov";
import CovCredSls from "../../screens/MyAcc/Loans/GiveLoan/CredSlr/Biz2Biz";
import NonCovCredSls from "../../screens/MyAcc/Loans/GiveLoan/CredSlr/Biz2Pal";
import CreateChm from "../../screens/Chama/CrtChm";
import AddChmMembrss from "../../screens/Chama/AddChmMembrs";
import ChmCovLon from "../../screens/Chama/Loan/LoanMember/Cov";
import ChmNonCovLon from "../../screens/Chama/Loan/LoanMember/NonCov";
import Contributionsss from "../../screens/Chama/Contribtns";
import SndMbrsMny from "../../screens/Chama/SendMmbrsMny";
import BLChmMmberCov from "../../screens/Chama/BL/Cov";
import BLChmMmberNonCov from "../../screens/Chama/BL/NonCov";
import RepyChmCovLn from "../../screens/MyAcc/Loans/RepayLoan/Chama/CovLons";
import RepyChmNonCovLn from "../../screens/MyAcc/Loans/RepayLoan/Chama/NonCovLons";
import BListCredByrCov from "../../screens/MyAcc/Loans/BList/CredLoanee/Cov";
import BListCredByrNonCov from "../../screens/MyAcc/Loans/BList/CredLoanee/NonCov";
import RpayCredSlrCov from "../../screens/MyAcc/Loans/RepayLoan/CredSlr/CovCredSls";
import RpayCredSlrNonCov from "../../screens/MyAcc/Loans/RepayLoan/CredSlr/NonCovCredSls";
import RemoveChmMbr from "../../screens/Chama/RmvChmMbr";
import DissolveChm from "../../screens/Chama/Dissolve";
import UpdateChm from "../../screens/Chama/UpdateChmAc/Update";
import UpdateSMPW from "../../screens/MyAcc/UpdatePW";
import UpdateMFAdminPW from "../../screens/MFAdmin/Update";
import WithdwAdmn from "../../screens/MFAdmin/Withdraw";
import WithdwAdv from "../../screens/Advocate/Withdrw";
import UpdtMFAdvPW from "../../screens/Advocate/UpdatePW";
import BLUsrs from "../../screens/MyAcc/BLUsr";
import UpdtMFKPW from "../../screens/MFKubwa/UpdatPW";
import MFKWthdrw from "../../screens/MFKubwa/WithDrw";
import UpdtMFNPW from "../../screens/MFNdogo/UpdtMFNPW";
import WthdrwMFN from "../../screens/MFNdogo/Wthdrw";
import WthdrwMFNFlt from "../../screens/MFNdogo/WithdrwFlt";
import ViewMyLoanees from "../../screens/MyAcc/Loans/ViewSMLns/Cov/MyLoanees";
import ViewMyLoaners from "../../screens/MyAcc/Loans/ViewSMLns/Cov/MyLoaners";
import ViewMyNonCovLoanees from "../../screens/MyAcc/Loans/ViewSMLns/NonCov/MyLoanees";
import ViewMyNonCovLoaners from "../../screens/MyAcc/Loans/ViewSMLns/NonCov/MyLoaners";
import ViewSmAc from "../../screens/MyAcc/ViewMySMAcc";
import ViewSmAcs from "../../components/MyAc/ViewAc";
import VwNonLnsRec from "../../screens/MyAcc/ViewNonLnsSent";
import VwNonLnsSnt from "../../screens/MyAcc/ViewNonLnsRec";
import ChmSignIns from "../../screens/Chama/ViewLns/ChamaSignIn";

import ChamSignIn2 from "../../screens/Chama/ViewLns/ChamaSignIn2";
import ChamSignIn3 from "../../screens/Chama/ViewLns/ChamaSignIn3";
import ChamSignIn4 from "../../screens/Chama/ViewLns/ChamaSignIn4";
import ChmLnsGvnOutCov from "../../screens/Chama/ViewLns/GivenOut/LoaneesDtls";
import ChmLnsGvnOutNonCov from "../../screens/Chama/ViewLns/GivenOut/Loanees";

import ChamaGenInfo from "../../screens/Chama/ViewLns/Generalnfo";
import ChmSignIn5 from "../../screens/Chama/ViewLns/ChamaSignIn5";
import ChmSignIn6 from "../../screens/Chama/ViewLns/ChamaSignIn6";
import ChamaRemt from "../../screens/Chama/ViewChamaActivities/ChmRemit/Chama";
import ChmContri from "../../screens/Chama/ViewChamaActivities/Contributions/Chama";
import ChmMmbrs from "../../screens/Chama/ViewChamaActivities/Membership/Chama";
import ChamaMmbrRemt from "../../screens/Chama/ViewChamaActivities/ChmRemit/Member";
import ChmMmbrContri from "../../screens/Chama/ViewChamaActivities/Contributions/Member";
import ChmMmbrMmbrs from "../../screens/Chama/ViewChamaActivities/Membership/Member";
import CredSlsLnees from "../../screens/MyAcc/Loans/ViewCredSls/Cov/Loanees";
import CredSlsLners from "../../screens/MyAcc/Loans/ViewCredSls/Cov/Loaners";
import CredByrLnees from "../../screens/MyAcc/Loans/ViewCredSls/NonCov/Loanees";
import CredByrLners from "../../screens/MyAcc/Loans/ViewCredSls/NonCov/Loaners";
import SMDpsits from "../../screens/MyAcc/DepositMny/VwSMDpsts";
import SMWthdrwls from "../../screens/MyAcc/WithdrwFunds/VwSMWthdrwls";
import VwMFNAccountSgnIn from "../../screens/MFNdogo/SignInMFN copy";
import UsrDpositSgnIn from "../../screens/MFNdogo/SignInMFN copy 2";
import MFNWithdrawlsSgnIn from "../../screens/MFNdogo/SignInMFN copy 3";
import UsrWthdrwlsSgnIn from "../../screens/MFNdogo/SignInMFN copy 4";
import FltWthdrwlsSgnIn from "../../screens/MFNdogo/SignInMFN copy 5";
import FloatBghtSgnIn from "../../screens/MFNdogo/SignInMFN copy 6";
import VwMFNAcs from "../../screens/MFNdogo/VwMFNAc";
import VwUsrDpsts from "../../screens/MFNdogo/VwUsrDpst";
import VwUsrWthdrwls from "../../screens/MFNdogo/VwUsrWthdrwl";
import VwFltWthdrwls from "../../screens/MFNdogo/WithdrwFlt/VwFltWthdrwl";
import VwMFNWthdrls from "../../screens/MFNdogo/Wthdrw/VwMFNWthdrl";
import VwMFNFltBuys from "../../screens/MFNdogo/Float/VwMFNFltBuy";
import SearchMFNs from "../../screens/MFNdogo/SearchMFN";

import AdvVwCrdSlsSgnIn from "../../screens/Advocate/AdvVwCrdSlsSgnIn";
import AdvVwSMSgnIn from "../../screens/Advocate/AdvVwSMSgnIn";
import AdvWthdrwlSgnIn from "../../screens/Advocate/AdvWthdrwlSgnIn";
import AdvVwAcSgnIn from "../../screens/Advocate/AdvVwAcSgnIn";
import AdvVwChmSgnIn from "../../screens/Advocate/AdvVwChmSgnIn";
import VwAdvAc from "../../screens/Advocate/VwAdvAc";
import VwAdvChamaCovLns from "../../screens/Advocate/VwAdvChamaCovLns";
import VwAdvCrdSlrCovLns from "../../screens/Advocate/VwAdvCrdSlrCovLns";
import VwAdvSMCovLns from "../../screens/Advocate/VwAdvSMCovLns";
import VwAdvWthdrwls from "../../screens/Advocate/VwAdvWthdrwls";
import VwMFKAcSgnIn from "../../screens/MFKubwa/VwMFKAcSgnIn";
import VwMFKWthdrwlsSgnIn from "../../screens/MFKubwa/VwMFKWthdrwlsSgnIn";
import VwMFKAc from "../../screens/MFKubwa/VwMFKAc";
import VwMFKWthdrwls from "../../screens/MFKubwa/VwMFKWthdrwls";
import MFKVwMFNSgnIns from "../../screens/MFKubwa/MFKVwMFNSgnIn";
import MFKVwMFNs from "../../screens/MFKubwa/MFKVwMFN";
import UpdateAccCodes from "../../screens/MyAcc/UpdateAccCode";
import WelcomePgs from "../../screens/MyAcc/T&CAcceptanceForm";

import Abouts from "../../screens/Settings/About";
import Alerts from "../../screens/Settings/Alert";
import Contactss from "../../screens/Settings/Contacts";
import Maximums from "../../screens/Settings/Maximum";
import Passwordss from "../../screens/Settings/Passwords";
import Policys from "../../screens/Settings/Policy";
import Privacys from "../../screens/Settings/Privacy";
import Recommendationss from "../../screens/Settings/Recommendations";
import TCs from "../../screens/Settings/TC";
import TransactionFees from "../../screens/Settings/TransactionFees";
import VwCompDtls from "../../screens/Settings/VwCompDtls";
import Commissions from "../../screens/Settings/Commissions";
import SndChmMbrMny from "../../screens/Chama/ViewChamaActivities/Membership/SndToChmMbr";
import ChamaSndMbrMneys from "../../screens/Chama/ChamaSndMbrMney";
import SndToChmMbrs from "../../screens/Chama/ViewChamaActivities/Membership/SndToChmMbr";
import MmbrSndChms from "../../screens/Chama/MmbrSndChm";
import SgnIn2LnMmbr from "../../screens/Chama/SgnIn2LnMmbrCov";
import VwChmMbrs2Ln from "../../screens/Chama/VwChmMbrs2Ln";
import SgnIn2LnMmbrNonCov from "../../screens/Chama/SgnIn2LnMmbrNonCov";
import VwChmMbrs2NonCovLns from "../../screens/Chama/VwChmMbrs2NonCovLn";
import Vw2RpyCov from "../../screens/Chama/Vw2RpyChmLns/Cov";
import Vw2RpyNonCov from "../../screens/Chama/Vw2RpyChmLns/NonCov";
import SgnIn2BLCov from "../../screens/Chama/BL/SgnInToBL/MmbrCov";
import SgnIn2BLNonCov from "../../screens/Chama/BL/SgnInToBL/MmbrNonCov";
import Vw2BLCov from "../../screens/Chama/BL/Vw2BLChmCov";
import Vw2BLNonCov from "../../screens/Chama/BL/Vw2BLChmNonCov";

import Vw2RepySMCovLn from "../../screens/MyAcc/Loans/Vw2Rpay/Cov";
import Vw2RepySMNonCovLn from "../../screens/MyAcc/Loans/Vw2Rpay/NonCov";
import Vw2BLCovSMLn from "../../screens/MyAcc/Loans/BList/View2BL/Cov";
import Vw2BLSMNonCov from "../../screens/MyAcc/Loans/BList/View2BL/NonCov";

import Vw2RepyCredSlsCovLn from "../../screens/MyAcc/VwCred/2Repay/Cov";
import Vw2RepyCredSlsNonCovLn from "../../screens/MyAcc/VwCred/2Repay/NonCov";
import Vw2BLCovCredSlsLn from "../../screens/MyAcc/VwCred/2BL/Cov";
import Vw2BLCredSlsNonCov from "../../screens/MyAcc/VwCred/2BL/NonCov";
import DeactAdm from "../../screens/MFAdmin/DeactivateMFAdmin/DeactivateMFNdogo";

import VwCompAbt from "../../screens/Settings/VwCompAbt";
import VwCompPolicy from "../../screens/Settings/VwCompPolicy";
import VwCompPrivacy from "../../screens/Settings/VwCompPrivacy";
import VwCompTC from "../../screens/Settings/VwCompTC";

import ViewAdv from "../../screens/Advocate/SearchAdvocate";

import UpdateMFKCom from "../../screens/MFKubwa/UpdateMFKCom";
import UpdateMFNCom from "../../screens/MFNdogo/UpdateMFNCom";
import UpdtVatComs from "../../screens/Settings/WithdrawVat";
import AdjustUsrLimits from "../../screens/MyAcc/AdjustUsrLimits";
import AdvPy2VwChm from "../../screens/AdvPy2VwChm";
import AdvPy2VwCredSlr from "../../screens/AdvPy2VwCredSlr";
import AdvPy2VwSM from "../../screens/AdvPy2VwSM";

import ViewNonLnsRecChm from "../../screens/MyAcc/ViewNonLnsRecChm";
import ViewNonLnsRecCredSlr from "../../screens/MyAcc/ViewNonLnsRecCredSlr";
import ViewNonLnsRecSM from "../../screens/MyAcc/ViewNonLnsRecSM";
import ViewNonLnsSntChm from "../../screens/MyAcc/ViewNonLnsSntChm";
import ViewNonLnsSntCredSlr from "../../screens/MyAcc/ViewNonLnsSntCredSlr";
import ViewNonLnsSntSM from "../../screens/MyAcc/ViewNonLnsSntSM";
import ChamaSignIn2VwLnRpymnt from "../../screens/Chama/ChamaSignIn2VwLnRpymnt";

import ChmVwMmbr2Remove from "../../screens/Chama/RmvChmMbr/ChmVwMmbr2Remove";
import SgnIn2RemoveMmbr from "../../screens/Chama/RmvChmMbr/SgnIn2RemoveMmbr";
import ChmVwMmbrs from "../../screens/Chama/ViewChamaActivities/Membership/Chama";
import Vw2BLChmCov from "../../screens/Chama/BL/Vw2BLChmCov";
import Vw2BLChmNonCov from "../../screens/Chama/BL/Vw2BLChmNonCov";

import PwnBrkrRegs from "../../screens/PwnBrkrReg";
import ChamaRegs from "../../screens/ChamaReg";

import SgnIn2BLSMCov from "../../screens/MyAcc/Loans/BList/SMLoanee/SgnInToBL/SMCov";
import SgnIn2BLSMNonCov from "../../screens/MyAcc/Loans/BList/SMLoanee/SgnInToBL/SMNonCov";
import SgnIn2BLCredSlCov from "../../screens/MyAcc/Loans/BList/CredLoanee/SgnInToBL/CredSlCov";
import SgnIn2BLCredSlNonCov from "../../screens/MyAcc/Loans/BList/CredLoanee/SgnInToBL/CredSlNonCov";
import BuyFloatFrmUsrAc from "../../screens/MFNdogo/Float/BuyFloatFrmUsrAc";
import RegPwnBrkr from "../../screens/MyAcc/RegPwnBrkr";
import ElimAc from "../../screens/MyAcc/ElimAc";
import ElimNonLnsSent from "../../screens/MyAcc/ElimNonLnsSent";
import ElimNonLnsRec from "../../screens/MyAcc/ElimNonLnsRec";
import ElimWthdrwls from "../../screens/MyAcc/ElimWthdrwls";
import ElimDpsts from "../../screens/MyAcc/ElimDpsts";


import ElimLnsCvLnr from "../../screens/MyAcc/ElimLnsCvLnr";
import ElimLnsCvLnee from "../../screens/MyAcc/ElimLnsCvLnee";
import ElimLnsNonCvLnr from "../../screens/MyAcc/ElimLnsNonCvLnr";
import ElimLnsNonCvLnee from "../../screens/MyAcc/ElimLnsNonCvLnee";
import ElimLPSMSent from "../../screens/MyAcc/ElimLPSMSent";
import ElimLPSMRec from "../../screens/MyAcc/ElimLPSMRec";

import ElimLPCredRec from "../../screens/MyAcc/ElimLPCredRec";
import ElimLPCredSent from "../../screens/MyAcc/ElimLPCredSent";
import ElimRpyChmNonCv from "../../screens/MyAcc/ElimRpyChmNonCv";
import ElimRpyChmCv from "../../screens/MyAcc/ElimRpyChmCv";
import ElimRpySMNonCov from "../../screens/MyAcc/ElimRpySMNonCov";
import ElimRpySMCov from "../../screens/MyAcc/ElimRpySMCov";
import ElimRpyCredCov from "../../screens/MyAcc/ElimRpyCredCov";
import ElimRpyCredNonCov from "../../screens/MyAcc/ElimRpyCredNonCov";
import ElimLPChmSent from "../../screens/MyAcc/ElimLPChmSent";

import ElimCredCvLnee from "../../screens/CredSls/ElimCredCvLnee";
import ElimCredCvLnr from "../../screens/CredSls/ElimCredCvLnr";
import ElimCredNonCvLnee from "../../screens/CredSls/ElimCredNonCvLnee";
import ElimCredNonCvLnr from "../../screens/CredSls/ElimCredNonCvLnr";

import ElimChmVwMbrshpMembr from "../../screens/Chama/ElimChmVwMbrshpMembr";
import ElimChmVwNonCvLn from "../../screens/Chama/ElimChmVwNonCvLn";
import ElimChmVwRmtncMembr from "../../screens/Chama/ElimChmVwRmtncMembr";
import ElimChmVwCovLns from "../../screens/Chama/ElimChmVwCovLns";
import ElimChmVwCntrMembr from "../../screens/Chama/ElimChmVwCntrMembr";
import SendNonLonsRev from "../../screens/MyAcc/SendNonLonsRev";
import SendNonLonsRevSgnIn from "../../screens/MyAcc/SendNonLonsRevSgnIn";
import SendNonLonsRevVw from "../../screens/MyAcc/SendNonLonsRevVw";
import ViewNonLnsRec from "../../screens/MyAcc/ViewNonLnsRec";
import ViewNonLnsSent from "../../screens/MyAcc/ViewNonLnsSent";
import AddMFNdogo from "../../screens/MFNdogo/AddMFNdogo";
import AddMFKubwa from "../../screens/MFKubwa/AddMFKubwa";
import SignitoryWthdrwFndss from "../../screens/Chama/SignitoryWthdrwFnds";
import SignitoryDeposits from "../../screens/Chama/SignitoryDeposit";
import Sgn2CnfrmWthdrwlss from "../../screens/Chama/Sgn2CnfrmWthdrwls";
import Vw2CredSellCov from "../../screens/CredSls/Vw2GrntCrdSls/Biz2Pal";
import Vw2CredSellNonCov from "../../screens/CredSls/Vw2GrntCrdSls/Pal2Biz";
import AddPersonel from "../../screens/CredSls/AddPersonel";
import CrtBusiness from "../../screens/CredSls/CrtBusiness";

import DissolveBizs from "../../screens/CredSls/DissolveBiz";
import RmvPersonnels from "../../screens/CredSls/RmvPersonnel";
import SgnIn2VwBiznas from "../../screens/CredSls/SgnIn2VwBizna";
import ShareCredSlsRevs from "../../screens/CredSls/ShareCredSlsRev";

import VwBusAcs from "../../screens/CredSls/VwBusAc";

import SgnIn2VwCovCrdSlsLneess from "../../screens/CredSls/SgnIn2VwCovCrdSlsLnees";

import SgnIn2VwNCCrdSlsLnees from "../../screens/CredSls/SgnIn2VwNCCrdSlsLnees";

import SnIn2VwCrdSlLP from "../../screens/CredSls/SnIn2VwCrdSlLP";
import SignInAdm from "../../screens/MFAdmin/SignInAdm";

import SgnIn2VwChmDpsts from "../../screens/Chama/SignitoryDeposit/SgnIn2VwDpsts";

import VwChmDpsts from "../../screens/Chama/SignitoryDeposit/VwChmDpsts";

import VwChmWthdrwls from "../../screens/Chama/SignitoryWthdrwFnds/VwChmWthdrwls";
import SgnIn2VwChmWthdrwls from "../../screens/Chama/SignitoryWthdrwFnds/SgnIn2VwChmWthdrwls";

import LnsScreen from "../../screens/Loans";
import CredSlsScreen from "../../screens/CredSls";
import ChamaScreen from "../../screens/Chama";

import DetailedChmPrfl from "../../screens/Ads/VwDtldInfo/DtldChmInfo";
import DtldPalLnInfo from "../../screens/Ads/VwDtldInfo/DtldPalLnInfo";
import DtldSalesInfo from "../../screens/Ads/VwDtldInfo/DtldSalesInfo";
import LoanAd from "../../screens/Ads/LoanAd";
import ItemAd from "../../screens/Ads/ItemAd";
import LoanChm from "../../screens/Ads/Search/LoanChm";
import SrchItemAd from "../../screens/Ads/Search/SrchItemAd";
import SrchLoanAd from "../../screens/Ads/Search/SrchLoanAd";

import SgnIn2RemoveSlAd from "../../screens/Ads/RemoveAd/SalesLn/SgnIn2RemoveSlAd";
import VwSlsAds2Remove from "../../screens/Ads/RemoveAd/SalesLn/VwSlsAds2Remove";
import VwPlLn2Remove from "../../screens/Ads/RemoveAd/PalLn/VwPlLn2Remove";
import AutomaticRepayAllTyps from "../../screens/MyAcc/Loans/RepayLoan/AutomaticRepay/AllTyps";

import VwMakeLnReq from "../../screens/MyAcc/LoanRequest/VwMakeLnReq";




import Vw2DelLnReqs from "../../screens/MyAcc/LoanRequest/Vw2DelLnReqs";
import Vw2GrantLnReq2 from "../../screens/MyAcc/LoanRequest/View2GrntLnReq/CompVw2GrantLnReq2";
import EntrAdvLoc from '../../screens/Advocate/EnterAdvLoc';


import ChamaPlaceLnReq from "../../screens/Chama/ReqLoan/PlaceLnReq";
import ChamaVw2DelLnReqs from "../../screens/Chama/ReqLoan//Vw2DelLnReqs";
import ChamaVw2GrantLnReqCov from "../../screens/Chama/ReqLoan/Vw2GrantLnReqCov";
import ChamaVw2GrantLnReqNonCov from "../../screens/Chama/ReqLoan/Vw2GrantLnReqNonCov";

import CrdSlVw2DelLnReqs from "../../screens/CredSls/SlsLnReq/Vw2DelLnReqs";

import CrdSlVw2GrantLnReqNonCov from "../../screens/CredSls/SlsLnReq/Vw2GrantLnReqNonCov";
import RequestLoansPage from "../../screens/RequestLoansPage";
import ViewBiznaShareRec from "../../screens/CredSls/ViewBiznaShareRec";
import ViewBiznaShareSent from "../../screens/CredSls/ViewBiznaShareSent";
import SgnIn2VwRevenueShare from "../../screens/CredSls/SgnIn2VwRevenueShare";
import ViewAlertDtls from "../../screens/Settings/ViewAlertDtls";
import ApplyMFKubwa from "../../screens/MFKubwa/ApplyMFKubwa";
import VwMFNAcDtls from "../../screens/MFNdogo/VwMFNAcDtls";
import DeclChamaReq from "../../screens/DecliningLnReq/ChamaReq";
import DeclCredSls from "../../screens/DecliningLnReq/CredSls";
import DeclPalLn from "../../screens/DecliningLnReq/PalLn";
import VwGrp2LnNonCov from "../../screens/Chama/Loan/VwGrp2LnNonCov";
import VwGrp2LnCov from "../../screens/Chama/Loan/VwGrp2LnCov";
import PayCash from "../../screens/CredSls/PayCash";
import VwCashPayRec from "../../screens/CredSls/VwCashPayRec";
import VwCashPaySent from "../../screens/CredSls/VwCashPaySent";
import SgnIn2VwCashSales from "../../screens/CredSls/SgnIn2VwCashSales";

import PayPalDposit from "../../screens/MyAcc/DepositMny/PayPalDposit";
import VwAcBfDpst from "../../screens/MyAcc/DepositMny/VwAcBfDpst";

import TakeOverBizna from "../../screens/CredSls/TakeOverBizna";
import giveBizna from "../../screens/CredSls/giveBizna";
import VwBusAc2TakeUp from "../../screens/CredSls/VwBusAc2TakeUp";
import BiznaReqstPage1 from "../../screens/CredSls/BiznaReqstPage1";
import BiznaReqstPage2 from "../../screens/CredSls/BiznaReqstPage2";



import SIBiz2Biz from "../../screens/CredSls/SignIn2GrntCrdSls/Biz2Biz";
import SIBiz2Pal from "../../screens/CredSls/SignIn2GrntCrdSls/Biz2Pal";
import VwBiz2Biz from "../../screens/CredSls/Vw2GrntCrdSls/Biz2Biz";
import VwBiz2Pal from "../../screens/CredSls/Vw2GrntCrdSls/Biz2Pal";
import VwPal2Biz from "../../screens/CredSls/Vw2GrntCrdSls/Pal2Biz";
import VwPal2Pal from "../../screens/CredSls/Vw2GrntCrdSls/Pal2Pal";
import GrantBiz2BizCrdSl from "../../screens/MyAcc/Loans/GiveLoan/CredSlr/Biz2Biz";
import GrantBiz2PalCrdSl from "../../screens/MyAcc/Loans/GiveLoan/CredSlr/Biz2Pal";
import GrantPal2BizCrdSl from "../../screens/MyAcc/Loans/GiveLoan/CredSlr/Pal2Biz";
import GrantPal2PalCrdSl from "../../screens/MyAcc/Loans/GiveLoan/CredSlr/Pal2Pal";

import SignIn2GrntLnReq from "../../screens/MyAcc/LoanRequest/SignIn2GrntLnReq";
import CompVw2GrantLnReq2 from "../../screens/MyAcc/LoanRequest/View2GrntLnReq/CompVw2GrantLnReq2";
import PalVw2GrantLnReq2 from "../../screens/MyAcc/LoanRequest/View2GrntLnReq/PalVw2GrantLnReq2";

import BizPalLn from "../../screens/MyAcc/Loans/GiveLoan/SM/BizPal";
import PalPalLn from "../../screens/MyAcc/Loans/GiveLoan/SM/PalPal";

import PlaceLnReq from "../../screens/CredSls/SlsLnReq/PlaceLnReq";
import PlaceLnReq2 from "../../screens/CredSls/SlsLnReq/PlaceLnReq2";
import PlaceLnReq3 from "../../screens/CredSls/SlsLnReq/PlaceLnReq3";
import PlaceLnReq4 from "../../screens/CredSls/SlsLnReq/PlaceLnReq4";


import Vw2GrntBiz2Biz from "../../screens/CredSls/SlsLnReq/Vw2Grant/Biz2Biz";
import Vw2GrntBiz2Pal from "../../screens/CredSls/SlsLnReq/Vw2Grant/Biz2Pal";
import Vw2GrntPal2Biz from "../../screens/CredSls/SlsLnReq/Vw2Grant/Pal2Biz";
import Vw2GrntPal2Pal from "../../screens/CredSls/SlsLnReq/Vw2Grant/Pal2Pal";

import PersonelVw2GrntB2B from "../../screens/CredSls/PersonelVw2GrntLR/Biz2Biz";
import PersonelVw2GrntB2P from "../../screens/CredSls/PersonelVw2GrntLR/Biz2Pal";

import SIBiz2Pal2Repay from "../../screens/MyAcc/Loans/RepayLoan/SM/SIBiz2Pal";
import RpyBiz2Pal from "../../screens/MyAcc/Loans/RepayLoan/SM/Repay/Biz2Pal";
import RpyPal2Pal from "../../screens/MyAcc/Loans/RepayLoan/SM/Repay/Pal2Pal";
import Vw2RpyB2P from "../../screens/MyAcc/Loans/RepayLoan/SM/Vw2Repay/Biz2Pal";
import Vw2RpyP2P from "../../screens/MyAcc/Loans/RepayLoan/SM/Vw2Repay/Pal2Pal";

import SISgnInToBLB2P from "../../screens/MyAcc/Loans/BList/SMLoanee/SgnInToBL/Biz2Pal";
import Vw2BLBiz2Pal from "../../screens/MyAcc/Loans/BList/View2BL/Biz2Pal";
import Vw2BLPal2Pal from "../../screens/MyAcc/Loans/BList/View2BL/Pal2Pal";
import BLBiz2Pal from "../../screens/MyAcc/Loans/BList/SMLoanee/Biz2Pal";
import BLPal2Pal from "../../screens/MyAcc/Loans/BList/SMLoanee/Pal2Pal";

import SI2VwB2PLoanees from "../../screens/MyAcc/Loans/ViewSMLns/SI2VwB2PLoanees";
import VwB2PMyLoaners from "../../screens/MyAcc/Loans/ViewSMLns/Biz2Pal/MyLoaners";
import VwB2PMyLoanees from "../../screens/MyAcc/Loans/ViewSMLns/Biz2Pal/MyLoanees";
import VwP2PMyLoanees from "../../screens/MyAcc/Loans/ViewSMLns/Pal2Pal/MyLoanees";
import VwP2PMyLoaners from "../../screens/MyAcc/Loans/ViewSMLns/Pal2Pal/MyLoaners";

import SignIn2VwLR from "../../screens/MyAcc/Loans/LRpyments/SignIn2VwLR";
import VwB2PLRSent from "../../screens/MyAcc/Loans/LRpyments/B2PSent";
import VwB2PReceived from "../../screens/MyAcc/Loans/LRpyments/B2PReceived";
import VwP2PReceived from "../../screens/MyAcc/Loans/LRpyments/P2PReceived";
import VwP2PSent from "../../screens/MyAcc/Loans/LRpyments/P2PSent";

import PalProdsRequest from "../../screens/MyAcc/PalProdsRequest";
import PlaceLnReqP2P from "../../screens/MyAcc/LoanRequest/PlaceLnReq";
import PlaceLnReqB2P from "../../screens/MyAcc/LoanRequest/PlaceLnReq2";

import VwB2PMyLoanersDtld from "../../screens/MyAcc/Loans/ViewSMLns/Biz2Pal/MyLoanersDtld";
import VwB2PMyLoaneesDtld from "../../screens/MyAcc/Loans/ViewSMLns/Biz2Pal/MyLoaneesDtld";
import VwP2PMyLoaneesDtld from "../../screens/MyAcc/Loans/ViewSMLns/Pal2Pal/MyLoaneesDtld";
import VwP2PMyLoanersDtld from "../../screens/MyAcc/Loans/ViewSMLns/Pal2Pal/MyLoanersDtld";

import SI2VwBiz2BizLoanees from "../../screens/CredSls/VwLoanStts/SI2VwBiz2BizLoanees";
import SI2VwBiz2PalLoaners from "../../screens/CredSls/VwLoanStts/SI2VwBiz2PalLoaners";
import VwBizLnees from "../../screens/CredSls/VwLoanStts/Biz/MyLoanees";
import VwBizLners from "../../screens/CredSls/VwLoanStts/Biz/MyLoaners";
import VwPalLnees from "../../screens/CredSls/VwLoanStts/Pal/MyLoanees";
import VwPalLners from "../../screens/CredSls/VwLoanStts/Pal/MyLoaners";
import VwMyBizLoaneesDtld from "../../screens/CredSls/VwLoanStts/Biz/MyLoaneesDtld";
import VwMyBizLoanersDtld from "../../screens/CredSls/VwLoanStts/Biz/MyLoanersDtld";
import VwMyPalLoaneesDtld from "../../screens/CredSls/VwLoanStts/Pal/MyLoaneesDtld";
import VwMyPalLoanersDtld from "../../screens/CredSls/VwLoanStts/Pal/MyLoanersDtld";

import SI2VwBiz2BizLoaners from "../../screens/CredSls/VwLoanStts/SI2VwBiz2BizLoaners";
import SI2VwBiz2PalLoanees from "../../screens/CredSls/VwLoanStts/SI2VwBiz2PalLoanees";
import VwBiz2PalLnees from "../../screens/CredSls/VwLoanStts/Biz2Pal/MyLoanees";
import VwBiz2PalLners from "../../screens/CredSls/VwLoanStts/Biz2Pal/MyLoaners";
import VwPal2BizLnees from "../../screens/CredSls/VwLoanStts/Pal2Biz/MyLoanees";
import VwPal2BizLners from "../../screens/CredSls/VwLoanStts/Pal2Biz/MyLoaners";
import VwMyBiz2PalLoaneesDtld from "../../screens/CredSls/VwLoanStts/Biz2Pal/MyLoaneesDtld";
import VwMyBiz2PalLoanersDtld from "../../screens/CredSls/VwLoanStts/Biz2Pal/MyLoanersDtld";
import VwMyPal2BizLoaneesDtld from "../../screens/CredSls/VwLoanStts/Pal2Biz/MyLoaneesDtld";
import VwMyPal2BizLoanersDtld from "../../screens/CredSls/VwLoanStts/Pal2Biz/MyLoanersDtld";

import CredB2BSent from "../../screens/CredSls/ViewRPymnts/B2BSent";
import CredB2BReceived from "../../screens/CredSls/ViewRPymnts/B2BReceived";
import CredP2PReceived from "../../screens/CredSls/ViewRPymnts/P2PReceived";
import CredP2PSent from "../../screens/CredSls/ViewRPymnts/P2PSent";
import CredB2PSent from "../../screens/CredSls/ViewRPymnts/B2PSent";
import CredB2PReceived from "../../screens/CredSls/ViewRPymnts/B2PReceived";
import CredP2BReceived from "../../screens/CredSls/ViewRPymnts/P2BReceived";
import CredP2BSent from "../../screens/CredSls/ViewRPymnts/P2BSent";



import CredRPyBiz2Biz from "../../screens/CredSls/RepayCredSales/Repay/Biz2Biz";
import CredRPyBiz2Pal from "../../screens/CredSls/RepayCredSales/Repay/Biz2Pal";
import CredRPyPal2Biz from "../../screens/CredSls/RepayCredSales/Repay/Pal2Biz";
import CredRPyPal2Pal from "../../screens/CredSls/RepayCredSales/Repay/Pal2Pal";

import BLCredBiz2Biz from "../../screens/CredSls/BList/Biz2Biz";
import BLCredBiz2Pal from "../../screens/CredSls/BList/Biz2Pal";
import BLCredPal2Biz from "../../screens/CredSls/BList/Pal2Biz";
import BLCredPal2Pal from "../../screens/CredSls/BList/Pal2Pal";


import SgnIn2TransferBiz from "../../screens/CredSls/SgnIn2TransferBiz";
import ReadPayPalTNC from "../../screens/MyAcc/DepositMny/ReadPayPalTNC";
import Vw2ApprovePPReq from "../../screens/Advocate/Vw2ApprovePPReq";
import Vw2ApproveChmReq from "../../screens/Advocate/Vw2ApproveChmReq";
import Vw2ApproveBizReq from "../../screens/Advocate/Vw2ApproveBizReq";
import MakeBizDpsts from "../../screens/CredSls/Depost/MakeBizDpsts";
import VwBizDpsts from "../../screens/CredSls/Depost/VwBizDpsts";
import WaiveBiz2Biz from "../../screens/CredSls/Waive/Biz2Biz";
import WaiveBiz2Pal from "../../screens/CredSls/Waive/Biz2Pal";
import WaivePal2Biz from "../../screens/CredSls/Waive/Pal2Biz";
import WaivePal2Pal from "../../screens/CredSls/Waive/Pal2Pal";
import WaiveSMBiz2Pal from "../../screens/MyAcc/Loans/RepayLoan/SM/Waive/Biz2Pal";
import WaiveSMPal2Pal from "../../screens/MyAcc/Loans/RepayLoan/SM/Waive/Pal2Pal";
import WaiveChmCov from "../../screens/MyAcc/Loans/RepayLoan/Chama/Waive/CovLons";


import ChmLnsSent from "../../screens/Chama/ViewLns/GivenOut/Loanees";
import ChmLnsRec from "../../screens/Chama/ViewLns/Received/Loaners";
import ChmLoaneesDtls from "../../screens/Chama/ViewLns/GivenOut/LoaneesDtls";
import ChmLoanersDtls from "../../screens/Chama/ViewLns/Received/LoanersDtls";

import SendNLBnftChm from "../../screens/MyAcc/SendNonLonsOptions/BenefitChm";
import BenefitChmSenderOnly from "../../screens/MyAcc/SendNonLonsOptions/BenefitChmSenderOnly";
import SendNLBnftNone from "../../screens/MyAcc/SendNonLonsOptions/BenefitNone";
import Vw2SelectChmBeneficiary from "../../screens/MyAcc/SendNonLonsOptions/Vw2SelectChmBeneficiary";

import B2BPayCashReq from "../../screens/CredSls/PayCash/B2B/B2BPayCashReq";
import B2BPayCashVw2Grant from "../../screens/CredSls/PayCash/B2B/B2BPayCashVw2Grant";
import B2BPayCash from "../../screens/CredSls/PayCash/B2B/B2BPayCash";
import B2PPayCashReq from "../../screens/CredSls/PayCash/B2P/B2PPayCashReq";
import B2PPayCashVw2Grant from "../../screens/CredSls/PayCash/B2P/B2PPayCashVw2Grant";
import B2PPayCash from "../../screens/CredSls/PayCash/B2P/B2PPayCash";
import P2BPayCash from "../../screens/CredSls/PayCash/P2B/PayCash2";
import PenaliseMember from "../../screens/Chama/PenaliseMember";
import ChamaDtls from "../../screens/Chama/ViewChamaActivities/Membership/ChamaDtls";
import VwMbrSubsDirectly from "../../screens/Chama/ViewChamaActivities/MmbrSubs";
import ViewBiznaShareRecP2B from "../../screens/CredSls/PayCash/P2B/PayCash2/ViewBiznaShareRecP2B";
import ViewBiznaShareSentP2B from "../../screens/CredSls/PayCash/P2B/PayCash2/ViewBiznaShareSentP2B";
import ViewBiznaShareRecB2B from "../../screens/CredSls/PayCash/B2B/ViewBiznaShareRecB2B";
import ViewBiznaShareSentB2B from "../../screens/CredSls/PayCash/B2B/ViewBiznaShareSentB2B";
import ViewBiznaShareRecB2P from "../../screens/CredSls/PayCash/B2P/ViewBiznaShareRecB2P";
import ViewBiznaShareSentB2P from "../../screens/CredSls/PayCash/B2P/ViewBiznaShareSentB2P";
import BizAddAdmin from "../../screens/CredSls/UpdateBizAc/AddAdmin";
import AddBizBeneficiary from "../../screens/CredSls/UpdateBizAc/AddBizBeneficiary";
import BizCancelObjection from "../../screens/CredSls/UpdateBizAc/CancelObjection";
import BizObject from "../../screens/CredSls/UpdateBizAc/Object";
import BizUpdatePW from "../../screens/CredSls/UpdateBizAc/UpdatePW";
import ChmCancelObjection from "../../screens/Chama/UpdateChmAc/CancelObjection";
import ChmObject from "../../screens/Chama/UpdateChmAc/Object";
import ChmUpdate from "../../screens/Chama/UpdateChmAc/Update";
import UpdateBizAc from "../../screens/CredSls/UpdateBizAc";
import UpdateChmAc from "../../screens/Chama/UpdateChmAc";
import ChmAddAdmin from "../../screens/Chama/UpdateChmAc/AddAdmin";
import AddBeneficiary from "../../screens/MyAcc/AddBeneficiary";
import UpdateMainAc from "../../screens/MyAcc/UpdateMainAc";
import BizReadPayPalTNC from "../../screens/CredSls/Depost/PayPal/ReadPayPalTNC";
import BizPayPalDposit from "../../screens/CredSls/Depost/PayPal/PayPalDposit";
import MakeNVwPayPalDpsits from "../../screens/CredSls/Depost/PayPal/MakeNVwPayPalDpsits";
import VwCompMFAdvTC from "../../screens/Settings/VwCompMFAdvTC";
import VwCompMFKTC from "../../screens/Settings/VwCompMFKTC";
import VwCompMFNTC from "../../screens/Settings/VwCompMFNTC";
import VwToRegMFK from "../../screens/MFKubwa/VwToRegMFK";
import MemberReqChm from "../../screens/Chama/ReqLoan/PlaceLnReq";
import Vw2SelectChm2Req from "../../screens/Chama/ReqLoan/Vw2SelectChm2Req";
import CreateExRates from "../../screens/Settings/CreateExRates";
import MemberDtls from "../../screens/Chama/ViewChamaActivities/Membership/MemberDtls";
import ChmMmbrContriss from "../../screens/Chama/ViewChamaActivities/Contributions/Member";



import BotTab from '../BotTab';
import AddAdv from "../../screens/AddAdv"
import TestScreen from "../../screens/TestScreen"
import OtherProds from "../../screens/OtherProds"
import CreateMyAc from '../../screens/CreateMyAc';
import HmScreen from '../../screens/HmScreen';
import ViewMyAc from '../../screens/ViewMyAc';
import Homes from '../../screens/Homes';
import MFNRegMNdogo from "../../screens/MFNRegMNdogo";
import MFNdogoProds from "../../screens/MFNdogoProds";
import MFKHmScreen from '../../screens/MFKubwasz/HomeScreensz';
import MFNHmScreen from "../../screens/MFNdogosz/HomeScreensz";
import Alertzs from "../../screens/settingz/Alertzs";
import SettingsHome from '../../screens/Settings/SettingsHome';
import SettingsSignIn from "../../screens/Settings/SignIn";
import UpdateCompPW from "../../screens/settingz/UpdateCompPW";
import AdvocateHm from "../../screens/Advocate/AdvocateHm";
import KFAdminSignInScreen from '../../screens/MFAdmin/SignInAdm';
import MFAdminHmScrn from '../../screens/MFAdmin';
import MFNdogoszx from '../../screens/MFNdogo';
import RegisterMFNdogo from '../../screens/MFNdogo/RegisterMFNdogo';






const Stack = createNativeStackNavigator();
const HomeNavigator = props => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Homesss'} component={BotTab} />
      <Stack.Screen name={'Home'} component={Homes} />   
      <Stack.Screen name={'MFNdogoszx'} component={MFNdogoszx} />
      <Stack.Screen name={'RegisterMFNdogo'} component={RegisterMFNdogo}/>
   
      
     
      
      <Stack.Screen name={'AddAdv'} component={AddAdv} />
      <Stack.Screen name={'KFAdminSignInScreen'} component={KFAdminSignInScreen} />
      <Stack.Screen name={'MFAdminHmScrn'} component={MFAdminHmScrn} />

      <Stack.Screen name={'MFKubwa'} component={MFKubwa} />
      <Stack.Screen name={'MFAdmin'} component={MFAdmin} />
      <Stack.Screen name={'SettingsHmScreen'} component={SettingsHome} />
      <Stack.Screen name={'OtherProds'} component={OtherProds} />
      <Stack.Screen name={'CreateMyAc'} component={CreateMyAc} />
      <Stack.Screen name={'HmScreen'} component={HmScreen} />
      <Stack.Screen name={'MFNRegMNdogo'} component={MFNRegMNdogo} />
      <Stack.Screen name={'AdvocateHm'} component={AdvocateHm} />
      <Stack.Screen name={'MFNdogoProds'} component={MFNdogoProds} />      
      <Stack.Screen name={'MFKHmScreen'} component={MFKHmScreen} />
      <Stack.Screen name={'MFNHmScreen'} component={MFNHmScreen} />      
      <Stack.Screen name={'Alertzs'} component={Alertzs} />      
      
      <Stack.Screen name={'SettingsSignIn'} component={SettingsSignIn} />
      <Stack.Screen name={'UpdateCompPW'} component={UpdateCompPW} />
      <Stack.Screen name={'ViewMyAczsz'} component={ViewMyAc} />
      <Stack.Screen name={'Homeie'} component={Homeie} />      
      
      <Stack.Screen name={'ChmMmbrContriss'} component={ChmMmbrContriss} />
      
      <Stack.Screen name={'MemberDtls'} component={MemberDtls} />
      <Stack.Screen name={'CreateExRates'} component={CreateExRates} />
      <Stack.Screen name={'MemberReqChm'} component={MemberReqChm} />
      <Stack.Screen name={'VwToRegMFK'} component={VwToRegMFK} />
      <Stack.Screen name={'Vw2SelectChm2Req'} component={Vw2SelectChm2Req} />
      <Stack.Screen name={'VwCompMFAdvTC'} component={VwCompMFAdvTC} />
      
      <Stack.Screen name={'VwCompMFKTC'} component={VwCompMFKTC} />
      <Stack.Screen name={'VwCompMFNTC'} component={VwCompMFNTC} />
      
      <Stack.Screen name={'MakeNVwPayPalDpsits'} component={MakeNVwPayPalDpsits} />
      
      <Stack.Screen name={'BizReadPayPalTNC'} component={BizReadPayPalTNC} />
      <Stack.Screen name={'BizPayPalDposit'} component={BizPayPalDposit} />
      
      <Stack.Screen name={'UpdateMainAc'} component={UpdateMainAc} />
       <Stack.Screen name={'AddBeneficiary'} component={AddBeneficiary} />
      <Stack.Screen name={'ChmAddAdmin'} component={ChmAddAdmin} />
      <Stack.Screen name={'UpdateBizAc'} component={UpdateBizAc} />
      <Stack.Screen name={'UpdateChmAc'} component={UpdateChmAc} />
      
      <Stack.Screen name={'BizAddAdmin'} component={BizAddAdmin} />
      <Stack.Screen name={'AddBizBeneficiary'} component={AddBizBeneficiary} />
      <Stack.Screen name={'BizCancelObjection'} component={BizCancelObjection} />
      <Stack.Screen name={'BizObject'} component={BizObject} />
      <Stack.Screen name={'BizUpdatePW'} component={BizUpdatePW} />
      <Stack.Screen name={'ChmCancelObjection'} component={ChmCancelObjection} />      
      <Stack.Screen name={'ChmObject'} component={ChmObject} />
      <Stack.Screen name={'ChmUpdate'} component={ChmUpdate} />
      
       <Stack.Screen name={'ViewBiznaShareRecP2B'} component={ViewBiznaShareRecP2B} />
      <Stack.Screen name={'ViewBiznaShareSentP2B'} component={ViewBiznaShareSentP2B} />
      <Stack.Screen name={'ViewBiznaShareRecB2B'} component={ViewBiznaShareRecB2B} />
      <Stack.Screen name={'ViewBiznaShareSentB2B'} component={ViewBiznaShareSentB2B} />
      <Stack.Screen name={'ViewBiznaShareRecB2P'} component={ViewBiznaShareRecB2P} />
      <Stack.Screen name={'ViewBiznaShareSentB2P'} component={ViewBiznaShareSentB2P} />      
      <Stack.Screen name={'VwMbrSubsDirectly'} component={VwMbrSubsDirectly} />
      <Stack.Screen name={'ChamaDtls'} component={ChamaDtls} />
      <Stack.Screen name={'PenaliseMember'} component={PenaliseMember} />
      <Stack.Screen name={'B2BPayCashReq'} component={B2BPayCashReq} />
      <Stack.Screen name={'B2BPayCashVw2Grant'} component={B2BPayCashVw2Grant} />
      <Stack.Screen name={'B2BPayCash'} component={B2BPayCash} />
      <Stack.Screen name={'B2PPayCashReq'} component={B2PPayCashReq} />      
      <Stack.Screen name={'B2PPayCash'} component={B2PPayCash} />      
      <Stack.Screen name={'P2BPayCash'} component={P2BPayCash} />
      
      <Stack.Screen name={'B2PPayCashVw2Grant'} component={B2PPayCashVw2Grant} />      
      <Stack.Screen name={'Vw2SelectChmBeneficiary'} component={Vw2SelectChmBeneficiary} />
      
      <Stack.Screen name={'SendNLBnftChm'} component={SendNLBnftChm} />
      <Stack.Screen name={'BenefitChmSenderOnly'} component={BenefitChmSenderOnly} />
      <Stack.Screen name={'SendNLBnftNone'} component={SendNLBnftNone} />
      
      <Stack.Screen name={'ChmLnsRec'} component={ChmLnsRec} />
      <Stack.Screen name={'ChmLnsSent'} component={ChmLnsSent} />
      <Stack.Screen name={'ChmLoaneesDtls'} component={ChmLoaneesDtls} />
      <Stack.Screen name={'ChmLoanersDtls'} component={ChmLoanersDtls} />

      <Stack.Screen name={'WaiveBiz2Biz'} component={WaiveBiz2Biz} />
      <Stack.Screen name={'WaiveBiz2Pal'} component={WaiveBiz2Pal} />      
      <Stack.Screen name={'WaivePal2Biz'} component={WaivePal2Biz} />
      <Stack.Screen name={'WaivePal2Pal'} component={WaivePal2Pal} />
      <Stack.Screen name={'WaiveSMBiz2Pal'} component={WaiveSMBiz2Pal} />
      <Stack.Screen name={'WaiveSMPal2Pal'} component={WaiveSMPal2Pal} />
      <Stack.Screen name={'WaiveChmCov'} component={WaiveChmCov} />
      
      <Stack.Screen name={'MakeBizDpsts'} component={MakeBizDpsts} />
      <Stack.Screen name={'VwBizDpsts'} component={VwBizDpsts} />
      
      <Stack.Screen name={'Vw2ApproveChmReq'} component={Vw2ApproveChmReq} />
      <Stack.Screen name={'Vw2ApproveBizReq'} component={Vw2ApproveBizReq} />
      <Stack.Screen name={'SgnIn2TransferBiz'} component={SgnIn2TransferBiz} />
      <Stack.Screen name={'Vw2ApprovePPReq'} component={Vw2ApprovePPReq} />
      <Stack.Screen name={'ReadPayPalTNC'} component={ReadPayPalTNC} />
      

      
      <Stack.Screen name={'CredB2PSent'} component={CredB2PSent} />
      <Stack.Screen name={'CredB2PReceived'} component={CredB2PReceived} />
      <Stack.Screen name={'CredP2BReceived'} component={CredP2BReceived} />
      <Stack.Screen name={'CredP2BSent'} component={CredP2BSent} />
      
      <Stack.Screen name={'CredRPyBiz2Biz'} component={CredRPyBiz2Biz} />
      <Stack.Screen name={'CredRPyBiz2Pal'} component={CredRPyBiz2Pal} />
      <Stack.Screen name={'CredRPyPal2Biz'} component={CredRPyPal2Biz} />
      <Stack.Screen name={'CredRPyPal2Pal'} component={CredRPyPal2Pal} />
      
      <Stack.Screen name={'SI2VwBiz2PalLoaners'} component={SI2VwBiz2PalLoaners} />
      <Stack.Screen name={'SI2VwBiz2PalLoanees'} component={SI2VwBiz2PalLoanees} />
    
      <Stack.Screen name={'VwBiz2PalLnees'} component={VwBiz2PalLnees} />
      <Stack.Screen name={'VwBiz2PalLners'} component={VwBiz2PalLners} />
      <Stack.Screen name={'VwPal2BizLnees'} component={VwPal2BizLnees} />
      <Stack.Screen name={'VwPal2BizLners'} component={VwPal2BizLners} />
      <Stack.Screen name={'VwMyBiz2PalLoaneesDtld'} component={VwMyBiz2PalLoaneesDtld} />
      <Stack.Screen name={'VwMyBiz2PalLoanersDtld'} component={VwMyBiz2PalLoanersDtld} />
      <Stack.Screen name={'VwMyPal2BizLoaneesDtld'} component={VwMyPal2BizLoaneesDtld} />
      <Stack.Screen name={'VwMyPal2BizLoanersDtld'} component={VwMyPal2BizLoanersDtld} />
      
      <Stack.Screen name={'BLCredBiz2Biz'} component={BLCredBiz2Biz} />
      <Stack.Screen name={'BLCredBiz2Pal'} component={BLCredBiz2Pal} />
      <Stack.Screen name={'BLCredPal2Biz'} component={BLCredPal2Biz} />
      <Stack.Screen name={'BLCredPal2Pal'} component={BLCredPal2Pal} />
      
      <Stack.Screen name={'CredB2BSent'} component={CredB2BSent} />
      <Stack.Screen name={'CredB2BReceived'} component={CredB2BReceived} />
      <Stack.Screen name={'CredP2PReceived'} component={CredP2PReceived} />
      <Stack.Screen name={'CredP2PSent'} component={CredP2PSent} />
      
      <Stack.Screen name={'SI2VwBiz2BizLoanees'} component={SI2VwBiz2BizLoanees} />
      <Stack.Screen name={'SI2VwBiz2BizLoaners'} component={SI2VwBiz2BizLoaners} />
      <Stack.Screen name={'VwBizLnees'} component={VwBizLnees} />
      <Stack.Screen name={'VwBizLners'} component={VwBizLners} />
      <Stack.Screen name={'VwPalLnees'} component={VwPalLnees} />
      <Stack.Screen name={'VwPalLners'} component={VwPalLners} />
      <Stack.Screen name={'VwMyBizLoaneesDtld'} component={VwMyBizLoaneesDtld} />
      <Stack.Screen name={'VwMyBizLoanersDtld'} component={VwMyBizLoanersDtld} />
      <Stack.Screen name={'VwMyPalLoaneesDtld'} component={VwMyPalLoaneesDtld} />
      <Stack.Screen name={'VwMyPalLoanersDtld'} component={VwMyPalLoanersDtld} />
      
      <Stack.Screen name={'VwB2PMyLoanersDtld'} component={VwB2PMyLoanersDtld} />
      <Stack.Screen name={'VwB2PMyLoaneesDtld'} component={VwB2PMyLoaneesDtld} />
      <Stack.Screen name={'VwP2PMyLoaneesDtld'} component={VwP2PMyLoaneesDtld} />
      <Stack.Screen name={'VwP2PMyLoanersDtld'} component={VwP2PMyLoanersDtld} />

      <Stack.Screen name={'SignIn2VwLR'} component={SignIn2VwLR} />
      <Stack.Screen name={'VwB2PLRSent'} component={VwB2PLRSent} />
      <Stack.Screen name={'VwB2PReceived'} component={VwB2PReceived} />
      <Stack.Screen name={'VwP2PReceived'} component={VwP2PReceived} />

      <Stack.Screen name={'VwP2PSent'} component={VwP2PSent} />
      
      <Stack.Screen name={'PlaceLnReqP2P'} component={PlaceLnReqP2P} />
      <Stack.Screen name={'PlaceLnReqB2P'} component={PlaceLnReqB2P} />
      
      <Stack.Screen name={'PalProdsRequest'} component={PalProdsRequest} />
      
      <Stack.Screen name={'SI2VwB2PLoanees'} component={SI2VwB2PLoanees} />
      <Stack.Screen name={'VwB2PMyLoaners'} component={VwB2PMyLoaners} />
      <Stack.Screen name={'VwB2PMyLoanees'} component={VwB2PMyLoanees} />
      <Stack.Screen name={'VwP2PMyLoanees'} component={VwP2PMyLoanees} />
      <Stack.Screen name={'VwP2PMyLoaners'} component={VwP2PMyLoaners} />
      
      <Stack.Screen name={'SISgnInToBLB2P'} component={SISgnInToBLB2P} />
      <Stack.Screen name={'Vw2BLBiz2Pal'} component={Vw2BLBiz2Pal} />
      <Stack.Screen name={'Vw2BLPal2Pal'} component={Vw2BLPal2Pal} />
      <Stack.Screen name={'BLBiz2Pal'} component={BLBiz2Pal} />
      <Stack.Screen name={'BLPal2Pal'} component={BLPal2Pal} />
      
      <Stack.Screen name={'SIBiz2Pal2Repay'} component={SIBiz2Pal2Repay} />
      <Stack.Screen name={'RpyBiz2Pal'} component={RpyBiz2Pal} />
      <Stack.Screen name={'RpyPal2Pal'} component={RpyPal2Pal} />
      <Stack.Screen name={'Vw2RpyB2P'} component={Vw2RpyB2P} />
      <Stack.Screen name={'Vw2RpyP2P'} component={Vw2RpyP2P} />
      
      
      <Stack.Screen name={'PersonelVw2GrntB2B'} component={PersonelVw2GrntB2B} />
      <Stack.Screen name={'PersonelVw2GrntB2P'} component={PersonelVw2GrntB2P} />
      
      <Stack.Screen name={'Vw2GrntBiz2Biz'} component={Vw2GrntBiz2Biz} />
      <Stack.Screen name={'Vw2GrntBiz2Pal'} component={Vw2GrntBiz2Pal} />

      <Stack.Screen name={'Vw2GrntPal2Biz'} component={Vw2GrntPal2Biz} />
      <Stack.Screen name={'Vw2GrntPal2Pal'} component={Vw2GrntPal2Pal} />
      

      <Stack.Screen name={'BizPalLn'} component={BizPalLn} />
      <Stack.Screen name={'PalPalLn'} component={PalPalLn} />
      
      <Stack.Screen name={'SignIn2GrntLnReq'} component={SignIn2GrntLnReq} />
      <Stack.Screen name={'CompVw2GrantLnReq2'} component={CompVw2GrantLnReq2} />
      <Stack.Screen name={'PalVw2GrantLnReq2'} component={PalVw2GrantLnReq2} />
      
      <Stack.Screen name={'GrantBiz2BizCrdSl'} component={GrantBiz2BizCrdSl} />
      <Stack.Screen name={'GrantBiz2PalCrdSl'} component={GrantBiz2PalCrdSl} />
      <Stack.Screen name={'GrantPal2BizCrdSl'} component={GrantPal2BizCrdSl} />
      <Stack.Screen name={'GrantPal2PalCrdSl'} component={GrantPal2PalCrdSl} />
      
      <Stack.Screen name={'PlaceLnReq2'} component={PlaceLnReq2} />
      <Stack.Screen name={'PlaceLnReq3'} component={PlaceLnReq3} />
      <Stack.Screen name={'PlaceLnReq'} component={PlaceLnReq} />
      <Stack.Screen name={'PlaceLnReq4'} component={PlaceLnReq4} />
      
      <Stack.Screen name={'SIBiz2Biz'} component={SIBiz2Biz} />
      <Stack.Screen name={'SIBiz2Pal'} component={SIBiz2Pal} />
      <Stack.Screen name={'VwBiz2Biz'} component={VwBiz2Biz} />
      <Stack.Screen name={'VwBiz2Pal'} component={VwBiz2Pal} />
      <Stack.Screen name={'VwPal2Biz'} component={VwPal2Biz} />  
      
      <Stack.Screen name={'BiznaReqstPage1'} component={BiznaReqstPage1} />
      <Stack.Screen name={'BiznaReqstPage2'} component={BiznaReqstPage2} />
      <Stack.Screen name={'TakeOverBizna'} component={TakeOverBizna} />
      <Stack.Screen name={'giveBizna'} component={giveBizna} />
      <Stack.Screen name={'VwBusAc2TakeUp'} component={VwBusAc2TakeUp} />  
      
       <Stack.Screen name={'SgnIn2VwCashSales'} component={SgnIn2VwCashSales} />
      
      <Stack.Screen name={'VwAcBfDpst'} component={VwAcBfDpst} />
      <Stack.Screen name={'PayPalDposit'} component={PayPalDposit} />     

      <Stack.Screen name={'PayCash'} component={PayCash} />
      <Stack.Screen name={'VwCashPayRec'} component={VwCashPayRec} /> 

      <Stack.Screen name={'VwCashPaySent'} component={VwCashPaySent} />
      
      <Stack.Screen name={'VwGrp2LnNonCov'} component={VwGrp2LnNonCov} />
      <Stack.Screen name={'VwGrp2LnCov'} component={VwGrp2LnCov} />      
      <Stack.Screen name={'DeclChamaReq'} component={DeclChamaReq} />
      <Stack.Screen name={'DeclCredSls'} component={DeclCredSls} />
      <Stack.Screen name={'DeclPalLn'} component={DeclPalLn} />
      <Stack.Screen name={'VwMFNAcDtls'} component={VwMFNAcDtls} />
      <Stack.Screen name={'ApplyMFKubwa'} component={ApplyMFKubwa} />
      <Stack.Screen name={'ViewAlertDtls'} component={ViewAlertDtls} />
      <Stack.Screen name={'SgnIn2VwRevenueShare'} component={SgnIn2VwRevenueShare} />
      <Stack.Screen name={'ViewBiznaShareSent'} component={ViewBiznaShareSent} />
      <Stack.Screen name={'ViewBiznaShareRec'} component={ViewBiznaShareRec} />
      <Stack.Screen name={'RequestLoansPage'} component={RequestLoansPage} />
      <Stack.Screen name={'ChamaPlaceLnReq'} component={ChamaPlaceLnReq} />
      <Stack.Screen name={'ChamaVw2DelLnReqs'} component={ChamaVw2DelLnReqs} />
      <Stack.Screen name={'ChamaVw2GrantLnReqCov'} component={ChamaVw2GrantLnReqCov} />
      <Stack.Screen name={'ChamaVw2GrantLnReqNonCov'} component={ChamaVw2GrantLnReqNonCov} />
      
      <Stack.Screen name={'CrdSlVw2DelLnReqs'} component={CrdSlVw2DelLnReqs} />
      
      <Stack.Screen name={'CrdSlVw2GrantLnReqNonCov'} component={CrdSlVw2GrantLnReqNonCov} />
      
      <Stack.Screen name={'Vw2GrantLnReq2'} component={Vw2GrantLnReq2} />
      <Stack.Screen name={'EntrAdvLoc'} component={EntrAdvLoc} />
     
      <Stack.Screen name={'Vw2DelLnReqs'} component={Vw2DelLnReqs} />
      <Stack.Screen name={'AutomaticRepayAllTyps'} component={AutomaticRepayAllTyps} />
      
      <Stack.Screen name={'VwMakeLnReq'} component={VwMakeLnReq} />
     
      
       <Stack.Screen name={'VwPlLn2Remove'} component={VwPlLn2Remove} />
      <Stack.Screen name={'SgnIn2RemoveSlAd'} component={SgnIn2RemoveSlAd} />
      <Stack.Screen name={'VwSlsAds2Remove'} component={VwSlsAds2Remove} />

      <Stack.Screen name={'DetailedChmPrfl'} component={DetailedChmPrfl} />
      <Stack.Screen name={'DtldPalLnInfo'} component={DtldPalLnInfo} />
      <Stack.Screen name={'DtldSalesInfo'} component={DtldSalesInfo} />
      <Stack.Screen name={'LoanAds'} component={LoanAd} />
      <Stack.Screen name={'ItemAds'} component={ItemAd} />
      
      <Stack.Screen name={'LoanChms'} component={LoanChm} />
      <Stack.Screen name={'SrchItemAds'} component={SrchItemAd} />
      <Stack.Screen name={'SrchLoanAds'} component={SrchLoanAd} />
      
      <Stack.Screen name={'LnsScreen'} component={LnsScreen} />
      <Stack.Screen name={'CredSlsScreen'} component={CredSlsScreen} />
      <Stack.Screen name={'ChamaScreen'} component={ChamaScreen} />
      
      <Stack.Screen name={'SgnIn2VwChmDpstss'} component={SgnIn2VwChmDpsts} />
      <Stack.Screen name={'VwChmDpstss'} component={VwChmDpsts} />
      <Stack.Screen name={'VwChmWthdrwlss'} component={VwChmWthdrwls} />
      <Stack.Screen name={'SgnIn2VwChmWthdrwlss'} component={SgnIn2VwChmWthdrwls} />
      
      <Stack.Screen name={'SignInAdms'} component={SignInAdm} />
      <Stack.Screen name={'SnIn2VwCrdSlLPs'} component={SnIn2VwCrdSlLP} />
      <Stack.Screen name={'SgnIn2VwCovCrdSlsLneesss'} component={SgnIn2VwCovCrdSlsLneess} />
      <Stack.Screen name={'SgnIn2VwNCCrdSlsLneess'} component={SgnIn2VwNCCrdSlsLnees} />
      
       <Stack.Screen name={'VwBusAcss'} component={VwBusAcs} />
      <Stack.Screen name={'DissolveBizss'} component={DissolveBizs} />      
      <Stack.Screen name={'RmvPersonnelss'} component={RmvPersonnels} /> 
      <Stack.Screen name={'SgnIn2VwBiznass'} component={SgnIn2VwBiznas} />      
      <Stack.Screen name={'ShareCredSlsRevss'} component={ShareCredSlsRevs} />      
    
      <Stack.Screen name={'AddPersonels'} component={AddPersonel} />      
      <Stack.Screen name={'CrtBusinesss'} component={CrtBusiness} /> 

      <Stack.Screen name={'Vw2CredSellCovs'} component={Vw2CredSellCov} />      
      <Stack.Screen name={'Vw2CredSellNonCovs'} component={Vw2CredSellNonCov} />  

      <Stack.Screen name={'SignitoryWthdrwFndsss'} component={SignitoryWthdrwFndss} />      
      <Stack.Screen name={'SignitoryDepositss'} component={SignitoryDeposits} />      
      <Stack.Screen name={'Sgn2CnfrmWthdrwlsss'} component={Sgn2CnfrmWthdrwlss} /> 
      
      <Stack.Screen name={'AddMFKubwas'} component={AddMFKubwa} />      
      <Stack.Screen name={'AddMFNdogos'} component={AddMFNdogo} />      
      <Stack.Screen name={'ViewNonLnsSents'} component={ViewNonLnsSent} /> 
      <Stack.Screen name={'ViewNonLnsRecs'} component={ViewNonLnsRec} />

      <Stack.Screen name={'SendNonLonsRev'} component={SendNonLonsRev} />      
      <Stack.Screen name={'SendNonLonsRevSgnIn'} component={SendNonLonsRevSgnIn} />
      <Stack.Screen name={'SendNonLonsRevVw'} component={SendNonLonsRevVw} />
      
      <Stack.Screen name={'ElimChmVwMbrshpMembrs'} component={ElimChmVwMbrshpMembr} />      
      <Stack.Screen name={'ElimChmVwNonCvLns'} component={ElimChmVwNonCvLn} />
      <Stack.Screen name={'ElimChmVwRmtncMembrs'} component={ElimChmVwRmtncMembr} />      
      <Stack.Screen name={'ElimChmVwCovLnss'} component={ElimChmVwCovLns} />      
      <Stack.Screen name={'ElimChmVwCntrMembrs'} component={ElimChmVwCntrMembr} />      
      
      <Stack.Screen name={'ElimCredCvLnees'} component={ElimCredCvLnee} />      
      <Stack.Screen name={'ElimCredCvLnrs'} component={ElimCredCvLnr} />
      <Stack.Screen name={'ElimCredNonCvLnees'} component={ElimCredNonCvLnee} />      
      <Stack.Screen name={'ElimCredNonCvLnrs'} component={ElimCredNonCvLnr} />
      
      <Stack.Screen name={'ElimLPChmSents'} component={ElimLPChmSent} />      
      <Stack.Screen name={'ElimRpyChmNonCvs'} component={ElimRpyChmNonCv} />
      <Stack.Screen name={'ElimRpyChmCvs'} component={ElimRpyChmCv} />      
      <Stack.Screen name={'ElimRpySMNonCovs'} component={ElimRpySMNonCov} />       
      <Stack.Screen name={'ElimRpySMCovs'} component={ElimRpySMCov} />      
      <Stack.Screen name={'ElimRpyCredCovs'} component={ElimRpyCredCov} />      
      <Stack.Screen name={'ElimRpyCredNonCovs'} component={ElimRpyCredNonCov} /> 
      <Stack.Screen name={'ElimLnsCvLnrs'} component={ElimLnsCvLnr} />
      <Stack.Screen name={'ElimLnsCvLnees'} component={ElimLnsCvLnee} />      
      <Stack.Screen name={'ElimLnsNonCvLnrs'} component={ElimLnsNonCvLnr} />       
      <Stack.Screen name={'ElimLnsNonCvLnees'} component={ElimLnsNonCvLnee} />       
      <Stack.Screen name={'ElimLPSMSents'} component={ElimLPSMSent} />
      <Stack.Screen name={'ElimLPSMRecs'} component={ElimLPSMRec} />           
      <Stack.Screen name={'ElimLPCredRecs'} component={ElimLPCredRec} />      
      <Stack.Screen name={'ElimLPCredSents'} component={ElimLPCredSent} />    
      
      <Stack.Screen name={'ElimNonLnsSents'} component={ElimNonLnsSent} />
      <Stack.Screen name={'ElimNonLnsRecs'} component={ElimNonLnsRec} />      
      <Stack.Screen name={'ElimWthdrwlss'} component={ElimWthdrwls} />       
      <Stack.Screen name={'ElimDpstss'} component={ElimDpsts} />  
      
      <Stack.Screen name={'ElimAcs'} component={ElimAc} />
      <Stack.Screen name={'RegPwnBrkrs'} component={RegPwnBrkr} />      
      <Stack.Screen name={'BuyFloatFrmUsrAcs'} component={BuyFloatFrmUsrAc} /> 
      
      <Stack.Screen name={'SgnIn2BLCredSlCovs'} component={SgnIn2BLCredSlCov} />      
      <Stack.Screen name={'SgnIn2BLCredSlNonCovs'} component={SgnIn2BLCredSlNonCov} />
      
      <Stack.Screen name={'SgnIn2BLSMCovs'} component={SgnIn2BLSMCov} />      
      <Stack.Screen name={'SgnIn2BLSMNonCovs'} component={SgnIn2BLSMNonCov} />
      
      <Stack.Screen name={'PwnBrkrRegss'} component={PwnBrkrRegs} />      
      <Stack.Screen name={'ChamaRegss'} component={ChamaRegs} />
      
      <Stack.Screen name={'Vw2BLChmCovs'} component={Vw2BLChmCov} />      
      <Stack.Screen name={'Vw2BLChmNonCovs'} component={Vw2BLChmNonCov} />
      
      <Stack.Screen name={'ChmVwMmbrss'} component={ChmVwMmbrs} />
      
      <Stack.Screen name={'ChmVwMmbr2Removes'} component={ChmVwMmbr2Remove} />
      <Stack.Screen name={'SgnIn2RemoveMmbrs'} component={SgnIn2RemoveMmbr} />
      
      <Stack.Screen name={'ChamaSignIn2VwLnRpymnts'} component={ChamaSignIn2VwLnRpymnt} />
      
      <Stack.Screen name={'ViewNonLnsRecChm'} component={ViewNonLnsRecChm} />
      <Stack.Screen name={'ViewNonLnsRecCredSlrs'} component={ViewNonLnsRecCredSlr} />
      <Stack.Screen name={'ViewNonLnsRecSMs'} component={ViewNonLnsRecSM} />
      <Stack.Screen name={'ViewNonLnsSntChm'} component={ViewNonLnsSntChm} />      
      <Stack.Screen name={'ViewNonLnsSntCredSlrs'} component={ViewNonLnsSntCredSlr} />      
      <Stack.Screen name={'ViewNonLnsSntSMs'} component={ViewNonLnsSntSM} />
      
      <Stack.Screen name={'AdvPy2VwChms'} component={AdvPy2VwChm} />
      <Stack.Screen name={'AdvPy2VwCredSlrs'} component={AdvPy2VwCredSlr} />
      <Stack.Screen name={'AdvPy2VwSMs'} component={AdvPy2VwSM} />
      <Stack.Screen name={'AdjustUsrLimitss'} component={AdjustUsrLimits} />      
      <Stack.Screen name={'UpdtVatComss'} component={UpdtVatComs} />      
      <Stack.Screen name={'UpdateMFKComs'} component={UpdateMFKCom} />
      <Stack.Screen name={'UpdateMFNComs'} component={UpdateMFNCom} />
      
      <Stack.Screen name={'VwCompAbts'} component={VwCompAbt} />
      <Stack.Screen name={'VwCompPolicys'} component={VwCompPolicy} />
      <Stack.Screen name={'VwCompPrivacys'} component={VwCompPrivacy} />
      <Stack.Screen name={'VwCompTCs'} component={VwCompTC} />
      
      <Stack.Screen name={'ViewAdvs'} component={ViewAdv} />  
      
      <Stack.Screen name={'DeactAdms'} component={DeactAdm} />
      <Stack.Screen name={'Vw2RepyCredSlsCovLns'} component={Vw2RepyCredSlsCovLn} />
      <Stack.Screen name={'Vw2RepyCredSlsNonCovLns'} component={Vw2RepyCredSlsNonCovLn} />
      <Stack.Screen name={'Vw2BLCovCredSlsLns'} component={Vw2BLCovCredSlsLn} />
      <Stack.Screen name={'Vw2BLCredSlsNonCovs'} component={Vw2BLCredSlsNonCov} />
      
       <Stack.Screen name={'Vw2RepySMCovLns'} component={Vw2RepySMCovLn} />
      <Stack.Screen name={'Vw2RepySMNonCovLns'} component={Vw2RepySMNonCovLn} />
      <Stack.Screen name={'Vw2BLCovSMLns'} component={Vw2BLCovSMLn} />
      <Stack.Screen name={'Vw2BLSMNonCovs'} component={Vw2BLSMNonCov} />
      
      <Stack.Screen name={'SgnIn2BLCovs'} component={SgnIn2BLCov} />
      <Stack.Screen name={'SgnIn2BLNonCovs'} component={SgnIn2BLNonCov} />
      <Stack.Screen name={'Vw2BLCovs'} component={Vw2BLCov} />
      <Stack.Screen name={'Vw2BLNonCovs'} component={Vw2BLNonCov} />
      
      <Stack.Screen name={'Vw2RpyNonCovs'} component={Vw2RpyNonCov} />
      <Stack.Screen name={'Vw2RpyCovs'} component={Vw2RpyCov} />
      <Stack.Screen name={'VwChmMbrs2NonCovLnss'} component={VwChmMbrs2NonCovLns} />
      <Stack.Screen name={'SgnIn2LnMmbrNonCovs'} component={SgnIn2LnMmbrNonCov} />
      <Stack.Screen name={'SgnIn2LnMmbrs'} component={SgnIn2LnMmbr} />
      <Stack.Screen name={'VwChmMbrs2Ln'} component={VwChmMbrs2Ln} />
      <Stack.Screen name={'MmbrSndChmss'} component={MmbrSndChms} />
      <Stack.Screen name={'SndToChmMbrss'} component={SndToChmMbrs} />
      <Stack.Screen name={'ChamaSndMbrMneys'} component={ChamaSndMbrMneys} />
      <Stack.Screen name={'SndChmMbrMnys'} component={SndChmMbrMny} />
      <Stack.Screen name={'Commissionss'} component={Commissions} />
      <Stack.Screen name={'VwCompDtlss'} component={VwCompDtls} />
       <Stack.Screen name={'Aboutss'} component={Abouts} />
      <Stack.Screen name={'Alertss'} component={Alerts} />
      <Stack.Screen name={'Contactsss'} component={Contactss} />
      <Stack.Screen name={'Maximumss'} component={Maximums} />      
      <Stack.Screen name={'Passwordsss'} component={Passwordss} />
      <Stack.Screen name={'Policyss'} component={Policys} />
      <Stack.Screen name={'Privacyss'} component={Privacys} />
      <Stack.Screen name={'Recommendationsss'} component={Recommendationss} />
      <Stack.Screen name={'TCss'} component={TCs} />
      <Stack.Screen name={'TransactionFeess'} component={TransactionFees} />
      
      <Stack.Screen name={'WelcomePgss'} component={WelcomePgs} />
      <Stack.Screen name={'UpdateAccCodess'} component={UpdateAccCodes} />
      <Stack.Screen name={'MFKVwMFNSgnInss'} component={MFKVwMFNSgnIns} />
      <Stack.Screen name={'MFKVwMFNss'} component={MFKVwMFNs} />      
      <Stack.Screen name={'AdvVwCrdSlsSgnIns'} component={AdvVwCrdSlsSgnIn} />
      <Stack.Screen name={'AdvVwSMSgnIns'} component={AdvVwSMSgnIn} />
      <Stack.Screen name={'AdvWthdrwlSgnIns'} component={AdvWthdrwlSgnIn} />
      <Stack.Screen name={'AdvVwAcSgnIns'} component={AdvVwAcSgnIn} />
      <Stack.Screen name={'AdvVwChmSgnIns'} component={AdvVwChmSgnIn} />
      <Stack.Screen name={'VwAdvAcs'} component={VwAdvAc} />
      <Stack.Screen name={'VwAdvChamaCovLnss'} component={VwAdvChamaCovLns} />      
      <Stack.Screen name={'VwAdvCrdSlrCovLnss'} component={VwAdvCrdSlrCovLns} />
      <Stack.Screen name={'VwAdvSMCovLnss'} component={VwAdvSMCovLns} />
      <Stack.Screen name={'VwAdvWthdrwlss'} component={VwAdvWthdrwls} />
      <Stack.Screen name={'VwMFKAcSgnIns'} component={VwMFKAcSgnIn} />
      <Stack.Screen name={'VwMFKWthdrwlsSgnIns'} component={VwMFKWthdrwlsSgnIn} />
      <Stack.Screen name={'VwMFKAcs'} component={VwMFKAc} />
      <Stack.Screen name={'VwMFKWthdrwlss'} component={VwMFKWthdrwls} />

      <Stack.Screen name={'SearchMFNsssss'} component={SearchMFNs} />
      <Stack.Screen name={'VwMFNFltBuyss'} component={VwMFNFltBuys} />
      <Stack.Screen name={'VwMFNWthdrlss'} component={VwMFNWthdrls} />
      <Stack.Screen name={'VwFltWthdrwlss'} component={VwFltWthdrwls} />
      <Stack.Screen name={'VwUsrWthdrwlss'} component={VwUsrWthdrwls} />
      <Stack.Screen name={'VwUsrDpstss'} component={VwUsrDpsts} />
      <Stack.Screen name={'VwMFNAcss'} component={VwMFNAcs} />      
      <Stack.Screen name={'VwMFNAccountSgnIns'} component={VwMFNAccountSgnIn} />
      <Stack.Screen name={'FltWthdrwlsSgnIns'} component={FltWthdrwlsSgnIn} />
      <Stack.Screen name={'UsrWthdrwlsSgnIns'} component={UsrWthdrwlsSgnIn} />
      <Stack.Screen name={'MFNWithdrawlsSgnIns'} component={MFNWithdrawlsSgnIn} />
      <Stack.Screen name={'UsrDpositSgnIns'} component={UsrDpositSgnIn} />
      <Stack.Screen name={'FloatBghtSgnIns'} component={FloatBghtSgnIn} />
      <Stack.Screen name={'SMDpsitss'} component={SMDpsits} />
      <Stack.Screen name={'SMWthdrwlss'} component={SMWthdrwls} />
      <Stack.Screen name={'CredSlsLneess'} component={CredSlsLnees} />
      <Stack.Screen name={'CredSlsLnerss'} component={CredSlsLners} />
      <Stack.Screen name={'CredByrLneess'} component={CredByrLnees} />
      <Stack.Screen name={'CredByrLnerss'} component={CredByrLners} />
      <Stack.Screen name={'ChamaMmbrRemts'} component={ChamaMmbrRemt} />
      <Stack.Screen name={'ChmMmbrContris'} component={ChmMmbrContri} />
      <Stack.Screen name={'ChmMmbrMmbrss'} component={ChmMmbrMmbrs} />
      <Stack.Screen name={'ChamaRemts'} component={ChamaRemt} />
      <Stack.Screen name={'ChmContris'} component={ChmContri} />
      <Stack.Screen name={'ChmMmbrss'} component={ChmMmbrs} />
      <Stack.Screen name={'ChmSignIn5s'} component={ChmSignIn5} />
      <Stack.Screen name={'ChmSignIn6s'} component={ChmSignIn6} />
      <Stack.Screen name={'ChamaGenInfos'} component={ChamaGenInfo} />
      <Stack.Screen name={'ChamSignIn2s'} component={ChamSignIn2} />
      <Stack.Screen name={'ChamSignIn3s'} component={ChamSignIn3} />
      <Stack.Screen name={'ChamSignIn4s'} component={ChamSignIn4} />
      <Stack.Screen name={'ChmSignInss'} component={ChmSignIns} />
      <Stack.Screen name={'ChmLnsGvnOuts'} component={ChmLnsGvnOutCov} />
      <Stack.Screen name={'ChmLnsGvnOutNonCovs'} component={ChmLnsGvnOutNonCov} />

      <Stack.Screen name={'VwNonLnsSnts'} component={VwNonLnsSnt} />
      <Stack.Screen name={'VwNonLnsRecs'} component={VwNonLnsRec} />
      <Stack.Screen name={'ViewSmAcss'} component={ViewSmAcs} />
      <Stack.Screen name={'ViewSmAcs'} component={ViewSmAc} />
      <Stack.Screen name={'ViewMyNonCovLoaneess'} component={ViewMyNonCovLoanees} />
      <Stack.Screen name={'ViewMyNonCovLoanerss'} component={ViewMyNonCovLoaners} />
      <Stack.Screen name={'ViewMyCovLoanerss'} component={ViewMyLoaners} />
      <Stack.Screen name={'ViewMyCovLoaneess'} component={ViewMyLoanees} />
      <Stack.Screen name={'WthdrwMFNFlts'} component={WthdrwMFNFlt} />
      <Stack.Screen name={'AdvHms'} component={AdvHm} />
      <Stack.Screen name={'WthdrwMFNs'} component={WthdrwMFN} />
      <Stack.Screen name={'UpdtMFNPWs'} component={UpdtMFNPW} />
      <Stack.Screen name={'MFKWthdrws'} component={MFKWthdrw} />
      <Stack.Screen name={'UpdtMFKPWs'} component={UpdtMFKPW} />
      <Stack.Screen name={'BLUsrss'} component={BLUsrs} />
      <Stack.Screen name={'UpdtMFAdvPWs'} component={UpdtMFAdvPW} />
      <Stack.Screen name={'WithdwAdvs'} component={WithdwAdv} />
      <Stack.Screen name={'WithdwAdmns'} component={WithdwAdmn} />

      <Stack.Screen name={'MFNdogoo'} component={KFNdogo} />
      <Stack.Screen name={'MyHomeie'} component={Homeie} />
      <Stack.Screen name={'RegMFKbw'} component={RegisterKFKubwaAcForm} />
      <Stack.Screen name={'CreateSMAc'} component={CreateAcForm} />
      
      
      <Stack.Screen name={'BuyFltFm'} component={BuyFltForm}/>
      <Stack.Screen name={'DpstMney'} component={DpstMny}/>
      <Stack.Screen name={'CrtAdmin'} component={CrtAdmn}/>
      <Stack.Screen name={'SttinsHm'} component={SettnsHm}/>
      <Stack.Screen name={'MFAdminstrator'} component={MFAdm}/>
      <Stack.Screen name={'MFKbwa'} component={MFKbw}/>
      <Stack.Screen name={'MFNdogoss'} component={MFN}/>
      <Stack.Screen name={'MFAdvocateHome'} component={AdvcHm}/>
      <Stack.Screen name={'MFAdvocateReg'} component={AdvReg}/>
      <Stack.Screen name={'DActvteMFN'} component={DActivtMFN}/>
      <Stack.Screen name={'DActvteMFK'} component={DActivtMFK}/>
      <Stack.Screen name={'DActvteMFUsr'} component={DActivtMFUsr}/>
      <Stack.Screen name={'DActvteMFAd'} component={DActivtMFAdv}/>
      <Stack.Screen name={'SMGivCovLon'} component={SMGvCovLon}/>
      <Stack.Screen name={'SMGivNonCovLon'} component={SMASendNonCovLns}/>
      <Stack.Screen name={'SMWthdFm'} component={SMAWthdrwForm}/>
      <Stack.Screen name={'SendNonLnss'} component={SendNonLn}/>
      <Stack.Screen name={'RepayCovLnss'} component={RepayCovLns}/>
      <Stack.Screen name={'RepayNonCovLnss'} component={RepayNonCovLns}/>
     
      <Stack.Screen name={'CovCredSls'} component={CovCredSls}/>
      <Stack.Screen name={'NonCovCredSlss'} component={NonCovCredSls}/>
      <Stack.Screen name={'CredSlsHms'} component={NonCovCredSls}/>
      <Stack.Screen name={'CreateChms'} component={CreateChm}/>
      <Stack.Screen name={'AddChmMembrsss'} component={AddChmMembrss}/>
      <Stack.Screen name={'ChmCovLons'} component={ChmCovLon}/>
      <Stack.Screen name={'ChmNonCovLons'} component={ChmNonCovLon}/>
      <Stack.Screen name={'Contributionssss'} component={Contributionsss}/>
      <Stack.Screen name={'SndMbrsMnys'} component={SndMbrsMny}/>
      <Stack.Screen name={'BLChmMmberCovs'} component={BLChmMmberCov}/>
      <Stack.Screen name={'BLChmMmberNonCovs'} component={BLChmMmberNonCov}/>
    
     
      <Stack.Screen name={'RepyChmCovLns'} component={RepyChmCovLn}/>
      <Stack.Screen name={'RepyChmNonCovLns'} component={RepyChmNonCovLn}/>
      <Stack.Screen name={'BListCredByrCovs'} component={BListCredByrCov}/>
      <Stack.Screen name={'BListCredByrNonCovs'} component={BListCredByrNonCov}/>
      <Stack.Screen name={'RpayCredSlrCovs'} component={RpayCredSlrCov}/>
      <Stack.Screen name={'RpayCredSlrNonCovs'} component={RpayCredSlrNonCov}/>

      <Stack.Screen name={'BListSMLneeCovs'} component={BListSMLneeCov}/>
      <Stack.Screen name={'BListSMLneeNonCovs'} component={BListSMLneeNonCov}/>
      <Stack.Screen name={'RemoveChmMbrs'} component={RemoveChmMbr}/>
      <Stack.Screen name={'DissolveChms'} component={DissolveChm}/>
      <Stack.Screen name={'UpdateChms'} component={UpdateChm}/>
      <Stack.Screen name={'UpdateSMPWs'} component={UpdateSMPW}/>
      <Stack.Screen name={'UpdateMFAdminPWs'} component={UpdateMFAdminPW}/>


    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;