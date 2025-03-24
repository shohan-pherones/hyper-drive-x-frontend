export interface IBrand {
  id: string;
  name: string;
  logoUrl: string;
  originCountry: string;
  foundedYear: number;
  description: string;
  websiteUrl: string;
  models: ICar[];
}

export interface ICar {
  id: string;
  brand: IBrand;
  modelName: string;
  year: number;
  engineType: "petrol" | "diesel" | "electric" | "hybrid";
  transmission: "manual" | "automatic";
  bodyStyle: "sedan" | "suv" | "coupe" | "hatchback" | "convertible";
  price: number;
  horsepower: number;
  topSpeed: number;
  description: string;
  imageUrl: string;
  isAvailable: boolean;
}
