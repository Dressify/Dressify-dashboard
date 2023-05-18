export const apiEndpoints = {
  baseUrl: 'https://localhost:7115/api/',
  admins: {
    viewAdminProfile: `Admins/ViewAdminProfile`,
    createSales: `Admins/CreateSales`,
    getAllSales: `Admins/GetAllSales`,
    getAllVendors: 'Admins/GetAllVendors',
    getSalesProfile: `Admins/GetSalesProfile`,
    editSalesProfile: `Admins/EditSalesProfile`,
    checkReport: `Admins/CheckReport`,
    actionReport: 'Admins/ActionReport',
    suspendProduct: 'Admins/SuspendProduct',
    unSuspendedProduct: `Admins/UnSuspendedProduct`,
    suspendVendor: 'Admins/SuspendVendor',
    unSuspendedVendor: `Admins/UnSuspendedVendor`,
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
    getOrders: 'Vendors/GetOrders',
    getPendingOrders: 'Vendors/GetPendingOrders',
    getOrderDetails: 'Vendors/GetOrderById',
    confirmPendingOrders: `Vendors/ConfirmtPendingOrders`,
    viewOwnProducts: 'Vendors/ViewOwnProducts',
    viewVendorProfile:'Vendors/ViewVendorProfile',
    editVendorProfile: 'Vendors/EditVendorProfile'
  },
  sales: {
    getAllQuestions: 'Sales/GetAllQuestions',
    getQuestion: 'Sales/GetQuestionById',
    answerQuestion: 'Sales/AnswerQuestion',
    addProduct: 'Sales/AddProduct',
    updateQuantity: 'Sales/AddQuantity',
    getOrders: 'Sales/GetSalesOrders',
    getPendingOrders: 'Sales/GetPendingSalesOrders',
    getOrderDetails: 'Sales/GetOrderById',
    confirmPendingOrders: `Sales/ConfirmPendingOrders`,
    viewOwnProducts: 'Sales/ViewSalesProducts'
  },
  wishesLists: {
    getCustomerWishList: 'WishesLists/GetCustomerWishList'
  }
};
