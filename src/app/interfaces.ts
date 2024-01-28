import LatLng = google.maps.LatLng;
import LatLngLiteral = google.maps.LatLngLiteral;

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
  chain: Chain,
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
interface ProductData{
  product: Product;
  price: Price;
}

interface ProductWPrice {
  name: string;
  chain: string;
  chainId: number;
  genericProductId: number;
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

interface ProductSearchFilterOptions {
  sort: string,
  categories: number[],
  chains: number[]
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
interface LatLngName extends LatLngLiteral{
   nameLocation: string;
}
interface RouteObject{
  polyline:string;

  coordenadasMarcadores: LatLngName[];

  totalTime: number;

  shoppingListCost: number;

  vertices: LatLng[];

  chainIdList: number[];
  chainNameList: string[];
}

interface RouteResponse {
  data: {
    routes :RouteObject[]
  },
  success: boolean,
  message?: string

}
interface RouteWaypoint{
  coordenadas: {lat: number,lng: number},
  label: string
}


export {
  Signup,
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
  ProductSearchFilterOptions,
  GenericProduct,
  GenericProductResponse,
  GenericProductsListResponse,
  ShoppingListResponse,
  ShoppingList,
  GenericProductQuantity,
  ProductQuantity,
  ProductData,
  RouteResponse,
  RouteObject,
  LatLngName,
  RouteWaypoint
}
