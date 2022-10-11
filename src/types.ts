export interface elementType {
  carClassId: number;
  carClassName: string;
  carModel: string;
  image: string;
  drivingDistance: number;
  year: number;
  price: number;
  discountPercent: number;
  regionGroups: string[];
  carTypeTags: string[];
}

export type queryDataType = {
  data: elementType[];
  fetchNextPage?: any;
};
export interface isValidProp {
  disabled: boolean;
}
export interface carouselProp {
  carouselIndex: number;
}

//carInfoType
export interface carInfoType {
  carClassId: string;
  carClassName: string;
  carImage: string;
  maker: string;
  carModel: string;
  capacity: number;
  fuel: string;
  gearbox: string;
  additionalOption: string[];
  safetyOption: string[];
}
export type carInfoQueryType = {
  data: carInfoType[];
};
