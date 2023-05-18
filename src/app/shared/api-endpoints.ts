export const apiEndpoints = {
  baseUrl: 'https://localhost:7115/api/',
  admins: {
    checkReport: (id: string) => `Admins/CheckReport/${id}`,
    actionReport: 'Admins/ActionReport',
    suspendProduct: 'Admins/SuspendProduct',
    unSuspendedProduct: (id: string) => `Admins/UnSuspendedProduct/${id}`,
    suspendVendor: 'Admins/SuspendVendor',
    unSuspendedVendor: (id: string) => `Admins/UnSuspendedVendor/${id}`,
    ViewAdminProfile: 'Admins/ViewAdminProfile'
  },
  auth: {
    customerRegister: 'Auth/CustRegister',
    vendorRegister: 'Auth/VendorRegister',
    adminLogin: 'Auth/AdminLogin',
    login: 'Auth/Login',
    modifyPhoto: 'Auth/ModifyPhoto',
    deletePhoto: 'Auth/DeletePhoto',
  },
  carts: {
    getCustomerCart: 'Carts/GetCustomerCart',
    getOrderSummary: 'Carts/GetOrderSummary',
    payment: 'Carts/Payment',
    incrementQuantity: (id: string) => `Carts/IncrementQuantity/${id}`,
    decrementQuantity: (id: string) => `Carts/DecrementQuantity${id}`,
    removeFromCart: (id: string) => `Carts/RemoveFromCart/${id}`,
    cancelOrder: (id: string) => `Carts/CancelOrder/${id}`,
    testPay: 'Carts/testPay'
  },
  customers: {
    rateProduct: 'Customers/RateProduct',
    addToWishList: 'Customers/addToWishList',
    deleteFromWishList: 'Customers/DeleteFromWishList',
    askQuestion: 'Customers/AskQuestion',
    addToCart: 'Customers/addToCart',
    reportProduct: 'Customers/ReportProduct',
    viewCustomerProfile: 'Customers/ViewCustomerProfile',
    editCustomerProfile: 'Customers/EditCustomerProfile',
    viewVendorProfile: 'Customers/ViewVendorProfile',
    editVendorProfile: 'Customers/EditVendorProfile'
  },
  productsActions: {
    productsActions: (threshold: string) => `ProductsActions/NeedToPunch/${threshold}`
  },
  products: {
    getProductsPage: 'Products/GetProductsPage',
    getProductDetails: `Products/GetProductDetails`,
    getSuspendedProducts: 'Products/GetSuspendedProducts'
  },
  productsReports: {
    getAllReports: 'ProductsReports/GetAllReports',
    getUncheckedReports: 'ProductsReports/GetUncheckedReports'
  },
  superAdmin: {
    createAdmin: 'SuperAdmin/CreateAdmin',
    getAllAdmins: 'SuperAdmin/GetAllAdmins',
    getAdminProfile: 'SuperAdmin/GetAdminProfile',
    editAdminProfile: 'SuperAdmin/EditAdminProfile',
    modifyAdminPhoto: 'SuperAdmin/ModifyAdminPhoto',
  },
  vendor: {
    getAllQuestions: 'Vendors/GetAllQuestions',
    getQuestion: 'Vendors/GetQuestionById',
    answerQuestion: 'Vendors/AnswerQuestion',
    addProduct: 'Vendors/AddProduct',
    updateQuantity: 'Vendors/AddQuantity',
    getSuspendedVendor: 'Vendors/GetSuspendedVendor',
    getPendingOrders: 'Vendors/GetPendingOrders',
    confirmPendingOrders: (orderId: string, productId: string) => `Vendors/ConfirmtPendingOrders/${orderId}/${productId}`,
    viewOwnProducts: 'Vendors/ViewOwnProducts',
    viewVendorProfile:'Vendors/ViewVendorProfile',
    editVendorProfile: 'Vendors/EditVendorProfile'
  },
  wishesLists: {
    getCustomerWishList: 'WishesLists/GetCustomerWishList'
  }
};
