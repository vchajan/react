import {
   BrowserRouter as Router,
   Routes,
   Route,
   useParams,
} from "react-router-dom";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/users/:userId" element={<UserPage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
         </Routes>
      </Router>
   );
}

function UserPage() {
   let { userId } = useParams();
   return <div>User ID: {userId}</div>;
}

function ProductPage() {
   let { productId } = useParams();
   return <div>Product ID: {productId}</div>;
}

export default App;
