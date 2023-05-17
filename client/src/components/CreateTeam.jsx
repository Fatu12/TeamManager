import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
const CreateTeam = (props) => {
    const [errors, setErrors] = useState({})
    const [players, setPlayers] = useState({
        name: '',
        position: ''
    })
    const Navigate = useNavigate()
    const onClickHandler = (e) => {
        setPlayers({ ...players, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/player/addplayer', players)
            .then(res => {
                console.log("FRONT END CREATE", res);
                console.log('FRONT END CREATE RES DATA', res.data)
                Navigate('/')

            })
            .catch(err => {
                console.log('something went wrong FRONT END CREATE')
                console.log(err);
                setErrors(err.response.data.errors)

            })
    }


    return (

        <div class='row'>

            <div className='row justify-content-center'>
                <div className="row">
                    <h1>Manage Player | Manage  Player Status</h1>
                    <p>List | Add Player</p>
                    <form className="col-md-4 offset-1" onSubmit={submitHandler}>
                        {/* {errors.map((err, index) => <p key={index}>{err} </p>)} */}


                        <h4> Add player</h4>
                        <div className="form-group ">
                            <p>
                                {
                                    errors.name ? <p> {errors.name.message} </p> : null
                                }
                                {/* {userData.firstName && userData.firstName.length < 2 ? 
                <p> first name must be at least 2 characters </p>:null
                } */}
                                {/* {
                                    errors.name  && <p> {errors.name.message}  </p>
                                } */}
                                <label>Player Name:</label>
                                <input type="text" name="name" placeholder=' Enter player name' className="form-control  "
                                    onChange={onClickHandler} />

                            </p>

                            <p>

                                <label>Preferred Position :</label>
                                <input type="text" name="position" placeholder=' Enter Position ' className="form-control  "
                                    onChange={onClickHandler} />

                            </p>
                        </div>
                        <div class="d-flex m-100 " style={{ marginRight: "100px" }} >
                            <button className="btn btn-primary mt-3">ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default CreateTeam