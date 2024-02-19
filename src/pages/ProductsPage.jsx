// import React from 'react' 

// const ProductsPage = ({products, onRemove}) => {
//   return (
//     <>
//     <h1>Quản lý sản phẩm </h1>
//   <table className="table table-bordered">
//     <thead>
//         <tr>
//             <th>#</th>
//             <th>Ảnh</th>
//             <th>Tên</th>
//             <th>Giá</th>
//             <th width="150"></th>
//         </tr>
//     </thead>
//     <tbody>
//         {products.map((product, index) =>(
//             <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>
//                     <img src={product.img}/>
//                 </td>
//                 <td>{product.name}</td>
//                 <td>{product.price}</td>
//                 <td>
//                     <div className='flex tw-space-x-3'>
//                     <button 
//                     data-id ={product.id}
//                     className='btn btn-danger btn-sm'
//                     onClick={() => onRemove(product.id) }>
//                         Xóa
//                     </button>
//                     <button className='btn btn-primary btn-sm'>Cập nhật</button>
//                     </div>
//                 </td>
//             </tr>
//         ))}
//     </tbody>


      
//     </table>
//     </>
//   )
// };

// export default ProductsPage