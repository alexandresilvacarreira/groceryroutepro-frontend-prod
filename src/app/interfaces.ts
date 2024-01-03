interface Signup {
  name: string,
  email: string,
  password: string
}

interface ServerResponse {
  message: string,
  success: boolean,
  userRole?:string,
  user?:User
}

interface Login {
  email: string,
  password: string
}

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  includeWhiteLabel: boolean;
  maxStoreRadiusKm: number;
  vehicleFuelType: string;
  vehicleConsumption: number;
  stores: Store[];
  role: Role;
}

interface Role {
  id: number;
  name: string;
  users: User[];
}

interface Store {
  id: number;
  name: string;
  users: User[];
}

interface Chain {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  brand: string;
  quantity: string;
  imageUrl: string;
  chain: Chain;
  categories: Category[];
}

interface Price {
  id: number;
  primaryValue: number;
  primaryUnit: string;
  secondaryValue: number;
  secondaryUnit: string;
  discountPercentage: number;
  priceWoDiscount: string;
  collectionDate: string;
}

interface ProductDetails {
  product: Product;
  prices: Price[];
  success: boolean;
  errorMessage: string;
}

interface ProductWPrice {
  name: string;
  chain: string;
  chainId:number;
  priceWoDiscount: string;
  imageUrl: string;
  quantity: string;
  brand: string;
  priceCollectionDate: string;
  priceDiscountPercentage: number;
  pricePrimaryValue: number;
  pricePrimaryUnit: string;
  priceSecondaryUnit: string;
  priceSecondaryValue: number;
  priceId: number;
  productId: number;
}

interface Pagination {
  currentPage: number;
  size: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface ProductWPriceList {
  products: ProductWPrice[];
  success: boolean;
  errorMessage: string | null;
  pagination: Pagination;
}


export {
  Signup,
  Login,
  ServerResponse,
  User,
  Role,
  Store,
  Chain,
  Price,
  Category,
  Product,
  ProductDetails,
  ProductWPrice,
  Pagination,
  ProductWPriceList
}
