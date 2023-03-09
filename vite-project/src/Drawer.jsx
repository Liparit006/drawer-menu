import React,{useState} from "react"
function Drawer() {
    const [toggle,setTogle] = useState(false)

    return(
        <div id="main">
            <div id="box">
                <div id="img-box">
                    <img onClick={ ()=> setTogle(!toggle)} src="https://cdn-icons-png.flaticon.com/512/8933/8933889.png" alt="" />
                </div>
                {toggle && (
                    <div id="drawer-box" >
                        <ul>
                            <li>menu</li>
                            <li>contact</li>
                            <li>about us</li>
                            <li>login</li>
                        </ul>
                    </div>
                )} 
            </div>
            
        </div>
    )
}

export default Drawer