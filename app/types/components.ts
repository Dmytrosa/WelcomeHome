import {ReactNode} from 'react';
import {ViewStyle, StyleProp, TextInputProps} from 'react-native';

// Layout
export interface LayoutPropsType {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

// MenuItem
export interface MenuItemPropsType {
  label: string;
  rightItem?: ReactNode;
  onPress: () => void;
}

// Card
export interface CardPropsType {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

// Input
export interface InputPropsType extends TextInputProps {
  testID?: string;
  style?: ViewStyle;
  error?: string;
}

// city.interface.ts
export interface City {
  id: number;
  name?: string | null;
  countryId: number;
  country: Country;
}

// city-out-dto.interface.ts
export interface CityOutDTO {
  id: number;
  name?: string | null;
}

// country.interface.ts
export interface Country {
  id: number;
  name?: string | null;
  cities?: City[] | null;
}

// country-out-dto.interface.ts
export interface CountryOutDTO {
  id: number;
  name?: string | null;
}

// document-in-dto.interface.ts
export interface DocumentInDTO {
  name?: string | null;
}

// document-out-dto.interface.ts
export interface DocumentOutDTO {
  id: number;
  name?: string | null;
}

// establishment-in-dto.interface.ts
export interface EstablishmentInDTO {
  name: string;
  address: string;
  pageURL?: string | null;
  phoneNumber?: string | null;
  otherContacts?: string | null;
  cityId: number;
  establishmentTypeId: number;
}

// establishment-out-dto.interface.ts
export interface EstablishmentOutDTO {
  id: number;
  name?: string | null;
  address?: string | null;
  pageURL?: string | null;
  phoneNumber?: string | null;
  otherContacts?: string | null;
  city: City;
  establishmentType: EstablishmentTypeOutDTO;
}

// establishment-type-out-dto.interface.ts
export interface EstablishmentTypeOutDTO {
  id: number;
  name?: string | null;
}

// event-in-dto.interface.ts
export interface EventInDTO {
  date?: string | null;
  name: string;
  description: string;
  establishmentId: number;
  eventTypeId: number;
  volunteerId: string;
}

// event-out-dto.interface.ts
export interface EventOutDTO {
  id: number;
  date?: string | null;
  name?: string | null;
  description?: string | null;
  establishment: EstablishmentOutDTO;
  eventTypeName?: string | null;
  volunteer: VolunteerOutDTO;
}

// existing-step-in-dto.interface.ts
export interface ExistingStepInDTO {
  sequenceNumber: number;
  stepId: number;
}

// social-payout-out-dto.interface.ts
export interface SocialPayoutOutDTO {
  id: number;
  name?: string | null;
  description?: string | null;
  amount: number;
  userCategories?: UserCategoryOutDTO[] | null;
  steps?: StepOutDTO[] | null;
}


// social-payout-in-dto.interface.ts
export interface SocialPayoutInDTO {
  name?: string | null;
  description?: string | null;
  amount: number;
  userCategoriesId?: number[] | null;
  newPaymentSteps?: StepInDTO[] | null;
  existingPaymentSteps?: ExistingStepInDTO[] | null;
}

// step-in-dto.interface.ts
export interface StepInDTO {
  sequenceNumber: number;
  description?: string | null;
  establishmentTypeId: number;
  documentsBringId?: number[] | null;
  documentsReceiveId?: number[] | null;
}

// step-out-dto.interface.ts
export interface StepOutDTO {
  id: number;
  sequenceNumber: number;
  description?: string | null;
  establishments?: EstablishmentOutDTO[] | null;
  documentsBring?: DocumentOutDTO[] | null;
  documentsReceive?: DocumentOutDTO[] | null;
}

// user-category-out-dto.interface.ts
export interface UserCategoryOutDTO {
  id: number;
  name?: string | null;
}

// user-login-dto.interface.ts
export interface UserLoginDTO {
  email?: string | null;
  password?: string | null;
}

// user-out-dto.interface.ts
export interface UserOutDTO {
  id: string;
  fullName?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
}

// user-register-dto.interface.ts
export interface UserRegisterDTO {
  fullName: string;
  phoneNumber: string;
  email: string;
  password?: string | null;
}

// volunteer-out-dto.interface.ts
export interface VolunteerOutDTO {
  id: string;
  fullName?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  socialUrl?: string | null;
  establishment: EstablishmentOutDTO;
}

// volunteer-register-dto.interface.ts
export interface VolunteerRegisterDTO {
  fullName: string;
  phoneNumber: string;
  email: string;
  socialUrl: string;
  establishmentId: number;
  password: string;
}


// establishment-volunteer-dto.interface.ts
export interface EstablishmentVolunteerDTO{
  name: string;
  address: string;
  pageURL: string;
  phoneNumber: string;
  otherContacts: string;
  cityId: number;
}


