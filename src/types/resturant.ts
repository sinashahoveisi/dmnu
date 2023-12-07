export interface LocationInterface {
  address: string;
  latitude: number;
  longitude: number;
}

export interface TimeInterface {
  start: string;
  end: string;
}

export interface ShiftWorkInterface {
  day: string;
  time: TimeInterface;
}

export interface ResturantInterface {
  name: string;
  description: string;
  phone: string;
  location: LocationInterface;
  shiftsWork: Array<ShiftWorkInterface>;
}

export interface ProductInterface {
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export interface CategoryInterface {
  id: string;
  name: string;
  image: string;
}

export interface MenuInterface {
  category: CategoryInterface;
  products: ProductInterface[];
}
