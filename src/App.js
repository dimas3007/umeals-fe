import { Route, Routes } from "react-router-dom";

// Layout
import User from "./layouts/User";
import Admin from "./layouts/Admin";

// User Pages
import Auth from "./pages/Auth";
import Plans from "./pages/plans/Plans";
import Landing from "./pages/Landing";
import ListMeals from "./pages/ListMeals";
import DetailMeal from "./pages/DetailMeal";
import ProtectedRoute from "./utils/ProtectedRoute";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import Settings from "./pages/admin/Settings";
import Table from "./pages/admin/Table";
import Ingredients from "./pages/admin/ingredient/Ingredients";
import Meals from "./pages/admin/meal/Meals";
import Users from "./pages/admin/users/Users";
import HistoryOrders from "./pages/admin/history/HistoryOrders";
import ManagePlans from "./pages/admin/plans/ManagePlans";
import MealForm from "./pages/admin/meal/MealForm";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<User />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Auth type="login" />} />
          <Route path="/register" element={<Auth type="register" />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/meals" element={<ListMeals />} />

          <Route element={<ProtectedRoute isAuthenticated={true} />}>
            <Route path="/meals/:id" element={<DetailMeal />} />
          </Route>
        </Route>

        <Route element={<Admin />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/setting" element={<Settings />} />
          <Route path="/admin/table" element={<Table />} />
          <Route path="/admin/ingredients" element={<Ingredients />} />
          <Route path="/admin/meals" element={<Meals />} />
          <Route path="/admin/meals/add" element={<MealForm />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/history-order" element={<HistoryOrders />} />
          <Route path="/admin/plans" element={<ManagePlans />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
