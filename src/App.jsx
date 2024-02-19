import './App.css'
import { Link, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
// import ProductAdd from './pages/ProductAdd';
import Header from './components/layout/layouts/Header';
import Slidebar from './components/layout/layouts/Slidebar';
import ProductPage from './pages/admin/product';
import DashboardPage from './pages/admin/dashboarh';
import { addProduct, getProducts, removeProductById, updateProduct } from './api/product';
import ProductAddPage from './pages/admin/product-add';
import ProductEditPage from './pages/admin/product-edit';

function App() {


  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      console.log(data);
      setProducts(data);
    })()
  }, [])
  const onHandleRemove = async (id) => {
    const confirm = window.confirm('Are you fucking sure???');
    if (confirm) {
      try {
        await removeProductById(id);
        toast.success('Xóa sản phẩm thành công');
        // rerender
        setProducts(products.filter(product => product.id !== id));
      } catch (error) {
        toast.error('Xoá sản phẩm thành công');
      }
    }

  };





  const onHandleAdd = async (product) => {
    try {
      const data = await addProduct(product);
      toast.success('Thêm sản phẩm thành công');
      console.log(data);
      //rerender
      setProducts([...products, data]);
    } catch (error) {
      toast.error(error)
    }
  };

  const onHandleUpdate = async (product) => {
    try {
      await updateProduct(product);
      toast.success('Cập nhật phẩm thành công');
      //rerender
      const newProducts = products.map((item) => (item.id === product.id ? product : item));
      setProducts(newProducts);
      //1-2-3-4-5
      //setProducts([...product, data]);
    } catch (error) {
      toast.error(error)
    }
  };

  return (
    <>



      <div>

        <Header />
        <div className="container-fluid">
          <div className="row">

            <Slidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Routes>
                <Route path='/' element={<h1>Home Page</h1>} />
                <Route path='admin' element={<DashboardPage />} />
                <Route
                  path='admin/product'
                  element={<ProductPage products={products}
                    onRemove={onHandleRemove}
                  />
                  }
                />
                <Route
                  path="admin/product/add"
                  element={<ProductAddPage onAdd={onHandleAdd} />}
                />
                <Route
                  path="admin/product/:id/edit"
                  element={<ProductEditPage onUpdate={onHandleUpdate} />}
                />
              </Routes>

            </main>
          </div>
        </div>
        <ToastContainer />

      </div>
    </>
  )

}

export default App
