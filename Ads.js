import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import { dellProducts, editProducts,setProducts } from "./redux/productAction";

const Ads = () => {
  let [ename, set_ename] = useState("");
  let [img, set_img] = useState();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);


  const fetchProducts = async()=>{
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
      console.log('Error',err)
    })
   dispatch(setProducts(response.data))
  }
  useEffect(() => {
    
    fetchProducts()
  }, [])
  console.log(products);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {products.map((obj, ind) => {
          return (
            <div key={ind}>
              <div className="card " style={{ width: "18rem"}}>
                <img src={ obj.image} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{obj.title}</h5>
                  <h5 className="card-title">{obj.name}</h5>
                  <p className="card-text">{obj.description}</p>

                  <>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target={"#exampleModal"+ind}
                    > 
                      Edit
                    </button>
                    {/* Modal */}
                    <div
                      className="modal fade"
                      id={"exampleModal"+ind}
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Select a new pic
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="form-group">
                                <input
                                  ref={img}
                                  onChange={(ev) => {
                                    set_img(ev.target.files[0]);
                                  }}
                                  type="file"
                                  placeholder="Pic here"
                                ></input>
                              </div>
                            </form>
                          </div>
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Enter the Name
                            </h5>
                          </div>
                          <div className="modal-body">
                            <div className="input-group mb-3">
                              <input
                                value={ename}
                                onChange={(e) => {
                                  set_ename(e.target.value);
                                }}
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button data-index={ind}
                              onClick={(evt) =>
                                dispatch(
                                  editProducts({
                                    ind:evt.target.getAttribute('data-index'),
                                    name: ename,
                                    image: URL.createObjectURL(img),
                                  })
                                )
                              }
                              type="button"
                              data-dismiss="modal"
                              className="btn btn-primary"
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                  <button
                    onClick={() => dispatch(dellProducts(ind))}
                    style={{ marginLeft: "20px" }}
                    className="btn btn-primary"
                  >
                    Dell
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ads;
