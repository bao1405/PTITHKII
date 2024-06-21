import React from 'react'
import { useSelector } from 'react-redux';
import State from '../interfaces/State';
export default function Notify() {
    const notify=useSelector((state:State)=>state.notify);
  return (
    <div>
      {notify==='noProduct'
          && <div className="alert alert-sucess" role="alert" id="mnotification">
             There is no product in your cart !
          </div>
        }
        {notify==='add'
          && <div className="alert alert-success" role="alert" id="mnotification">
            Add to cart successfully
          </div>
        }
        {notify==='update'
          && <div className="alert alert-warning" role="alert" id="mnotification">
           Update product successfully
          </div>
        }
        {notify==='delete'
          && <div className="alert alert-danger" role="alert" id="mnotification">
             Delete product successfully!
          </div>
        }
        {notify=='no'&&''}
    </div>
  )
}