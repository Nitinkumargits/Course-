import React, { createContext, useContext, useReducer, useEffect } from "react";

const AppContext = createContext();

// Initial state
const initialState = {
  darkMode: false,
  cart: [],
  user: null,
  isAuthenticated: false,
};

// Action types
const ACTIONS = {
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  LOAD_CART: "LOAD_CART",
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    case ACTIONS.ADD_TO_CART:
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return state; // Item already in cart
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case ACTIONS.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case ACTIONS.LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        cart: [],
      };

    case ACTIONS.LOAD_CART:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      if (savedDarkMode === "true" && !state.darkMode) {
        dispatch({ type: ACTIONS.TOGGLE_DARK_MODE });
      }
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", state.darkMode);
    if (state.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.darkMode]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const cartData = JSON.parse(savedCart);
        dispatch({ type: ACTIONS.LOAD_CART, payload: cartData });
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // Action creators
  const toggleDarkMode = () => {
    dispatch({ type: ACTIONS.TOGGLE_DARK_MODE });
  };

  const addToCart = (course) => {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: course });
  };

  const removeFromCart = (courseId) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: courseId });
  };

  const clearCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART });
  };

  const login = (userData) => {
    dispatch({ type: ACTIONS.LOGIN, payload: userData });
  };

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
  };

  const value = {
    ...state,
    toggleDarkMode,
    addToCart,
    removeFromCart,
    clearCart,
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
