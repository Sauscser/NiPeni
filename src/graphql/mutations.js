/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSMAccount = /* GraphQL */ `
  mutation CreateSMAccount(
    $input: CreateSMAccountInput!
    $condition: ModelSMAccountConditionInput
  ) {
    createSMAccount(input: $input, condition: $condition) {
      nationalid
      name
      phonecontact
      awsemail
      balance
      p2pchmBenefits
      pw
      nationality
      MFKubwaCost
      MFKubwaNetCost
      MFNdogoDue
      MFNdogoNet
      beneficiary
      beneficiaryType
      beneficiaryAmt
      loanAcceptanceCode
      ttlDpstSM
      TtlWthdrwnSM
      TtlActvLonsTmsLnrCov
      TtlActvLonsTmsLneeCov
      TtlActvLonsAmtLnrCov
      TtlActvLonsAmtLneeCov
      TtlBLLonsTmsLnrCov
      TtlBLLonsTmsLneeCov
      TtlBLLonsAmtLnrCov
      TtlBLLonsAmtLneeCov
      TtlClrdLonsTmsLnrCov
      TtlClrdLonsTmsLneeCov
      TtlClrdLonsAmtLnrCov
      TtlClrdLonsAmtLneeCov
      TtlActvLonsTmsLneeChmCov
      TtlActvLonsAmtLneeChmCov
      TtlBLLonsTmsLneeChmCov
      TtlBLLonsAmtLneeChmCov
      TtlClrdLonsTmsLneeChmCov
      TtlClrdLonsAmtLneeChmCov
      TtlActvLonsTmsSllrCov
      TtlActvLonsTmsByrCov
      TtlActvLonsAmtSllrCov
      TtlActvLonsAmtByrCov
      TtlBLLonsTmsSllrCov
      TtlBLLonsTmsByrCov
      TtlBLLonsAmtSllrCov
      TtlBLLonsAmtByrCov
      TtlClrdLonsTmsSllrCov
      TtlClrdLonsTmsByrCov
      TtlClrdLonsAmtSllrCov
      TtlClrdLonsAmtByrCov
      TtlActvLonsTmsLnrNonCov
      TtlActvLonsTmsLneeNonCov
      TtlActvLonsAmtLnrNonCov
      TtlActvLonsAmtLneeNonCov
      TtlBLLonsTmsLnrNonCov
      TtlBLLonsTmsLneeNonCov
      TtlBLLonsAmtLnrNonCov
      TtlBLLonsAmtLneeNonCov
      TtlClrdLonsTmsLnrNonCov
      TtlClrdLonsTmsLneeNonCov
      TtlClrdLonsAmtLnrNonCov
      TtlClrdLonsAmtLneeNonCov
      TtlActvLonsTmsLneeChmNonCov
      TtlActvLonsAmtLneeChmNonCov
      TtlBLLonsTmsLneeChmNonCov
      TtlBLLonsAmtLneeChmNonCov
      TtlClrdLonsTmsLneeChmNonCov
      TtlClrdLonsAmtLneeChmNonCov
      TtlActvLonsTmsSllrNonCov
      TtlActvLonsTmsByrNonCov
      TtlActvLonsAmtSllrNonCov
      TtlActvLonsAmtByrNonCov
      TtlBLLonsTmsSllrNonCov
      TtlBLLonsTmsByrNonCov
      TtlBLLonsAmtSllrNonCov
      TtlBLLonsAmtByrNonCov
      TtlClrdLonsTmsSllrNonCov
      TtlClrdLonsTmsByrNonCov
      TtlClrdLonsAmtSllrNonCov
      TtlClrdLonsAmtByrNonCov
      TtlActvLonsTmsLnrCredSlsP2P
      TtlActvLonsAmtLnrCredSlsP2P
      TtlBLLonsTmsLnrCredSlsP2P
      TtlBLLonsAmtLnrCredSlsP2P
      TtlClrdLonsTmsLnrCredSlsP2P
      TtlClrdLonsAmtLnrCredSlsP2P
      TtlActvLonsTmsLnrCredSlsP2B
      TtlActvLonsAmtLnrCredSlsP2B
      TtlBLLonsTmsLnrCredSlsP2B
      TtlBLLonsAmtLnrCredSlsP2B
      TtlClrdLonsTmsLnrCredSlsP2B
      TtlClrdLonsAmtLnrCredSlsP2B
      TtlActvLonsTmsLneeB2P
      TtlActvLonsAmtLneeB2P
      TtlBLLonsTmsLneeB2P
      TtlBLLonsAmtLneeB2P
      TtlClrdLonsLneeB2P
      TtlClrdLonsAmtLneeB2P
      TtlActvLonsTmsLneeP2P
      TtlActvLonsAmtLneeP2P
      TtlBLLonsTmsLneeP2P
      TtlBLLonsAmtLneeP2P
      TtlClrdLonsLneeP2P
      TtlClrdLonsAmtLneeP2P
      TtlActvLonsTmsLnrP2P
      TtlActvLonsAmtLnrP2P
      TtlBLLonsTmsLnrP2P
      TtlBLLonsAmtLnrP2P
      TtlClrdLonsLnrP2P
      TtlClrdLonsAmtLnrP2P
      ttlNonLonsRecSM
      ttlNonLonsSentSM
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      MaxTymsBL
      MaxTymsIHvBL
      MaxAcBal
      TymsIHvGivnLn
      TymsMyLnClrd
      DefaultPenaltySM
      loanStatus
      acStatus
      deActvtnReason
      blStatus
      loanLimit
      nonLonLimit
      withdrawalLimit
      depositLimit
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSMAccount = /* GraphQL */ `
  mutation UpdateSMAccount(
    $input: UpdateSMAccountInput!
    $condition: ModelSMAccountConditionInput
  ) {
    updateSMAccount(input: $input, condition: $condition) {
      nationalid
      name
      phonecontact
      awsemail
      balance
      p2pchmBenefits
      pw
      nationality
      MFKubwaCost
      MFKubwaNetCost
      MFNdogoDue
      MFNdogoNet
      beneficiary
      beneficiaryType
      beneficiaryAmt
      loanAcceptanceCode
      ttlDpstSM
      TtlWthdrwnSM
      TtlActvLonsTmsLnrCov
      TtlActvLonsTmsLneeCov
      TtlActvLonsAmtLnrCov
      TtlActvLonsAmtLneeCov
      TtlBLLonsTmsLnrCov
      TtlBLLonsTmsLneeCov
      TtlBLLonsAmtLnrCov
      TtlBLLonsAmtLneeCov
      TtlClrdLonsTmsLnrCov
      TtlClrdLonsTmsLneeCov
      TtlClrdLonsAmtLnrCov
      TtlClrdLonsAmtLneeCov
      TtlActvLonsTmsLneeChmCov
      TtlActvLonsAmtLneeChmCov
      TtlBLLonsTmsLneeChmCov
      TtlBLLonsAmtLneeChmCov
      TtlClrdLonsTmsLneeChmCov
      TtlClrdLonsAmtLneeChmCov
      TtlActvLonsTmsSllrCov
      TtlActvLonsTmsByrCov
      TtlActvLonsAmtSllrCov
      TtlActvLonsAmtByrCov
      TtlBLLonsTmsSllrCov
      TtlBLLonsTmsByrCov
      TtlBLLonsAmtSllrCov
      TtlBLLonsAmtByrCov
      TtlClrdLonsTmsSllrCov
      TtlClrdLonsTmsByrCov
      TtlClrdLonsAmtSllrCov
      TtlClrdLonsAmtByrCov
      TtlActvLonsTmsLnrNonCov
      TtlActvLonsTmsLneeNonCov
      TtlActvLonsAmtLnrNonCov
      TtlActvLonsAmtLneeNonCov
      TtlBLLonsTmsLnrNonCov
      TtlBLLonsTmsLneeNonCov
      TtlBLLonsAmtLnrNonCov
      TtlBLLonsAmtLneeNonCov
      TtlClrdLonsTmsLnrNonCov
      TtlClrdLonsTmsLneeNonCov
      TtlClrdLonsAmtLnrNonCov
      TtlClrdLonsAmtLneeNonCov
      TtlActvLonsTmsLneeChmNonCov
      TtlActvLonsAmtLneeChmNonCov
      TtlBLLonsTmsLneeChmNonCov
      TtlBLLonsAmtLneeChmNonCov
      TtlClrdLonsTmsLneeChmNonCov
      TtlClrdLonsAmtLneeChmNonCov
      TtlActvLonsTmsSllrNonCov
      TtlActvLonsTmsByrNonCov
      TtlActvLonsAmtSllrNonCov
      TtlActvLonsAmtByrNonCov
      TtlBLLonsTmsSllrNonCov
      TtlBLLonsTmsByrNonCov
      TtlBLLonsAmtSllrNonCov
      TtlBLLonsAmtByrNonCov
      TtlClrdLonsTmsSllrNonCov
      TtlClrdLonsTmsByrNonCov
      TtlClrdLonsAmtSllrNonCov
      TtlClrdLonsAmtByrNonCov
      TtlActvLonsTmsLnrCredSlsP2P
      TtlActvLonsAmtLnrCredSlsP2P
      TtlBLLonsTmsLnrCredSlsP2P
      TtlBLLonsAmtLnrCredSlsP2P
      TtlClrdLonsTmsLnrCredSlsP2P
      TtlClrdLonsAmtLnrCredSlsP2P
      TtlActvLonsTmsLnrCredSlsP2B
      TtlActvLonsAmtLnrCredSlsP2B
      TtlBLLonsTmsLnrCredSlsP2B
      TtlBLLonsAmtLnrCredSlsP2B
      TtlClrdLonsTmsLnrCredSlsP2B
      TtlClrdLonsAmtLnrCredSlsP2B
      TtlActvLonsTmsLneeB2P
      TtlActvLonsAmtLneeB2P
      TtlBLLonsTmsLneeB2P
      TtlBLLonsAmtLneeB2P
      TtlClrdLonsLneeB2P
      TtlClrdLonsAmtLneeB2P
      TtlActvLonsTmsLneeP2P
      TtlActvLonsAmtLneeP2P
      TtlBLLonsTmsLneeP2P
      TtlBLLonsAmtLneeP2P
      TtlClrdLonsLneeP2P
      TtlClrdLonsAmtLneeP2P
      TtlActvLonsTmsLnrP2P
      TtlActvLonsAmtLnrP2P
      TtlBLLonsTmsLnrP2P
      TtlBLLonsAmtLnrP2P
      TtlClrdLonsLnrP2P
      TtlClrdLonsAmtLnrP2P
      ttlNonLonsRecSM
      ttlNonLonsSentSM
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      MaxTymsBL
      MaxTymsIHvBL
      MaxAcBal
      TymsIHvGivnLn
      TymsMyLnClrd
      DefaultPenaltySM
      loanStatus
      acStatus
      deActvtnReason
      blStatus
      loanLimit
      nonLonLimit
      withdrawalLimit
      depositLimit
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSMAccount = /* GraphQL */ `
  mutation DeleteSMAccount(
    $input: DeleteSMAccountInput!
    $condition: ModelSMAccountConditionInput
  ) {
    deleteSMAccount(input: $input, condition: $condition) {
      nationalid
      name
      phonecontact
      awsemail
      balance
      p2pchmBenefits
      pw
      nationality
      MFKubwaCost
      MFKubwaNetCost
      MFNdogoDue
      MFNdogoNet
      beneficiary
      beneficiaryType
      beneficiaryAmt
      loanAcceptanceCode
      ttlDpstSM
      TtlWthdrwnSM
      TtlActvLonsTmsLnrCov
      TtlActvLonsTmsLneeCov
      TtlActvLonsAmtLnrCov
      TtlActvLonsAmtLneeCov
      TtlBLLonsTmsLnrCov
      TtlBLLonsTmsLneeCov
      TtlBLLonsAmtLnrCov
      TtlBLLonsAmtLneeCov
      TtlClrdLonsTmsLnrCov
      TtlClrdLonsTmsLneeCov
      TtlClrdLonsAmtLnrCov
      TtlClrdLonsAmtLneeCov
      TtlActvLonsTmsLneeChmCov
      TtlActvLonsAmtLneeChmCov
      TtlBLLonsTmsLneeChmCov
      TtlBLLonsAmtLneeChmCov
      TtlClrdLonsTmsLneeChmCov
      TtlClrdLonsAmtLneeChmCov
      TtlActvLonsTmsSllrCov
      TtlActvLonsTmsByrCov
      TtlActvLonsAmtSllrCov
      TtlActvLonsAmtByrCov
      TtlBLLonsTmsSllrCov
      TtlBLLonsTmsByrCov
      TtlBLLonsAmtSllrCov
      TtlBLLonsAmtByrCov
      TtlClrdLonsTmsSllrCov
      TtlClrdLonsTmsByrCov
      TtlClrdLonsAmtSllrCov
      TtlClrdLonsAmtByrCov
      TtlActvLonsTmsLnrNonCov
      TtlActvLonsTmsLneeNonCov
      TtlActvLonsAmtLnrNonCov
      TtlActvLonsAmtLneeNonCov
      TtlBLLonsTmsLnrNonCov
      TtlBLLonsTmsLneeNonCov
      TtlBLLonsAmtLnrNonCov
      TtlBLLonsAmtLneeNonCov
      TtlClrdLonsTmsLnrNonCov
      TtlClrdLonsTmsLneeNonCov
      TtlClrdLonsAmtLnrNonCov
      TtlClrdLonsAmtLneeNonCov
      TtlActvLonsTmsLneeChmNonCov
      TtlActvLonsAmtLneeChmNonCov
      TtlBLLonsTmsLneeChmNonCov
      TtlBLLonsAmtLneeChmNonCov
      TtlClrdLonsTmsLneeChmNonCov
      TtlClrdLonsAmtLneeChmNonCov
      TtlActvLonsTmsSllrNonCov
      TtlActvLonsTmsByrNonCov
      TtlActvLonsAmtSllrNonCov
      TtlActvLonsAmtByrNonCov
      TtlBLLonsTmsSllrNonCov
      TtlBLLonsTmsByrNonCov
      TtlBLLonsAmtSllrNonCov
      TtlBLLonsAmtByrNonCov
      TtlClrdLonsTmsSllrNonCov
      TtlClrdLonsTmsByrNonCov
      TtlClrdLonsAmtSllrNonCov
      TtlClrdLonsAmtByrNonCov
      TtlActvLonsTmsLnrCredSlsP2P
      TtlActvLonsAmtLnrCredSlsP2P
      TtlBLLonsTmsLnrCredSlsP2P
      TtlBLLonsAmtLnrCredSlsP2P
      TtlClrdLonsTmsLnrCredSlsP2P
      TtlClrdLonsAmtLnrCredSlsP2P
      TtlActvLonsTmsLnrCredSlsP2B
      TtlActvLonsAmtLnrCredSlsP2B
      TtlBLLonsTmsLnrCredSlsP2B
      TtlBLLonsAmtLnrCredSlsP2B
      TtlClrdLonsTmsLnrCredSlsP2B
      TtlClrdLonsAmtLnrCredSlsP2B
      TtlActvLonsTmsLneeB2P
      TtlActvLonsAmtLneeB2P
      TtlBLLonsTmsLneeB2P
      TtlBLLonsAmtLneeB2P
      TtlClrdLonsLneeB2P
      TtlClrdLonsAmtLneeB2P
      TtlActvLonsTmsLneeP2P
      TtlActvLonsAmtLneeP2P
      TtlBLLonsTmsLneeP2P
      TtlBLLonsAmtLneeP2P
      TtlClrdLonsLneeP2P
      TtlClrdLonsAmtLneeP2P
      TtlActvLonsTmsLnrP2P
      TtlActvLonsAmtLnrP2P
      TtlBLLonsTmsLnrP2P
      TtlBLLonsAmtLnrP2P
      TtlClrdLonsLnrP2P
      TtlClrdLonsAmtLnrP2P
      ttlNonLonsRecSM
      ttlNonLonsSentSM
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      MaxTymsBL
      MaxTymsIHvBL
      MaxAcBal
      TymsIHvGivnLn
      TymsMyLnClrd
      DefaultPenaltySM
      loanStatus
      acStatus
      deActvtnReason
      blStatus
      loanLimit
      nonLonLimit
      withdrawalLimit
      depositLimit
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSMLoansCovered = /* GraphQL */ `
  mutation CreateSMLoansCovered(
    $input: CreateSMLoansCoveredInput!
    $condition: ModelSMLoansCoveredConditionInput
  ) {
    createSMLoansCovered(input: $input, condition: $condition) {
      loanID
      loaneeid
      loaneePhn
      loanerLoanee
      loanerLoaneeAdv
      loanerPhn
      advregnu
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      dfltUpdate
      dfltDeadLn
      amountrepaid
      lonBala
      interest
      lnType
      loaneename
      loanername
      loanerEmail
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      timeExpBack
      crtnDate
      loaneeEmail
      timeExpBack2
      description
      status
      owner
      createdAt
      blOfficer
      advEmail
      installmentAmount
      paymentFrequency
      lnAmount
      lnAmntNow
      updatedAt
      __typename
    }
  }
`;
export const updateSMLoansCovered = /* GraphQL */ `
  mutation UpdateSMLoansCovered(
    $input: UpdateSMLoansCoveredInput!
    $condition: ModelSMLoansCoveredConditionInput
  ) {
    updateSMLoansCovered(input: $input, condition: $condition) {
      loanID
      loaneeid
      loaneePhn
      loanerLoanee
      loanerLoaneeAdv
      loanerPhn
      advregnu
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      dfltUpdate
      dfltDeadLn
      amountrepaid
      lonBala
      interest
      lnType
      loaneename
      loanername
      loanerEmail
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      timeExpBack
      crtnDate
      loaneeEmail
      timeExpBack2
      description
      status
      owner
      createdAt
      blOfficer
      advEmail
      installmentAmount
      paymentFrequency
      lnAmount
      lnAmntNow
      updatedAt
      __typename
    }
  }
`;
export const deleteSMLoansCovered = /* GraphQL */ `
  mutation DeleteSMLoansCovered(
    $input: DeleteSMLoansCoveredInput!
    $condition: ModelSMLoansCoveredConditionInput
  ) {
    deleteSMLoansCovered(input: $input, condition: $condition) {
      loanID
      loaneeid
      loaneePhn
      loanerLoanee
      loanerLoaneeAdv
      loanerPhn
      advregnu
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      dfltUpdate
      dfltDeadLn
      amountrepaid
      lonBala
      interest
      lnType
      loaneename
      loanername
      loanerEmail
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      timeExpBack
      crtnDate
      loaneeEmail
      timeExpBack2
      description
      status
      owner
      createdAt
      blOfficer
      advEmail
      installmentAmount
      paymentFrequency
      lnAmount
      lnAmntNow
      updatedAt
      __typename
    }
  }
`;
export const createCovCreditSeller = /* GraphQL */ `
  mutation CreateCovCreditSeller(
    $input: CreateCovCreditSellerInput!
    $condition: ModelCovCreditSellerConditionInput
  ) {
    createCovCreditSeller(input: $input, condition: $condition) {
      loanID
      itemName
      interest
      loanerLoanee
      loanerLoaneeAdv
      buyerContact
      sellerContact
      buyerID
      advEmail
      buyerName
      SellerName
      sellerID
      amountSold
      dfltUpdate
      lnType
      dfltDeadLn
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      repaymentPeriod
      giverStatus
      timeExpBack
      timeExpBack2
      lonBala
      crtnDate
      description
      status
      advregnu
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      owner
      createdAt
      blOfficer
      installmentAmount
      paymentFrequency
      lnAmount
      lnAmntNow
      updatedAt
      __typename
    }
  }
`;
export const updateCovCreditSeller = /* GraphQL */ `
  mutation UpdateCovCreditSeller(
    $input: UpdateCovCreditSellerInput!
    $condition: ModelCovCreditSellerConditionInput
  ) {
    updateCovCreditSeller(input: $input, condition: $condition) {
      loanID
      itemName
      interest
      loanerLoanee
      loanerLoaneeAdv
      buyerContact
      sellerContact
      buyerID
      advEmail
      buyerName
      SellerName
      sellerID
      amountSold
      dfltUpdate
      lnType
      dfltDeadLn
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      repaymentPeriod
      giverStatus
      timeExpBack
      timeExpBack2
      lonBala
      crtnDate
      description
      status
      advregnu
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      owner
      createdAt
      blOfficer
      installmentAmount
      paymentFrequency
      lnAmount
      lnAmntNow
      updatedAt
      __typename
    }
  }
`;
export const deleteCovCreditSeller = /* GraphQL */ `
  mutation DeleteCovCreditSeller(
    $input: DeleteCovCreditSellerInput!
    $condition: ModelCovCreditSellerConditionInput
  ) {
    deleteCovCreditSeller(input: $input, condition: $condition) {
      loanID
      itemName
      interest
      loanerLoanee
      loanerLoaneeAdv
      buyerContact
      sellerContact
      buyerID
      advEmail
      buyerName
      SellerName
      sellerID
      amountSold
      dfltUpdate
      lnType
      dfltDeadLn
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      repaymentPeriod
      giverStatus
      timeExpBack
      timeExpBack2
      lonBala
      crtnDate
      description
      status
      advregnu
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      owner
      createdAt
      blOfficer
      installmentAmount
      paymentFrequency
      lnAmount
      lnAmntNow
      updatedAt
      __typename
    }
  }
`;
export const createCvrdGroupLoans = /* GraphQL */ `
  mutation CreateCvrdGroupLoans(
    $input: CreateCvrdGroupLoansInput!
    $condition: ModelCvrdGroupLoansConditionInput
  ) {
    createCvrdGroupLoans(input: $input, condition: $condition) {
      loanID
      grpContact
      loaneePhn
      repaymentPeriod
      loanerLoanee
      loanerLoaneeAdv
      amountGiven
      interest
      advEmail
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      description
      dfltUpdate
      dfltDeadLn
      lonBala
      lnType
      memberId
      advRegNu
      loaneeName
      LoanerName
      timeExpBack
      timeExpBack2
      crtnDate
      status
      owner
      DefaultPenaltyChm
      DefaultPenaltyChm2
      createdAt
      blOfficer
      installmentAmount
      paymentFrequency
      lnAmount
      lnAmntNow
      updatedAt
      __typename
    }
  }
`;
export const updateCvrdGroupLoans = /* GraphQL */ `
  mutation UpdateCvrdGroupLoans(
    $input: UpdateCvrdGroupLoansInput!
    $condition: ModelCvrdGroupLoansConditionInput
  ) {
    updateCvrdGroupLoans(input: $input, condition: $condition) {
      loanID
      grpContact
      loaneePhn
      repaymentPeriod
      loanerLoanee
      loanerLoaneeAdv
      amountGiven
      interest
      advEmail
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      description
      dfltUpdate
      dfltDeadLn
      lonBala
      lnType
      memberId
      advRegNu
      loaneeName
      LoanerName
      timeExpBack
      timeExpBack2
      crtnDate
      status
      owner
      DefaultPenaltyChm
      DefaultPenaltyChm2
      createdAt
      blOfficer
      installmentAmount
      paymentFrequency
      lnAmount
      lnAmntNow
      updatedAt
      __typename
    }
  }
`;
export const deleteCvrdGroupLoans = /* GraphQL */ `
  mutation DeleteCvrdGroupLoans(
    $input: DeleteCvrdGroupLoansInput!
    $condition: ModelCvrdGroupLoansConditionInput
  ) {
    deleteCvrdGroupLoans(input: $input, condition: $condition) {
      loanID
      grpContact
      loaneePhn
      repaymentPeriod
      loanerLoanee
      loanerLoaneeAdv
      amountGiven
      interest
      advEmail
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      description
      dfltUpdate
      dfltDeadLn
      lonBala
      lnType
      memberId
      advRegNu
      loaneeName
      LoanerName
      timeExpBack
      timeExpBack2
      crtnDate
      status
      owner
      DefaultPenaltyChm
      DefaultPenaltyChm2
      createdAt
      blOfficer
      installmentAmount
      paymentFrequency
      lnAmount
      lnAmntNow
      updatedAt
      __typename
    }
  }
`;
export const createNonLoans = /* GraphQL */ `
  mutation CreateNonLoans(
    $input: CreateNonLoansInput!
    $condition: ModelNonLoansConditionInput
  ) {
    createNonLoans(input: $input, condition: $condition) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNonLoans = /* GraphQL */ `
  mutation UpdateNonLoans(
    $input: UpdateNonLoansInput!
    $condition: ModelNonLoansConditionInput
  ) {
    updateNonLoans(input: $input, condition: $condition) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNonLoans = /* GraphQL */ `
  mutation DeleteNonLoans(
    $input: DeleteNonLoansInput!
    $condition: ModelNonLoansConditionInput
  ) {
    deleteNonLoans(input: $input, condition: $condition) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBizSlsReq = /* GraphQL */ `
  mutation CreateBizSlsReq(
    $input: CreateBizSlsReqInput!
    $condition: ModelBizSlsReqConditionInput
  ) {
    createBizSlsReq(input: $input, condition: $condition) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      lnIntRate
      rpaymentPeriod
      installmentLength
      attendingAdmin
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBizSlsReq = /* GraphQL */ `
  mutation UpdateBizSlsReq(
    $input: UpdateBizSlsReqInput!
    $condition: ModelBizSlsReqConditionInput
  ) {
    updateBizSlsReq(input: $input, condition: $condition) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      lnIntRate
      rpaymentPeriod
      installmentLength
      attendingAdmin
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBizSlsReq = /* GraphQL */ `
  mutation DeleteBizSlsReq(
    $input: DeleteBizSlsReqInput!
    $condition: ModelBizSlsReqConditionInput
  ) {
    deleteBizSlsReq(input: $input, condition: $condition) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      lnIntRate
      rpaymentPeriod
      installmentLength
      attendingAdmin
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBizSls = /* GraphQL */ `
  mutation CreateBizSls(
    $input: CreateBizSlsInput!
    $condition: ModelBizSlsConditionInput
  ) {
    createBizSls(input: $input, condition: $condition) {
      saleId
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      lnIntRate
      rpaymentPeriod
      installmentLength
      attendingAdmin
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBizSls = /* GraphQL */ `
  mutation UpdateBizSls(
    $input: UpdateBizSlsInput!
    $condition: ModelBizSlsConditionInput
  ) {
    updateBizSls(input: $input, condition: $condition) {
      saleId
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      lnIntRate
      rpaymentPeriod
      installmentLength
      attendingAdmin
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBizSls = /* GraphQL */ `
  mutation DeleteBizSls(
    $input: DeleteBizSlsInput!
    $condition: ModelBizSlsConditionInput
  ) {
    deleteBizSls(input: $input, condition: $condition) {
      saleId
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      lnIntRate
      rpaymentPeriod
      installmentLength
      attendingAdmin
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLoanRepayments = /* GraphQL */ `
  mutation CreateLoanRepayments(
    $input: CreateLoanRepaymentsInput!
    $condition: ModelLoanRepaymentsConditionInput
  ) {
    createLoanRepayments(input: $input, condition: $condition) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      loanId1
      loanId2
      loanId3
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateLoanRepayments = /* GraphQL */ `
  mutation UpdateLoanRepayments(
    $input: UpdateLoanRepaymentsInput!
    $condition: ModelLoanRepaymentsConditionInput
  ) {
    updateLoanRepayments(input: $input, condition: $condition) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      loanId1
      loanId2
      loanId3
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteLoanRepayments = /* GraphQL */ `
  mutation DeleteLoanRepayments(
    $input: DeleteLoanRepaymentsInput!
    $condition: ModelLoanRepaymentsConditionInput
  ) {
    deleteLoanRepayments(input: $input, condition: $condition) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      loanId1
      loanId2
      loanId3
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSokoAd = /* GraphQL */ `
  mutation CreateSokoAd(
    $input: CreateSokoAdInput!
    $condition: ModelSokoAdConditionInput
  ) {
    createSokoAd(input: $input, condition: $condition) {
      id
      sokokntct
      sokoname
      sokoprice
      sokotown
      sokolnprcntg
      sokolpymntperiod
      sokodesc
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSokoAd = /* GraphQL */ `
  mutation UpdateSokoAd(
    $input: UpdateSokoAdInput!
    $condition: ModelSokoAdConditionInput
  ) {
    updateSokoAd(input: $input, condition: $condition) {
      id
      sokokntct
      sokoname
      sokoprice
      sokotown
      sokolnprcntg
      sokolpymntperiod
      sokodesc
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSokoAd = /* GraphQL */ `
  mutation DeleteSokoAd(
    $input: DeleteSokoAdInput!
    $condition: ModelSokoAdConditionInput
  ) {
    deleteSokoAd(input: $input, condition: $condition) {
      id
      sokokntct
      sokoname
      sokoprice
      sokotown
      sokolnprcntg
      sokolpymntperiod
      sokodesc
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRafikiLnAd = /* GraphQL */ `
  mutation CreateRafikiLnAd(
    $input: CreateRafikiLnAdInput!
    $condition: ModelRafikiLnAdConditionInput
  ) {
    createRafikiLnAd(input: $input, condition: $condition) {
      id
      rafikiName
      rafikicntct
      rafikiEmail
      AdvEmail
      advLicNo
      rafikiamnt
      defaultPenalty
      rafikidesc
      rafikiprcntg
      rafikirpymntperiod
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRafikiLnAd = /* GraphQL */ `
  mutation UpdateRafikiLnAd(
    $input: UpdateRafikiLnAdInput!
    $condition: ModelRafikiLnAdConditionInput
  ) {
    updateRafikiLnAd(input: $input, condition: $condition) {
      id
      rafikiName
      rafikicntct
      rafikiEmail
      AdvEmail
      advLicNo
      rafikiamnt
      defaultPenalty
      rafikidesc
      rafikiprcntg
      rafikirpymntperiod
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRafikiLnAd = /* GraphQL */ `
  mutation DeleteRafikiLnAd(
    $input: DeleteRafikiLnAdInput!
    $condition: ModelRafikiLnAdConditionInput
  ) {
    deleteRafikiLnAd(input: $input, condition: $condition) {
      id
      rafikiName
      rafikicntct
      rafikiEmail
      AdvEmail
      advLicNo
      rafikiamnt
      defaultPenalty
      rafikidesc
      rafikiprcntg
      rafikirpymntperiod
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAgent = /* GraphQL */ `
  mutation CreateAgent(
    $input: CreateAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    createAgent(input: $input, condition: $condition) {
      phonecontact
      sagentregno
      nationalid
      name
      ttlEarnings
      pw
      email
      TtlFltIn
      TtlFltOut
      floatBal
      latitude
      longitude
      agentEarningBal
      status
      bankName
      bkAcNo
      owner
      town
      MFNWithdrwlFee
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAgent = /* GraphQL */ `
  mutation UpdateAgent(
    $input: UpdateAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    updateAgent(input: $input, condition: $condition) {
      phonecontact
      sagentregno
      nationalid
      name
      ttlEarnings
      pw
      email
      TtlFltIn
      TtlFltOut
      floatBal
      latitude
      longitude
      agentEarningBal
      status
      bankName
      bkAcNo
      owner
      town
      MFNWithdrwlFee
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAgent = /* GraphQL */ `
  mutation DeleteAgent(
    $input: DeleteAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    deleteAgent(input: $input, condition: $condition) {
      phonecontact
      sagentregno
      nationalid
      name
      ttlEarnings
      pw
      email
      TtlFltIn
      TtlFltOut
      floatBal
      latitude
      longitude
      agentEarningBal
      status
      bankName
      bkAcNo
      owner
      town
      MFNWithdrwlFee
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createFloatPurchase = /* GraphQL */ `
  mutation CreateFloatPurchase(
    $input: CreateFloatPurchaseInput!
    $condition: ModelFloatPurchaseConditionInput
  ) {
    createFloatPurchase(input: $input, condition: $condition) {
      agentphone
      amount
      transactId
      bankAdminID
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateFloatPurchase = /* GraphQL */ `
  mutation UpdateFloatPurchase(
    $input: UpdateFloatPurchaseInput!
    $condition: ModelFloatPurchaseConditionInput
  ) {
    updateFloatPurchase(input: $input, condition: $condition) {
      agentphone
      amount
      transactId
      bankAdminID
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteFloatPurchase = /* GraphQL */ `
  mutation DeleteFloatPurchase(
    $input: DeleteFloatPurchaseInput!
    $condition: ModelFloatPurchaseConditionInput
  ) {
    deleteFloatPurchase(input: $input, condition: $condition) {
      agentphone
      amount
      transactId
      bankAdminID
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createFloatAdd = /* GraphQL */ `
  mutation CreateFloatAdd(
    $input: CreateFloatAddInput!
    $condition: ModelFloatAddConditionInput
  ) {
    createFloatAdd(input: $input, condition: $condition) {
      id
      withdrawerid
      amount
      agentPhonecontact
      agentName
      userName
      saName
      saPhone
      sagentId
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateFloatAdd = /* GraphQL */ `
  mutation UpdateFloatAdd(
    $input: UpdateFloatAddInput!
    $condition: ModelFloatAddConditionInput
  ) {
    updateFloatAdd(input: $input, condition: $condition) {
      id
      withdrawerid
      amount
      agentPhonecontact
      agentName
      userName
      saName
      saPhone
      sagentId
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteFloatAdd = /* GraphQL */ `
  mutation DeleteFloatAdd(
    $input: DeleteFloatAddInput!
    $condition: ModelFloatAddConditionInput
  ) {
    deleteFloatAdd(input: $input, condition: $condition) {
      id
      withdrawerid
      amount
      agentPhonecontact
      agentName
      userName
      saName
      saPhone
      sagentId
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createFloatReduction = /* GraphQL */ `
  mutation CreateFloatReduction(
    $input: CreateFloatReductionInput!
    $condition: ModelFloatReductionConditionInput
  ) {
    createFloatReduction(input: $input, condition: $condition) {
      id
      amount
      depositerid
      agContact
      agentName
      userName
      status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateFloatReduction = /* GraphQL */ `
  mutation UpdateFloatReduction(
    $input: UpdateFloatReductionInput!
    $condition: ModelFloatReductionConditionInput
  ) {
    updateFloatReduction(input: $input, condition: $condition) {
      id
      amount
      depositerid
      agContact
      agentName
      userName
      status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteFloatReduction = /* GraphQL */ `
  mutation DeleteFloatReduction(
    $input: DeleteFloatReductionInput!
    $condition: ModelFloatReductionConditionInput
  ) {
    deleteFloatReduction(input: $input, condition: $condition) {
      id
      amount
      depositerid
      agContact
      agentName
      userName
      status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createAgentWithdrawals = /* GraphQL */ `
  mutation CreateAgentWithdrawals(
    $input: CreateAgentWithdrawalsInput!
    $condition: ModelAgentWithdrawalsConditionInput
  ) {
    createAgentWithdrawals(input: $input, condition: $condition) {
      id
      agentPhone
      bankAdminId
      bankName
      bkAcNo
      Amount
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAgentWithdrawals = /* GraphQL */ `
  mutation UpdateAgentWithdrawals(
    $input: UpdateAgentWithdrawalsInput!
    $condition: ModelAgentWithdrawalsConditionInput
  ) {
    updateAgentWithdrawals(input: $input, condition: $condition) {
      id
      agentPhone
      bankAdminId
      bankName
      bkAcNo
      Amount
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAgentWithdrawals = /* GraphQL */ `
  mutation DeleteAgentWithdrawals(
    $input: DeleteAgentWithdrawalsInput!
    $condition: ModelAgentWithdrawalsConditionInput
  ) {
    deleteAgentWithdrawals(input: $input, condition: $condition) {
      id
      agentPhone
      bankAdminId
      bankName
      bkAcNo
      Amount
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSAgent = /* GraphQL */ `
  mutation CreateSAgent(
    $input: CreateSAgentInput!
    $condition: ModelSAgentConditionInput
  ) {
    createSAgent(input: $input, condition: $condition) {
      saPhoneContact
      saNationalid
      name
      acChamp
      pw
      TtlEarnings
      actvMFNdog
      cost
      costBal
      mfnTtl
      offerStatus
      InctvMFNdog
      email
      saBalance
      bankName
      bkAcNo
      status
      owner
      MFKWithdrwlFee
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSAgent = /* GraphQL */ `
  mutation UpdateSAgent(
    $input: UpdateSAgentInput!
    $condition: ModelSAgentConditionInput
  ) {
    updateSAgent(input: $input, condition: $condition) {
      saPhoneContact
      saNationalid
      name
      acChamp
      pw
      TtlEarnings
      actvMFNdog
      cost
      costBal
      mfnTtl
      offerStatus
      InctvMFNdog
      email
      saBalance
      bankName
      bkAcNo
      status
      owner
      MFKWithdrwlFee
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSAgent = /* GraphQL */ `
  mutation DeleteSAgent(
    $input: DeleteSAgentInput!
    $condition: ModelSAgentConditionInput
  ) {
    deleteSAgent(input: $input, condition: $condition) {
      saPhoneContact
      saNationalid
      name
      acChamp
      pw
      TtlEarnings
      actvMFNdog
      cost
      costBal
      mfnTtl
      offerStatus
      InctvMFNdog
      email
      saBalance
      bankName
      bkAcNo
      status
      owner
      MFKWithdrwlFee
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSAgentWithdrawals = /* GraphQL */ `
  mutation CreateSAgentWithdrawals(
    $input: CreateSAgentWithdrawalsInput!
    $condition: ModelSAgentWithdrawalsConditionInput
  ) {
    createSAgentWithdrawals(input: $input, condition: $condition) {
      id
      saId
      amount
      bankAdmnId
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSAgentWithdrawals = /* GraphQL */ `
  mutation UpdateSAgentWithdrawals(
    $input: UpdateSAgentWithdrawalsInput!
    $condition: ModelSAgentWithdrawalsConditionInput
  ) {
    updateSAgentWithdrawals(input: $input, condition: $condition) {
      id
      saId
      amount
      bankAdmnId
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSAgentWithdrawals = /* GraphQL */ `
  mutation DeleteSAgentWithdrawals(
    $input: DeleteSAgentWithdrawalsInput!
    $condition: ModelSAgentWithdrawalsConditionInput
  ) {
    deleteSAgentWithdrawals(input: $input, condition: $condition) {
      id
      saId
      amount
      bankAdmnId
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPersonel = /* GraphQL */ `
  mutation CreatePersonel(
    $input: CreatePersonelInput!
    $condition: ModelPersonelConditionInput
  ) {
    createPersonel(input: $input, condition: $condition) {
      phoneKontact
      BusinessRegNo
      nationalid
      BiznaName
      name
      ownrsss
      email
      workerId
      workId
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updatePersonel = /* GraphQL */ `
  mutation UpdatePersonel(
    $input: UpdatePersonelInput!
    $condition: ModelPersonelConditionInput
  ) {
    updatePersonel(input: $input, condition: $condition) {
      phoneKontact
      BusinessRegNo
      nationalid
      BiznaName
      name
      ownrsss
      email
      workerId
      workId
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deletePersonel = /* GraphQL */ `
  mutation DeletePersonel(
    $input: DeletePersonelInput!
    $condition: ModelPersonelConditionInput
  ) {
    deletePersonel(input: $input, condition: $condition) {
      phoneKontact
      BusinessRegNo
      nationalid
      BiznaName
      name
      ownrsss
      email
      workerId
      workId
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createBizna = /* GraphQL */ `
  mutation CreateBizna(
    $input: CreateBiznaInput!
    $condition: ModelBiznaConditionInput
  ) {
    createBizna(input: $input, condition: $condition) {
      BusKntct
      busName
      pw
      TtlEarnings
      earningsBal
      bizBeneficiary
      beneficiaryType
      benefitsAmounts
      netEarnings
      owner2email
      email
      licenseNo
      bizType
      status
      owner
      description
      createdAt
      noBL
      TtlActvLonsTmsLnrCredSlsB2B
      TtlActvLonsAmtLnrCredSlsB2B
      TtlBLLonsTmsLnrCredSlsB2B
      TtlBLLonsAmtLnrCredSlsB2B
      TtlClrdLonsTmsLnrCredSlsB2B
      TtlClrdLonsAmtLnrCredSlsB2B
      TtlActvLonsTmsLneeCredSlsB2B
      TtlActvLonsAmtLneeCredSlsB2B
      TtlBLLonsTmsLneeCredSlsB2B
      TtlBLLonsAmtLneeCredSlsB2B
      TtlClrdLonsTmsLneeCredSlsB2B
      TtlClrdLonsAmtLneeCredSlsB2B
      TtlActvLonsTmsLnrCredSlsB2P
      TtlActvLonsAmtLnrCredSlsB2P
      TtlBLLonsTmsLnrCredSlsB2P
      TtlBLLonsAmtLnrCredSlsB2P
      TtlClrdLonsTmsLnrCredSlsB2P
      TtlClrdLonsAmtLnrCredSlsB2P
      TtlActvLonsTmsLneeCredSlsP2B
      TtlActvLonsAmtLneeCredSlsP2B
      TtlBLLonsTmsLneeCredSlsP2B
      TtlBLLonsAmtLneeCredSlsP2B
      TtlClrdLonsTmsLneeCredSlsP2B
      TtlClrdLonsAmtLneeCredSlsP2B
      objectionStatus
      objOfficer
      objReason
      AdminNo
      Admin1
      Admin2
      Admin3
      Admin4
      Admin5
      Admin6
      Admin7
      Admin8
      Admin9
      Admin10
      Admin11
      Admin12
      Admin13
      Admin14
      Admin15
      Admin16
      Admin17
      Admin18
      Admin19
      Admin20
      Admin21
      Admin22
      Admin23
      Admin24
      Admin25
      Admin26
      Admin27
      Admin28
      Admin29
      Admin30
      Admin31
      Admin32
      Admin33
      Admin34
      Admin35
      Admin36
      Admin37
      Admin38
      Admin39
      Admin40
      Admin41
      Admin42
      Admin43
      Admin44
      Admin45
      Admin46
      Admin47
      Admin48
      Admin49
      Admin50
      updatedAt
      __typename
    }
  }
`;
export const updateBizna = /* GraphQL */ `
  mutation UpdateBizna(
    $input: UpdateBiznaInput!
    $condition: ModelBiznaConditionInput
  ) {
    updateBizna(input: $input, condition: $condition) {
      BusKntct
      busName
      pw
      TtlEarnings
      earningsBal
      bizBeneficiary
      beneficiaryType
      benefitsAmounts
      netEarnings
      owner2email
      email
      licenseNo
      bizType
      status
      owner
      description
      createdAt
      noBL
      TtlActvLonsTmsLnrCredSlsB2B
      TtlActvLonsAmtLnrCredSlsB2B
      TtlBLLonsTmsLnrCredSlsB2B
      TtlBLLonsAmtLnrCredSlsB2B
      TtlClrdLonsTmsLnrCredSlsB2B
      TtlClrdLonsAmtLnrCredSlsB2B
      TtlActvLonsTmsLneeCredSlsB2B
      TtlActvLonsAmtLneeCredSlsB2B
      TtlBLLonsTmsLneeCredSlsB2B
      TtlBLLonsAmtLneeCredSlsB2B
      TtlClrdLonsTmsLneeCredSlsB2B
      TtlClrdLonsAmtLneeCredSlsB2B
      TtlActvLonsTmsLnrCredSlsB2P
      TtlActvLonsAmtLnrCredSlsB2P
      TtlBLLonsTmsLnrCredSlsB2P
      TtlBLLonsAmtLnrCredSlsB2P
      TtlClrdLonsTmsLnrCredSlsB2P
      TtlClrdLonsAmtLnrCredSlsB2P
      TtlActvLonsTmsLneeCredSlsP2B
      TtlActvLonsAmtLneeCredSlsP2B
      TtlBLLonsTmsLneeCredSlsP2B
      TtlBLLonsAmtLneeCredSlsP2B
      TtlClrdLonsTmsLneeCredSlsP2B
      TtlClrdLonsAmtLneeCredSlsP2B
      objectionStatus
      objOfficer
      objReason
      AdminNo
      Admin1
      Admin2
      Admin3
      Admin4
      Admin5
      Admin6
      Admin7
      Admin8
      Admin9
      Admin10
      Admin11
      Admin12
      Admin13
      Admin14
      Admin15
      Admin16
      Admin17
      Admin18
      Admin19
      Admin20
      Admin21
      Admin22
      Admin23
      Admin24
      Admin25
      Admin26
      Admin27
      Admin28
      Admin29
      Admin30
      Admin31
      Admin32
      Admin33
      Admin34
      Admin35
      Admin36
      Admin37
      Admin38
      Admin39
      Admin40
      Admin41
      Admin42
      Admin43
      Admin44
      Admin45
      Admin46
      Admin47
      Admin48
      Admin49
      Admin50
      updatedAt
      __typename
    }
  }
`;
export const deleteBizna = /* GraphQL */ `
  mutation DeleteBizna(
    $input: DeleteBiznaInput!
    $condition: ModelBiznaConditionInput
  ) {
    deleteBizna(input: $input, condition: $condition) {
      BusKntct
      busName
      pw
      TtlEarnings
      earningsBal
      bizBeneficiary
      beneficiaryType
      benefitsAmounts
      netEarnings
      owner2email
      email
      licenseNo
      bizType
      status
      owner
      description
      createdAt
      noBL
      TtlActvLonsTmsLnrCredSlsB2B
      TtlActvLonsAmtLnrCredSlsB2B
      TtlBLLonsTmsLnrCredSlsB2B
      TtlBLLonsAmtLnrCredSlsB2B
      TtlClrdLonsTmsLnrCredSlsB2B
      TtlClrdLonsAmtLnrCredSlsB2B
      TtlActvLonsTmsLneeCredSlsB2B
      TtlActvLonsAmtLneeCredSlsB2B
      TtlBLLonsTmsLneeCredSlsB2B
      TtlBLLonsAmtLneeCredSlsB2B
      TtlClrdLonsTmsLneeCredSlsB2B
      TtlClrdLonsAmtLneeCredSlsB2B
      TtlActvLonsTmsLnrCredSlsB2P
      TtlActvLonsAmtLnrCredSlsB2P
      TtlBLLonsTmsLnrCredSlsB2P
      TtlBLLonsAmtLnrCredSlsB2P
      TtlClrdLonsTmsLnrCredSlsB2P
      TtlClrdLonsAmtLnrCredSlsB2P
      TtlActvLonsTmsLneeCredSlsP2B
      TtlActvLonsAmtLneeCredSlsP2B
      TtlBLLonsTmsLneeCredSlsP2B
      TtlBLLonsAmtLneeCredSlsP2B
      TtlClrdLonsTmsLneeCredSlsP2B
      TtlClrdLonsAmtLneeCredSlsP2B
      objectionStatus
      objOfficer
      objReason
      AdminNo
      Admin1
      Admin2
      Admin3
      Admin4
      Admin5
      Admin6
      Admin7
      Admin8
      Admin9
      Admin10
      Admin11
      Admin12
      Admin13
      Admin14
      Admin15
      Admin16
      Admin17
      Admin18
      Admin19
      Admin20
      Admin21
      Admin22
      Admin23
      Admin24
      Admin25
      Admin26
      Admin27
      Admin28
      Admin29
      Admin30
      Admin31
      Admin32
      Admin33
      Admin34
      Admin35
      Admin36
      Admin37
      Admin38
      Admin39
      Admin40
      Admin41
      Admin42
      Admin43
      Admin44
      Admin45
      Admin46
      Admin47
      Admin48
      Admin49
      Admin50
      updatedAt
      __typename
    }
  }
`;
export const createBeneficiaryProds = /* GraphQL */ `
  mutation CreateBeneficiaryProds(
    $input: CreateBeneficiaryProdsInput!
    $condition: ModelBeneficiaryProdsConditionInput
  ) {
    createBeneficiaryProds(input: $input, condition: $condition) {
      id
      benefactorName
      benefactorAcNumber
      ProdName
      ProdCode
      ProdDesc
      ProdCost
      ProdCreator
      BenefactorContact
      benefactorType
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBeneficiaryProds = /* GraphQL */ `
  mutation UpdateBeneficiaryProds(
    $input: UpdateBeneficiaryProdsInput!
    $condition: ModelBeneficiaryProdsConditionInput
  ) {
    updateBeneficiaryProds(input: $input, condition: $condition) {
      id
      benefactorName
      benefactorAcNumber
      ProdName
      ProdCode
      ProdDesc
      ProdCost
      ProdCreator
      BenefactorContact
      benefactorType
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBeneficiaryProds = /* GraphQL */ `
  mutation DeleteBeneficiaryProds(
    $input: DeleteBeneficiaryProdsInput!
    $condition: ModelBeneficiaryProdsConditionInput
  ) {
    deleteBeneficiaryProds(input: $input, condition: $condition) {
      id
      benefactorName
      benefactorAcNumber
      ProdName
      ProdCode
      ProdDesc
      ProdCost
      ProdCreator
      BenefactorContact
      benefactorType
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBenefactorProdBeneficiaries = /* GraphQL */ `
  mutation CreateBenefactorProdBeneficiaries(
    $input: CreateBenefactorProdBeneficiariesInput!
    $condition: ModelBenefactorProdBeneficiariesConditionInput
  ) {
    createBenefactorProdBeneficiaries(input: $input, condition: $condition) {
      id
      benefactorName
      benefactorAcNumber
      prodName
      beneficiaryEmail
      beneficiaryContact
      prodCode
      prodDesc
      prodCost
      contributionSoFar
      BenefactorContact
      benefactorType
      status
      beneficiaryClaimStatus
      benefactorClaimStatus
      beneficiariesDisbursedAmount
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBenefactorProdBeneficiaries = /* GraphQL */ `
  mutation UpdateBenefactorProdBeneficiaries(
    $input: UpdateBenefactorProdBeneficiariesInput!
    $condition: ModelBenefactorProdBeneficiariesConditionInput
  ) {
    updateBenefactorProdBeneficiaries(input: $input, condition: $condition) {
      id
      benefactorName
      benefactorAcNumber
      prodName
      beneficiaryEmail
      beneficiaryContact
      prodCode
      prodDesc
      prodCost
      contributionSoFar
      BenefactorContact
      benefactorType
      status
      beneficiaryClaimStatus
      benefactorClaimStatus
      beneficiariesDisbursedAmount
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBenefactorProdBeneficiaries = /* GraphQL */ `
  mutation DeleteBenefactorProdBeneficiaries(
    $input: DeleteBenefactorProdBeneficiariesInput!
    $condition: ModelBenefactorProdBeneficiariesConditionInput
  ) {
    deleteBenefactorProdBeneficiaries(input: $input, condition: $condition) {
      id
      benefactorName
      benefactorAcNumber
      prodName
      beneficiaryEmail
      beneficiaryContact
      prodCode
      prodDesc
      prodCost
      contributionSoFar
      BenefactorContact
      benefactorType
      status
      beneficiaryClaimStatus
      benefactorClaimStatus
      beneficiariesDisbursedAmount
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBizBenBenefactors = /* GraphQL */ `
  mutation CreateBizBenBenefactors(
    $input: CreateBizBenBenefactorsInput!
    $condition: ModelBizBenBenefactorsConditionInput
  ) {
    createBizBenBenefactors(input: $input, condition: $condition) {
      id
      benefactorName
      benefactorAcNumber
      prodName
      beneficiaryEmail
      beneficiaryContact
      benefactorContact
      benefactorType
      benTypeSendOrRec
      prodCode
      prodDesc
      prodCost
      contributionAmount
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBizBenBenefactors = /* GraphQL */ `
  mutation UpdateBizBenBenefactors(
    $input: UpdateBizBenBenefactorsInput!
    $condition: ModelBizBenBenefactorsConditionInput
  ) {
    updateBizBenBenefactors(input: $input, condition: $condition) {
      id
      benefactorName
      benefactorAcNumber
      prodName
      beneficiaryEmail
      beneficiaryContact
      benefactorContact
      benefactorType
      benTypeSendOrRec
      prodCode
      prodDesc
      prodCost
      contributionAmount
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBizBenBenefactors = /* GraphQL */ `
  mutation DeleteBizBenBenefactors(
    $input: DeleteBizBenBenefactorsInput!
    $condition: ModelBizBenBenefactorsConditionInput
  ) {
    deleteBizBenBenefactors(input: $input, condition: $condition) {
      id
      benefactorName
      benefactorAcNumber
      prodName
      beneficiaryEmail
      beneficiaryContact
      benefactorContact
      benefactorType
      benTypeSendOrRec
      prodCode
      prodDesc
      prodCost
      contributionAmount
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBankAdmin = /* GraphQL */ `
  mutation CreateBankAdmin(
    $input: CreateBankAdminInput!
    $condition: ModelBankAdminConditionInput
  ) {
    createBankAdmin(input: $input, condition: $condition) {
      nationalid
      name
      phonecontact
      TtlEarnings
      pw
      BankAdmBal
      email
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBankAdmin = /* GraphQL */ `
  mutation UpdateBankAdmin(
    $input: UpdateBankAdminInput!
    $condition: ModelBankAdminConditionInput
  ) {
    updateBankAdmin(input: $input, condition: $condition) {
      nationalid
      name
      phonecontact
      TtlEarnings
      pw
      BankAdmBal
      email
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBankAdmin = /* GraphQL */ `
  mutation DeleteBankAdmin(
    $input: DeleteBankAdminInput!
    $condition: ModelBankAdminConditionInput
  ) {
    deleteBankAdmin(input: $input, condition: $condition) {
      nationalid
      name
      phonecontact
      TtlEarnings
      pw
      BankAdmBal
      email
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAdvocate = /* GraphQL */ `
  mutation CreateAdvocate(
    $input: CreateAdvocateInput!
    $condition: ModelAdvocateConditionInput
  ) {
    createAdvocate(input: $input, condition: $condition) {
      advregnu
      nationalid
      pwd
      name
      phonecontact
      TtlEarnings
      advBal
      email
      bankName
      bkAcNo
      officeLoc
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAdvocate = /* GraphQL */ `
  mutation UpdateAdvocate(
    $input: UpdateAdvocateInput!
    $condition: ModelAdvocateConditionInput
  ) {
    updateAdvocate(input: $input, condition: $condition) {
      advregnu
      nationalid
      pwd
      name
      phonecontact
      TtlEarnings
      advBal
      email
      bankName
      bkAcNo
      officeLoc
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAdvocate = /* GraphQL */ `
  mutation DeleteAdvocate(
    $input: DeleteAdvocateInput!
    $condition: ModelAdvocateConditionInput
  ) {
    deleteAdvocate(input: $input, condition: $condition) {
      advregnu
      nationalid
      pwd
      name
      phonecontact
      TtlEarnings
      advBal
      email
      bankName
      bkAcNo
      officeLoc
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAdvocateWithdrawals = /* GraphQL */ `
  mutation CreateAdvocateWithdrawals(
    $input: CreateAdvocateWithdrawalsInput!
    $condition: ModelAdvocateWithdrawalsConditionInput
  ) {
    createAdvocateWithdrawals(input: $input, condition: $condition) {
      id
      bankAdmnId
      advregnu
      amount
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAdvocateWithdrawals = /* GraphQL */ `
  mutation UpdateAdvocateWithdrawals(
    $input: UpdateAdvocateWithdrawalsInput!
    $condition: ModelAdvocateWithdrawalsConditionInput
  ) {
    updateAdvocateWithdrawals(input: $input, condition: $condition) {
      id
      bankAdmnId
      advregnu
      amount
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAdvocateWithdrawals = /* GraphQL */ `
  mutation DeleteAdvocateWithdrawals(
    $input: DeleteAdvocateWithdrawalsInput!
    $condition: ModelAdvocateWithdrawalsConditionInput
  ) {
    deleteAdvocateWithdrawals(input: $input, condition: $condition) {
      id
      bankAdmnId
      advregnu
      amount
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
      AdminId
      phoneContact
      companyEmail
      termsNconditions
      alert
      about
      policy
      privacy
      recom
      pw1
      pw2
      agentwithdrawalFee
      agentCom
      sagentCom
      companyCom
      AdvCom
      ChampCom
      AdvCompanyCom
      bankAdminCom
      sawithdrawalFee
      advuserwithdrawalFee
      bankAdmuserwithdrawalFee
      userLoanTransferFee
      userTransferFee
      chmMmbrTransferFee
      chmTransferFee
      biznaTransferFee
      palpalLnRpymntFee
      chmLnRpymntFee
      crdSllrLnRpymntFee
      biznaCredSaleFee
      biznaCashSaleFee
      dfltWaiverFee
      tenderingFee
      EmploymentFee
      userClearanceFee
      CoverageFee
      vat
      ttlvat
      enquiryFee
      UsrWthdrwlFees
      ttlNonLonssRecSM
      ttlNonLonssSentSM
      ttlNonLonssRecChm
      ttlNonLonssSentChm
      companyEarningBal
      companyEarning
      agentEarningBal
      agentEarning
      saEarningBal
      saEarning
      AdvEarningBal
      AdvEarning
      admEarningBal
      admEarning
      ttlUsrDep
      ttlUserWthdrwl
      agentFloatIn
      agentFloatOut
      ttlActiveUsers
      ttlInactvUsrs
      ttlBLUsrs
      ttlActiveChm
      ttlInactvChm
      ttlBLChm
      ttlActiveChmUsers
      ttlInactvChmUsrs
      ttlBLChmUsrs
      ttlKFNdgActv
      ttlKFNdgInActv
      ttlKNdgBLStts
      ttlKFKbwActv
      ttlKFKbwInActv
      ttlKKbwBLStts
      ttlKFAdvActv
      ttlKFAdvInActv
      ttlKAdvBLStts
      ttlKFAdmActv
      ttlKFAdmInActv
      ttlKAdmBLStts
      ttlSMLnsInAmtCov
      ttlChmLnsInAmtCov
      ttlSellerLnsInAmtCov
      ttlSMLnsInActvAmtCov
      ttlChmLnsInActvAmtCov
      ttlSellerLnsInActvAmtCov
      ttlSMLnsInClrdAmtCov
      ttlChmLnsInClrdAmtCov
      ttlSellerLnsInClrdAmtCov
      ttlSMLnsInBlAmtCov
      ttlChmLnsInBlAmtCov
      ttlSellerLnsInBlAmtCov
      ttlSMLnsInTymsCov
      ttlChmLnsInTymsCov
      ttlSellerLnsInTymsCov
      ttlSMLnsInActvTymsCov
      ttlChmLnsInActvTymsCov
      ttlSellerLnsInActvTymsCov
      ttlSMLnsInClrdTymsCov
      ttlChmLnsInClrdTymsCov
      ttlSellerLnsInClrdTymsCov
      ttlSMLnsInBlTymsCov
      ttlChmLnsInBlTymsCov
      ttlSellerLnsInBlTymsCov
      ttlCompTrnsfrEarningsCov
      ttlCompBLClrncEarningsCov
      ttlSMLnsInAmtNonCov
      ttlChmLnsInAmtNonCov
      ttlSellerLnsInAmtNonCov
      ttlSMLnsInActvAmtNonCov
      ttlChmLnsInActvAmtNonCov
      ttlSellerLnsInActvAmtNonCov
      ttlSMLnsInClrdAmtNonCov
      ttlChmLnsInClrdAmtNonCov
      ttlSellerLnsInClrdAmtNonCov
      ttlSMLnsInBlAmtNonCov
      ttlChmLnsInBlAmtNonCov
      ttlSellerLnsInBlAmtNonCov
      ttlSMLnsInTymsNonCov
      ttlChmLnsInTymsNonCov
      ttlSellerLnsInTymsNonCov
      ttlSMLnsInActvTymsNonCov
      ttlChmLnsInActvTymsNonCov
      ttlSellerLnsInActvTymsNonCov
      ttlSMLnsInClrdTymsNonCov
      ttlChmLnsInClrdTymsNonCov
      ttlSellerLnsInClrdTymsNonCov
      ttlSMLnsInBlTymsNonCov
      ttlChmLnsInBlTymsNonCov
      ttlSellerLnsInBlTymsNonCov
      ttlCompTrnsfrEarningsNonCov
      ttlCompBLClrncEarningsNonCov
      ttlCompCovEarnings
      maxInterestSM
      maxInterestPwnBrkr
      maxInterestCredSllr
      maxInterestGrp
      maxMFNdogos
      maxBLs
      owner
      totalLnsRecovered
      bizBeneficiaryFee
      bizBenefactorFee
      senderBeneficiaryFee
      receiverBeneficiaryFee
      createdAt
      MFNdogoTC
      MFKubwaTC
      AdvocateTC
      BiznaTNC
      ChamaTNC
      PayPalTNC
      maxDfltPen
      bizBLNo
      updatedAt
      __typename
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
      AdminId
      phoneContact
      companyEmail
      termsNconditions
      alert
      about
      policy
      privacy
      recom
      pw1
      pw2
      agentwithdrawalFee
      agentCom
      sagentCom
      companyCom
      AdvCom
      ChampCom
      AdvCompanyCom
      bankAdminCom
      sawithdrawalFee
      advuserwithdrawalFee
      bankAdmuserwithdrawalFee
      userLoanTransferFee
      userTransferFee
      chmMmbrTransferFee
      chmTransferFee
      biznaTransferFee
      palpalLnRpymntFee
      chmLnRpymntFee
      crdSllrLnRpymntFee
      biznaCredSaleFee
      biznaCashSaleFee
      dfltWaiverFee
      tenderingFee
      EmploymentFee
      userClearanceFee
      CoverageFee
      vat
      ttlvat
      enquiryFee
      UsrWthdrwlFees
      ttlNonLonssRecSM
      ttlNonLonssSentSM
      ttlNonLonssRecChm
      ttlNonLonssSentChm
      companyEarningBal
      companyEarning
      agentEarningBal
      agentEarning
      saEarningBal
      saEarning
      AdvEarningBal
      AdvEarning
      admEarningBal
      admEarning
      ttlUsrDep
      ttlUserWthdrwl
      agentFloatIn
      agentFloatOut
      ttlActiveUsers
      ttlInactvUsrs
      ttlBLUsrs
      ttlActiveChm
      ttlInactvChm
      ttlBLChm
      ttlActiveChmUsers
      ttlInactvChmUsrs
      ttlBLChmUsrs
      ttlKFNdgActv
      ttlKFNdgInActv
      ttlKNdgBLStts
      ttlKFKbwActv
      ttlKFKbwInActv
      ttlKKbwBLStts
      ttlKFAdvActv
      ttlKFAdvInActv
      ttlKAdvBLStts
      ttlKFAdmActv
      ttlKFAdmInActv
      ttlKAdmBLStts
      ttlSMLnsInAmtCov
      ttlChmLnsInAmtCov
      ttlSellerLnsInAmtCov
      ttlSMLnsInActvAmtCov
      ttlChmLnsInActvAmtCov
      ttlSellerLnsInActvAmtCov
      ttlSMLnsInClrdAmtCov
      ttlChmLnsInClrdAmtCov
      ttlSellerLnsInClrdAmtCov
      ttlSMLnsInBlAmtCov
      ttlChmLnsInBlAmtCov
      ttlSellerLnsInBlAmtCov
      ttlSMLnsInTymsCov
      ttlChmLnsInTymsCov
      ttlSellerLnsInTymsCov
      ttlSMLnsInActvTymsCov
      ttlChmLnsInActvTymsCov
      ttlSellerLnsInActvTymsCov
      ttlSMLnsInClrdTymsCov
      ttlChmLnsInClrdTymsCov
      ttlSellerLnsInClrdTymsCov
      ttlSMLnsInBlTymsCov
      ttlChmLnsInBlTymsCov
      ttlSellerLnsInBlTymsCov
      ttlCompTrnsfrEarningsCov
      ttlCompBLClrncEarningsCov
      ttlSMLnsInAmtNonCov
      ttlChmLnsInAmtNonCov
      ttlSellerLnsInAmtNonCov
      ttlSMLnsInActvAmtNonCov
      ttlChmLnsInActvAmtNonCov
      ttlSellerLnsInActvAmtNonCov
      ttlSMLnsInClrdAmtNonCov
      ttlChmLnsInClrdAmtNonCov
      ttlSellerLnsInClrdAmtNonCov
      ttlSMLnsInBlAmtNonCov
      ttlChmLnsInBlAmtNonCov
      ttlSellerLnsInBlAmtNonCov
      ttlSMLnsInTymsNonCov
      ttlChmLnsInTymsNonCov
      ttlSellerLnsInTymsNonCov
      ttlSMLnsInActvTymsNonCov
      ttlChmLnsInActvTymsNonCov
      ttlSellerLnsInActvTymsNonCov
      ttlSMLnsInClrdTymsNonCov
      ttlChmLnsInClrdTymsNonCov
      ttlSellerLnsInClrdTymsNonCov
      ttlSMLnsInBlTymsNonCov
      ttlChmLnsInBlTymsNonCov
      ttlSellerLnsInBlTymsNonCov
      ttlCompTrnsfrEarningsNonCov
      ttlCompBLClrncEarningsNonCov
      ttlCompCovEarnings
      maxInterestSM
      maxInterestPwnBrkr
      maxInterestCredSllr
      maxInterestGrp
      maxMFNdogos
      maxBLs
      owner
      totalLnsRecovered
      bizBeneficiaryFee
      bizBenefactorFee
      senderBeneficiaryFee
      receiverBeneficiaryFee
      createdAt
      MFNdogoTC
      MFKubwaTC
      AdvocateTC
      BiznaTNC
      ChamaTNC
      PayPalTNC
      maxDfltPen
      bizBLNo
      updatedAt
      __typename
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
      AdminId
      phoneContact
      companyEmail
      termsNconditions
      alert
      about
      policy
      privacy
      recom
      pw1
      pw2
      agentwithdrawalFee
      agentCom
      sagentCom
      companyCom
      AdvCom
      ChampCom
      AdvCompanyCom
      bankAdminCom
      sawithdrawalFee
      advuserwithdrawalFee
      bankAdmuserwithdrawalFee
      userLoanTransferFee
      userTransferFee
      chmMmbrTransferFee
      chmTransferFee
      biznaTransferFee
      palpalLnRpymntFee
      chmLnRpymntFee
      crdSllrLnRpymntFee
      biznaCredSaleFee
      biznaCashSaleFee
      dfltWaiverFee
      tenderingFee
      EmploymentFee
      userClearanceFee
      CoverageFee
      vat
      ttlvat
      enquiryFee
      UsrWthdrwlFees
      ttlNonLonssRecSM
      ttlNonLonssSentSM
      ttlNonLonssRecChm
      ttlNonLonssSentChm
      companyEarningBal
      companyEarning
      agentEarningBal
      agentEarning
      saEarningBal
      saEarning
      AdvEarningBal
      AdvEarning
      admEarningBal
      admEarning
      ttlUsrDep
      ttlUserWthdrwl
      agentFloatIn
      agentFloatOut
      ttlActiveUsers
      ttlInactvUsrs
      ttlBLUsrs
      ttlActiveChm
      ttlInactvChm
      ttlBLChm
      ttlActiveChmUsers
      ttlInactvChmUsrs
      ttlBLChmUsrs
      ttlKFNdgActv
      ttlKFNdgInActv
      ttlKNdgBLStts
      ttlKFKbwActv
      ttlKFKbwInActv
      ttlKKbwBLStts
      ttlKFAdvActv
      ttlKFAdvInActv
      ttlKAdvBLStts
      ttlKFAdmActv
      ttlKFAdmInActv
      ttlKAdmBLStts
      ttlSMLnsInAmtCov
      ttlChmLnsInAmtCov
      ttlSellerLnsInAmtCov
      ttlSMLnsInActvAmtCov
      ttlChmLnsInActvAmtCov
      ttlSellerLnsInActvAmtCov
      ttlSMLnsInClrdAmtCov
      ttlChmLnsInClrdAmtCov
      ttlSellerLnsInClrdAmtCov
      ttlSMLnsInBlAmtCov
      ttlChmLnsInBlAmtCov
      ttlSellerLnsInBlAmtCov
      ttlSMLnsInTymsCov
      ttlChmLnsInTymsCov
      ttlSellerLnsInTymsCov
      ttlSMLnsInActvTymsCov
      ttlChmLnsInActvTymsCov
      ttlSellerLnsInActvTymsCov
      ttlSMLnsInClrdTymsCov
      ttlChmLnsInClrdTymsCov
      ttlSellerLnsInClrdTymsCov
      ttlSMLnsInBlTymsCov
      ttlChmLnsInBlTymsCov
      ttlSellerLnsInBlTymsCov
      ttlCompTrnsfrEarningsCov
      ttlCompBLClrncEarningsCov
      ttlSMLnsInAmtNonCov
      ttlChmLnsInAmtNonCov
      ttlSellerLnsInAmtNonCov
      ttlSMLnsInActvAmtNonCov
      ttlChmLnsInActvAmtNonCov
      ttlSellerLnsInActvAmtNonCov
      ttlSMLnsInClrdAmtNonCov
      ttlChmLnsInClrdAmtNonCov
      ttlSellerLnsInClrdAmtNonCov
      ttlSMLnsInBlAmtNonCov
      ttlChmLnsInBlAmtNonCov
      ttlSellerLnsInBlAmtNonCov
      ttlSMLnsInTymsNonCov
      ttlChmLnsInTymsNonCov
      ttlSellerLnsInTymsNonCov
      ttlSMLnsInActvTymsNonCov
      ttlChmLnsInActvTymsNonCov
      ttlSellerLnsInActvTymsNonCov
      ttlSMLnsInClrdTymsNonCov
      ttlChmLnsInClrdTymsNonCov
      ttlSellerLnsInClrdTymsNonCov
      ttlSMLnsInBlTymsNonCov
      ttlChmLnsInBlTymsNonCov
      ttlSellerLnsInBlTymsNonCov
      ttlCompTrnsfrEarningsNonCov
      ttlCompBLClrncEarningsNonCov
      ttlCompCovEarnings
      maxInterestSM
      maxInterestPwnBrkr
      maxInterestCredSllr
      maxInterestGrp
      maxMFNdogos
      maxBLs
      owner
      totalLnsRecovered
      bizBeneficiaryFee
      bizBenefactorFee
      senderBeneficiaryFee
      receiverBeneficiaryFee
      createdAt
      MFNdogoTC
      MFKubwaTC
      AdvocateTC
      BiznaTNC
      ChamaTNC
      PayPalTNC
      maxDfltPen
      bizBLNo
      updatedAt
      __typename
    }
  }
`;
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      grpContact
      regNo
      signitoryContact
      SignitoryNatid
      signitoryName
      grpName
      signitoryPW
      oprtnArea
      venture
      signitory2Sub
      WithdrawCnfrmtn
      WithdrawCnfrmtnAmt
      grpEmail
      grpBal
      ttlGrpMembers
      description
      withdrwlAmt
      ChmBenefits
      subscriptionFrequency
      subscriptionAmt
      lateSubscriptionPenalty
      objectionStatus
      objOfficer
      objReason
      AdminNo
      Admin1
      Admin2
      Admin3
      Admin4
      Admin5
      Admin6
      Admin7
      Admin8
      Admin9
      Admin10
      Admin11
      Admin12
      Admin13
      Admin14
      Admin15
      Admin16
      Admin17
      Admin18
      Admin19
      Admin20
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      ttlDpst
      ttlWthdrwn
      tymsChmHvBL
      TtlActvLonsTmsLnrChmCov
      TtlActvLonsAmtLnrChmCov
      TtlBLLonsTmsLnrChmCov
      TtlBLLonsAmtLnrChmCov
      TtlClrdLonsTmsLnrChmCov
      TtlClrdLonsAmtLnrChmCov
      TtlActvLonsTmsLnrChmNonCov
      TtlActvLonsAmtLnrChmNonCov
      TtlBLLonsTmsLnrChmNonCov
      TtlBLLonsAmtLnrChmNonCov
      TtlClrdLonsTmsLnrChmNonCov
      TtlClrdLonsAmtLnrChmNonCov
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      grpContact
      regNo
      signitoryContact
      SignitoryNatid
      signitoryName
      grpName
      signitoryPW
      oprtnArea
      venture
      signitory2Sub
      WithdrawCnfrmtn
      WithdrawCnfrmtnAmt
      grpEmail
      grpBal
      ttlGrpMembers
      description
      withdrwlAmt
      ChmBenefits
      subscriptionFrequency
      subscriptionAmt
      lateSubscriptionPenalty
      objectionStatus
      objOfficer
      objReason
      AdminNo
      Admin1
      Admin2
      Admin3
      Admin4
      Admin5
      Admin6
      Admin7
      Admin8
      Admin9
      Admin10
      Admin11
      Admin12
      Admin13
      Admin14
      Admin15
      Admin16
      Admin17
      Admin18
      Admin19
      Admin20
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      ttlDpst
      ttlWthdrwn
      tymsChmHvBL
      TtlActvLonsTmsLnrChmCov
      TtlActvLonsAmtLnrChmCov
      TtlBLLonsTmsLnrChmCov
      TtlBLLonsAmtLnrChmCov
      TtlClrdLonsTmsLnrChmCov
      TtlClrdLonsAmtLnrChmCov
      TtlActvLonsTmsLnrChmNonCov
      TtlActvLonsAmtLnrChmNonCov
      TtlBLLonsTmsLnrChmNonCov
      TtlBLLonsAmtLnrChmNonCov
      TtlClrdLonsTmsLnrChmNonCov
      TtlClrdLonsAmtLnrChmNonCov
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      grpContact
      regNo
      signitoryContact
      SignitoryNatid
      signitoryName
      grpName
      signitoryPW
      oprtnArea
      venture
      signitory2Sub
      WithdrawCnfrmtn
      WithdrawCnfrmtnAmt
      grpEmail
      grpBal
      ttlGrpMembers
      description
      withdrwlAmt
      ChmBenefits
      subscriptionFrequency
      subscriptionAmt
      lateSubscriptionPenalty
      objectionStatus
      objOfficer
      objReason
      AdminNo
      Admin1
      Admin2
      Admin3
      Admin4
      Admin5
      Admin6
      Admin7
      Admin8
      Admin9
      Admin10
      Admin11
      Admin12
      Admin13
      Admin14
      Admin15
      Admin16
      Admin17
      Admin18
      Admin19
      Admin20
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      ttlDpst
      ttlWthdrwn
      tymsChmHvBL
      TtlActvLonsTmsLnrChmCov
      TtlActvLonsAmtLnrChmCov
      TtlBLLonsTmsLnrChmCov
      TtlBLLonsAmtLnrChmCov
      TtlClrdLonsTmsLnrChmCov
      TtlClrdLonsAmtLnrChmCov
      TtlActvLonsTmsLnrChmNonCov
      TtlActvLonsAmtLnrChmNonCov
      TtlBLLonsTmsLnrChmNonCov
      TtlBLLonsAmtLnrChmNonCov
      TtlClrdLonsTmsLnrChmNonCov
      TtlClrdLonsAmtLnrChmNonCov
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createChamaMembers = /* GraphQL */ `
  mutation CreateChamaMembers(
    $input: CreateChamaMembersInput!
    $condition: ModelChamaMembersConditionInput
  ) {
    createChamaMembers(input: $input, condition: $condition) {
      MembaId
      groupContact
      regNo
      ChamaNMember
      groupName
      memberContact
      memberName
      memberNatId
      memberChmBenefit
      timeCrtd
      subscribedAmt
      totalSubAmt
      ttlLateSubs
      GrossLnsGvn
      LonAmtGven
      AmtRepaid
      LnBal
      NonLoanAcBal
      ttlNonLonAcBal
      AcStatus
      loanStatus
      blStatus
      owner
      createdAt
      subscriptionFrequency
      subscriptionAmt
      lateSubscriptionPenalty
      updatedAt
      __typename
    }
  }
`;
export const updateChamaMembers = /* GraphQL */ `
  mutation UpdateChamaMembers(
    $input: UpdateChamaMembersInput!
    $condition: ModelChamaMembersConditionInput
  ) {
    updateChamaMembers(input: $input, condition: $condition) {
      MembaId
      groupContact
      regNo
      ChamaNMember
      groupName
      memberContact
      memberName
      memberNatId
      memberChmBenefit
      timeCrtd
      subscribedAmt
      totalSubAmt
      ttlLateSubs
      GrossLnsGvn
      LonAmtGven
      AmtRepaid
      LnBal
      NonLoanAcBal
      ttlNonLonAcBal
      AcStatus
      loanStatus
      blStatus
      owner
      createdAt
      subscriptionFrequency
      subscriptionAmt
      lateSubscriptionPenalty
      updatedAt
      __typename
    }
  }
`;
export const deleteChamaMembers = /* GraphQL */ `
  mutation DeleteChamaMembers(
    $input: DeleteChamaMembersInput!
    $condition: ModelChamaMembersConditionInput
  ) {
    deleteChamaMembers(input: $input, condition: $condition) {
      MembaId
      groupContact
      regNo
      ChamaNMember
      groupName
      memberContact
      memberName
      memberNatId
      memberChmBenefit
      timeCrtd
      subscribedAmt
      totalSubAmt
      ttlLateSubs
      GrossLnsGvn
      LonAmtGven
      AmtRepaid
      LnBal
      NonLoanAcBal
      ttlNonLonAcBal
      AcStatus
      loanStatus
      blStatus
      owner
      createdAt
      subscriptionFrequency
      subscriptionAmt
      lateSubscriptionPenalty
      updatedAt
      __typename
    }
  }
`;
export const createChamasNPwnBrkrs = /* GraphQL */ `
  mutation CreateChamasNPwnBrkrs(
    $input: CreateChamasNPwnBrkrsInput!
    $condition: ModelChamasNPwnBrkrsConditionInput
  ) {
    createChamasNPwnBrkrs(input: $input, condition: $condition) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateChamasNPwnBrkrs = /* GraphQL */ `
  mutation UpdateChamasNPwnBrkrs(
    $input: UpdateChamasNPwnBrkrsInput!
    $condition: ModelChamasNPwnBrkrsConditionInput
  ) {
    updateChamasNPwnBrkrs(input: $input, condition: $condition) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteChamasNPwnBrkrs = /* GraphQL */ `
  mutation DeleteChamasNPwnBrkrs(
    $input: DeleteChamasNPwnBrkrsInput!
    $condition: ModelChamasNPwnBrkrsConditionInput
  ) {
    deleteChamasNPwnBrkrs(input: $input, condition: $condition) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createGroupNonLoans = /* GraphQL */ `
  mutation CreateGroupNonLoans(
    $input: CreateGroupNonLoansInput!
    $condition: ModelGroupNonLoansConditionInput
  ) {
    createGroupNonLoans(input: $input, condition: $condition) {
      id
      grpContact
      recipientPhn
      receiverName
      SenderName
      amountSent
      memberId
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGroupNonLoans = /* GraphQL */ `
  mutation UpdateGroupNonLoans(
    $input: UpdateGroupNonLoansInput!
    $condition: ModelGroupNonLoansConditionInput
  ) {
    updateGroupNonLoans(input: $input, condition: $condition) {
      id
      grpContact
      recipientPhn
      receiverName
      SenderName
      amountSent
      memberId
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGroupNonLoans = /* GraphQL */ `
  mutation DeleteGroupNonLoans(
    $input: DeleteGroupNonLoansInput!
    $condition: ModelGroupNonLoansConditionInput
  ) {
    deleteGroupNonLoans(input: $input, condition: $condition) {
      id
      grpContact
      recipientPhn
      receiverName
      SenderName
      amountSent
      memberId
      description
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createGrpMembersContribution = /* GraphQL */ `
  mutation CreateGrpMembersContribution(
    $input: CreateGrpMembersContributionInput!
    $condition: ModelGrpMembersContributionConditionInput
  ) {
    createGrpMembersContribution(input: $input, condition: $condition) {
      id
      memberPhn
      mmberNme
      GrpName
      grpContact
      contriAmount
      memberId
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGrpMembersContribution = /* GraphQL */ `
  mutation UpdateGrpMembersContribution(
    $input: UpdateGrpMembersContributionInput!
    $condition: ModelGrpMembersContributionConditionInput
  ) {
    updateGrpMembersContribution(input: $input, condition: $condition) {
      id
      memberPhn
      mmberNme
      GrpName
      grpContact
      contriAmount
      memberId
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGrpMembersContribution = /* GraphQL */ `
  mutation DeleteGrpMembersContribution(
    $input: DeleteGrpMembersContributionInput!
    $condition: ModelGrpMembersContributionConditionInput
  ) {
    deleteGrpMembersContribution(input: $input, condition: $condition) {
      id
      memberPhn
      mmberNme
      GrpName
      grpContact
      contriAmount
      memberId
      status
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createReqLoan = /* GraphQL */ `
  mutation CreateReqLoan(
    $input: CreateReqLoanInput!
    $condition: ModelReqLoanConditionInput
  ) {
    createReqLoan(input: $input, condition: $condition) {
      id
      loaneeEmail
      loanerEmail
      loaneePhone
      loaneeName
      AdvEmail
      advLicNo
      loanerName
      loanerPhone
      dfltDeadLn
      amount
      lnIntRate
      repaymentAmt
      repaymentPeriod
      lnType
      status
      owner
      createdAt
      statusNumber
      description
      defaultPenalty
      installmentAmount
      paymentFrequency
      updatedAt
      __typename
    }
  }
`;
export const updateReqLoan = /* GraphQL */ `
  mutation UpdateReqLoan(
    $input: UpdateReqLoanInput!
    $condition: ModelReqLoanConditionInput
  ) {
    updateReqLoan(input: $input, condition: $condition) {
      id
      loaneeEmail
      loanerEmail
      loaneePhone
      loaneeName
      AdvEmail
      advLicNo
      loanerName
      loanerPhone
      dfltDeadLn
      amount
      lnIntRate
      repaymentAmt
      repaymentPeriod
      lnType
      status
      owner
      createdAt
      statusNumber
      description
      defaultPenalty
      installmentAmount
      paymentFrequency
      updatedAt
      __typename
    }
  }
`;
export const deleteReqLoan = /* GraphQL */ `
  mutation DeleteReqLoan(
    $input: DeleteReqLoanInput!
    $condition: ModelReqLoanConditionInput
  ) {
    deleteReqLoan(input: $input, condition: $condition) {
      id
      loaneeEmail
      loanerEmail
      loaneePhone
      loaneeName
      AdvEmail
      advLicNo
      loanerName
      loanerPhone
      dfltDeadLn
      amount
      lnIntRate
      repaymentAmt
      repaymentPeriod
      lnType
      status
      owner
      createdAt
      statusNumber
      description
      defaultPenalty
      installmentAmount
      paymentFrequency
      updatedAt
      __typename
    }
  }
`;
export const createReqLoanChama = /* GraphQL */ `
  mutation CreateReqLoanChama(
    $input: CreateReqLoanChamaInput!
    $condition: ModelReqLoanChamaConditionInput
  ) {
    createReqLoanChama(input: $input, condition: $condition) {
      id
      loaneeEmail
      chamaPhone
      loaneePhone
      loaneeName
      advLicNo
      dfltDeadLn
      amount
      lnIntRate
      repaymentAmt
      repaymentPeriod
      status
      owner
      lnType
      loaneeMemberId
      createdAt
      statusNumber
      AdvEmail
      loanerName
      loanerPhone
      description
      defaultPenalty
      installmentAmount
      paymentFrequency
      updatedAt
      __typename
    }
  }
`;
export const updateReqLoanChama = /* GraphQL */ `
  mutation UpdateReqLoanChama(
    $input: UpdateReqLoanChamaInput!
    $condition: ModelReqLoanChamaConditionInput
  ) {
    updateReqLoanChama(input: $input, condition: $condition) {
      id
      loaneeEmail
      chamaPhone
      loaneePhone
      loaneeName
      advLicNo
      dfltDeadLn
      amount
      lnIntRate
      repaymentAmt
      repaymentPeriod
      status
      owner
      lnType
      loaneeMemberId
      createdAt
      statusNumber
      AdvEmail
      loanerName
      loanerPhone
      description
      defaultPenalty
      installmentAmount
      paymentFrequency
      updatedAt
      __typename
    }
  }
`;
export const deleteReqLoanChama = /* GraphQL */ `
  mutation DeleteReqLoanChama(
    $input: DeleteReqLoanChamaInput!
    $condition: ModelReqLoanChamaConditionInput
  ) {
    deleteReqLoanChama(input: $input, condition: $condition) {
      id
      loaneeEmail
      chamaPhone
      loaneePhone
      loaneeName
      advLicNo
      dfltDeadLn
      amount
      lnIntRate
      repaymentAmt
      repaymentPeriod
      status
      owner
      lnType
      loaneeMemberId
      createdAt
      statusNumber
      AdvEmail
      loanerName
      loanerPhone
      description
      defaultPenalty
      installmentAmount
      paymentFrequency
      updatedAt
      __typename
    }
  }
`;
export const createReqLoanCredSl = /* GraphQL */ `
  mutation CreateReqLoanCredSl(
    $input: CreateReqLoanCredSlInput!
    $condition: ModelReqLoanCredSlConditionInput
  ) {
    createReqLoanCredSl(input: $input, condition: $condition) {
      id
      loaneeEmail
      businessNo
      loaneePhone
      loaneeName
      itemName
      amount
      lnIntRate
      dfltDeadLn
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      statusNumber
      lnType
      AdvEmail
      advLicNo
      loanerName
      loanerPhone
      description
      defaultPenalty
      installmentAmount
      paymentFrequency
      updatedAt
      __typename
    }
  }
`;
export const updateReqLoanCredSl = /* GraphQL */ `
  mutation UpdateReqLoanCredSl(
    $input: UpdateReqLoanCredSlInput!
    $condition: ModelReqLoanCredSlConditionInput
  ) {
    updateReqLoanCredSl(input: $input, condition: $condition) {
      id
      loaneeEmail
      businessNo
      loaneePhone
      loaneeName
      itemName
      amount
      lnIntRate
      dfltDeadLn
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      statusNumber
      lnType
      AdvEmail
      advLicNo
      loanerName
      loanerPhone
      description
      defaultPenalty
      installmentAmount
      paymentFrequency
      updatedAt
      __typename
    }
  }
`;
export const deleteReqLoanCredSl = /* GraphQL */ `
  mutation DeleteReqLoanCredSl(
    $input: DeleteReqLoanCredSlInput!
    $condition: ModelReqLoanCredSlConditionInput
  ) {
    deleteReqLoanCredSl(input: $input, condition: $condition) {
      id
      loaneeEmail
      businessNo
      loaneePhone
      loaneeName
      itemName
      amount
      lnIntRate
      dfltDeadLn
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      statusNumber
      lnType
      AdvEmail
      advLicNo
      loanerName
      loanerPhone
      description
      defaultPenalty
      installmentAmount
      paymentFrequency
      updatedAt
      __typename
    }
  }
`;
export const createExRates = /* GraphQL */ `
  mutation CreateExRates(
    $input: CreateExRatesInput!
    $condition: ModelExRatesConditionInput
  ) {
    createExRates(input: $input, condition: $condition) {
      cur
      sellingPrice
      buyingPrice
      symbol
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateExRates = /* GraphQL */ `
  mutation UpdateExRates(
    $input: UpdateExRatesInput!
    $condition: ModelExRatesConditionInput
  ) {
    updateExRates(input: $input, condition: $condition) {
      cur
      sellingPrice
      buyingPrice
      symbol
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteExRates = /* GraphQL */ `
  mutation DeleteExRates(
    $input: DeleteExRatesInput!
    $condition: ModelExRatesConditionInput
  ) {
    deleteExRates(input: $input, condition: $condition) {
      cur
      sellingPrice
      buyingPrice
      symbol
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createMFKOfferz = /* GraphQL */ `
  mutation CreateMFKOfferz(
    $input: CreateMFKOfferzInput!
    $condition: ModelMFKOfferzConditionInput
  ) {
    createMFKOfferz(input: $input, condition: $condition) {
      id
      offerStatus
      acCost
      amtPaid
      mfnOffered
      acChamp
      mfnReg
      status
      mfkAc
      acMainAc
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateMFKOfferz = /* GraphQL */ `
  mutation UpdateMFKOfferz(
    $input: UpdateMFKOfferzInput!
    $condition: ModelMFKOfferzConditionInput
  ) {
    updateMFKOfferz(input: $input, condition: $condition) {
      id
      offerStatus
      acCost
      amtPaid
      mfnOffered
      acChamp
      mfnReg
      status
      mfkAc
      acMainAc
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteMFKOfferz = /* GraphQL */ `
  mutation DeleteMFKOfferz(
    $input: DeleteMFKOfferzInput!
    $condition: ModelMFKOfferzConditionInput
  ) {
    deleteMFKOfferz(input: $input, condition: $condition) {
      id
      offerStatus
      acCost
      amtPaid
      mfnOffered
      acChamp
      mfnReg
      status
      mfkAc
      acMainAc
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createMFKOfferz2 = /* GraphQL */ `
  mutation CreateMFKOfferz2(
    $input: CreateMFKOfferz2Input!
    $condition: ModelMFKOfferz2ConditionInput
  ) {
    createMFKOfferz2(input: $input, condition: $condition) {
      id
      offerStatus
      acCost
      amtPaid
      mfnOffered
      acChamp
      mfnReg
      status
      mfkAc
      acMainAc
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateMFKOfferz2 = /* GraphQL */ `
  mutation UpdateMFKOfferz2(
    $input: UpdateMFKOfferz2Input!
    $condition: ModelMFKOfferz2ConditionInput
  ) {
    updateMFKOfferz2(input: $input, condition: $condition) {
      id
      offerStatus
      acCost
      amtPaid
      mfnOffered
      acChamp
      mfnReg
      status
      mfkAc
      acMainAc
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteMFKOfferz2 = /* GraphQL */ `
  mutation DeleteMFKOfferz2(
    $input: DeleteMFKOfferz2Input!
    $condition: ModelMFKOfferz2ConditionInput
  ) {
    deleteMFKOfferz2(input: $input, condition: $condition) {
      id
      offerStatus
      acCost
      amtPaid
      mfnOffered
      acChamp
      mfnReg
      status
      mfkAc
      acMainAc
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
