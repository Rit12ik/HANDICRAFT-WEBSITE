import React from 'react'
import {useFormik} from 'formik'
import *as Yup from'yup'
import Swal from 'sweetalert2'
const addProductSchema=Yup.object().shape({

})

const AddProduct = () => {
  const addProductForm=useFormik({
    initialValues:{
      name:'',
      company:'',
      price:'',
      discription:'',
      material:'',
      image:''
    },
  
    onSubmit:async(values)=>{
      console.log(values);
      const res = await fetch('http://localhost:2000/product/add', {
        method: 'POST',
        body: JSON.stringify(values),
        header: { 'Content-Type': 'application/json' }
      })
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Singup Successfully',
          text: 'Go to login page'
        })
      
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong'
        })
      
    }
  },
  
  validationSchema:addProductSchema
    
  })
  return (
    <div style={{marginTop: '10rem'}}>
      <form onSubmit={addProductForm.handleSubmit}>
        <body className='d-flex justify-content-center align-items-center w-100'>
          
        <div className="add-product">
          <h4>Add Your Product</h4>
          <span style={{color:'red',fontSize:14}}>{addProductForm.touched.name && addProductForm.errors.name}</span>

        <label htmlFor="name">Product Name</label>
        <input type="text" className='myinput2' onChange={addProductForm.handleChange} value={addProductForm.values.name} name='name' />
        <span style={{color:'red',fontSize:14,marginLeft:14}}>{addProductForm.touched.name && addProductForm.errors.name}</span>

        <label htmlFor="product">Company Name</label>
        <input type="name" className='myinput2' onChange={addProductForm.handleChange} value={addProductForm.values.company} name='company' />
        <span style={{color:'red',fontSize:14,marginLeft:14}}>{addProductForm.touched.name && addProductForm.errors.name}</span>
        <label htmlFor="prize">Price</label>
        <input type="prize" className='myinput2' onChange={addProductForm.handleChange} value={addProductForm.values.prize} name='prize' />
        <span style={{color:'red',fontSize:14,marginLeft:14}}>{addProductForm.touched.name && addProductForm.errors.name}</span>
        <label htmlFor="discription">Discription</label>
        <textarea name="discription" id="" type="discription" onChange={addProductForm.handleChange} value={addProductForm.values.discription} className='myinput2'></textarea>
        <span style={{color:'red',fontSize:14,marginLeft:14}}>{addProductForm.touched.name && addProductForm.errors.name}</span>
        <label htmlFor="material">Material</label>
        <input type="material" name='material' onChange={addProductForm.handleChange} value={addProductForm.values.material} className='myinput2' />
        <span style={{color:'red',fontSize:14,marginLeft:14}}>{addProductForm.touched.name && addProductForm.errors.name}</span>
        <label htmlFor="file">Upload Image</label>
        <br />

        <input type="file" name='file' onChange={addProductForm.handleChange} value={addProductForm.values.image} className='myinput2' />
        
        <div>
          <button className='save' type='submit' onChange={addProductForm.handleChange}>Send{alert.type}</button>:{alert.msg}
        </div>
        </div>
        </body>
        
      </form>
      
    </div>
  )
}

export default AddProduct
