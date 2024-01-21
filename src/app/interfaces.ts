import LatLng = google.maps.LatLng;
import LatLngBounds = google.maps.LatLngBounds;
import GeocoderComponentRestrictions = google.maps.GeocoderComponentRestrictions;

interface Signup {
  name: string,
  email: string,
  password: string
}

interface ServerResponse {
  message: string,
  success: boolean,
  userRole?: string,
  user?: User
}

interface Login {
  email: string,
  password: string
}

interface User {
  id: number,
  name: string,
  email: string,
  // password: string,
  includeWhiteLabel: boolean,
  maxStoreRadiusKm: number,
  vehicleFuelType: string,
  vehicleConsumption: number,
  stores: Store[],
  role: Role,
  verifiedEmail: boolean,
  confirmation: {
    code: string
  },
  currentShoppingList : ShoppingList
}

interface Role {
  id: number,
  name: string,
  users: User[],
}

interface Store {
  id: number,
  name: string,
  users: User[],
}

interface Chain {
  id: number,
  name: string,
}

interface Category {
  id: number,
  name: string,
}

interface Product {
  id: number,
  name: string,
  brand: string,
  quantity: string,
  imageUrl: string,
  chain: Chain,
  categories: Category[],
  prices: Price[],
  genericProduct: GenericProduct,
  cheapestForGenericProduct: GenericProduct,
}

interface Price {
  id: number,
  primaryValue: number,
  primaryUnit: string,
  secondaryValue: number,
  secondaryUnit: string,
  discountPercentage: number,
  priceWoDiscount: string,
  collectionDate: string,
  genericProduct: GenericProduct
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
  chainId: number;
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

interface GenericProduct {
  id: number,
  name: string,
  brand: string,
  quantity: string,
  processedName: string,
  processedBrand: string,
  processedQuantity: string,
  currentLowestPricePrimaryValue: number,
  currentLowestPrice: Price,
  currentCheapestProduct: Product,
  categories: Category[],
  chains: Chain[],
  products: Product[]
}

interface GenericProductResponse {
  data: {
    genericProduct: GenericProduct
  },
  success: boolean,
  message?:string
}

interface GenericProductsListResponse {
  data: {
    genericProducts: GenericProduct[],
    pagination: Pagination
  },
  success: boolean,
  message?: string
}

interface EmailVerificationToken {
  token: string
}

interface ChangePasswordInterface {
  token: string,
  password: string
}

interface ProductSearchFilterOptions {
  sort: string,
  categories: number[],
  chains: number[]
}

interface PersonilizedMapMarker {
  place_id: string,
  markerPosition: google.maps.LatLngLiteral,
  title: string
}


interface ShoppingListResponse {
  data: {
    shoppingList: ShoppingList
  },
  success: boolean,
  message?: string
}

interface ShoppingList {
  id: number,
  fastestListCost: number,
  cheapestListCost: number,
  creationDate: string,
  genericProductQuantities: GenericProductQuantity[],
  fastestProductQuantities: ProductQuantity[],
  cheapestProductQuantities: ProductQuantity[],
}

interface GenericProductQuantity {
  id: number,
  quantity: number,
  value: number,
  genericProduct : GenericProduct
}

interface ProductQuantity {
  id: number,
  quantity: number,
  value: number,
  product : Product
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
  ProductWPriceList,
  EmailVerificationToken,
  ChangePasswordInterface,
  ProductSearchFilterOptions,
  GenericProduct,
  GenericProductResponse,
  GenericProductsListResponse,
  ShoppingListResponse,
  ShoppingList,
  GenericProductQuantity,
  ProductQuantity,
  PersonilizedMapMarker

}
