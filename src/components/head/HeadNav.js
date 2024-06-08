import React, { useState, useEffect } from 'react';
// import LoginForm from '../components/LoginForm';


const url = "http://18.117.255.214:8082/users/";
// const modalBg = document.querySelector(".modal-bg");


export const HeadNav = () => {
    const [show, setShow] = useState(false);
    const list = "bg-active";
    var [modalBg, setModalBg] = useState();

    const modalBtn = document.querySelector(".modalBtn");
    const modalClose = document.querySelector(".btn-close");

    const handleShow = () => setShow(true);
    const url2 = "http://localhost:8082/login"

    useEffect(() => {
        // modalBg = document.getElementById("modal");
        setModalBg(document.getElementById("modal"));
        return () => {
        }
    }, []);
    
    async function handleLogin(e) {
        e.preventDefault();
        console.log("Client intitiated Login");
        // setShow(true)

        try {
            modalBg.classList.toggle(list);
            // const response = await axios.get(url2);
            // if (response.status === 200) {
            //     console.log("User successfully loggin in");
            // }
        } catch (error) {
            console.log("User cound not log in " + error);
            // handleLogin(e)
        }
    }

    const toggleModal = (e)=> {
        e.preventDefault();
        modalBg.classList.toggle(list);
    }


    return (
        <div className="flex justifyend " style={{ marginRight: "", marginTop: '10%' }}>
            <div className=" flex justifyend alignitems"
                style={{ marginRight: "", }}  >
                <div className="modalBtn flex alignitems"
                    style={{ fontSize: ".8rem", padding: "", pointer: "cursor" }}
                    onClick={handleLogin}>


                    {/* <a href="/"
                    className="btn btn-link btn-sm flex  alignitems"
                    style={{ fontSize: ".8rem", padding: "", marginRight: "" }}
                    onClick={handleLogin}
                > */}
                    <img type="button" src="
                    https://cdn3.iconfinder.com/data/icons/UltimateGnome/256x256/actions/gnome-session-logout.png
                    " alt="login pointer"
                    style={{ width: "26px", height: '25px', marginBottom: "3px", padding: "" }}>
                    </img>

                    <div className="" style={{ color: "whitesmoke", marginLeft: "5px" }}>
                        User Login
                    </div>
                    {/* </a > */}
                </div>

            </div>
            <div id="modal"
                // className={show ? "modal-bg,bg-active " : "modal-bg"}
                className="modal-bg" onClick={toggleModal}       >
                {/* {show ?   <div className="modal-dialog" style={{ width: "100%", height: "400px" }}>
                    <LoginForm />
                </div> : null} */}
                {/* <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button> */}
                <div className="modal-dialog" style={{ width: "100%", height: "400px" }}>
                    {/* <LoginForm /> */}
                </div>

            </div >
        </div >
    )
}
